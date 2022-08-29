import Joi from 'joi';
import validateRequest from 'api/middleware/validate.middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import userService from '../services/user.service';
import { ExtendedNextApiRequest } from 'types/next';
import { serialize } from 'cookie';
import roles from '../constants/roles';
import config from 'config';
import refreshService from '../services/refresh.service';

const authenticateSchema = (req: NextApiRequest, res: NextApiResponse) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  return validateRequest(req, res, schema);
};

const authenticate = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;
  const ipAddress = req.ip;

  let resp = await userService.authenticate({ username, password, ipAddress });
  if (resp?.status === 'error') return handleError(resp, res);

  setTokenCookie(res, resp.refreshToken);
  res.json(resp.user);

  return 'success';
};

const refreshToken = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const token = req.cookies.refreshToken;
  const ipAddress = req.ip;

  if (!token) return handleError({ status: 'error', message: 'Token is required' }, res);

  let resp = await userService.refreshToken({ token, ipAddress });

  if (resp?.status === 'error') return handleError(resp, res);

  if ('refreshToken' in resp && 'user' in resp) {
    setTokenCookie(res, resp.refreshToken);
    res.json({ ...resp.user, jwtToken: resp.jwtToken });
    return 'success';
  }

  return 'error';
};

const revokeTokenSchema = (req: NextApiRequest, res: NextApiResponse) => {
  const schema = Joi.object({
    token: Joi.string().empty(''),
  });
  return validateRequest(req, res, schema);
};

const revokeToken = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  // accept token from request body or cookie
  const token = req.body.token || req.cookies.refreshToken;
  const ipAddress = req.ip;

  if (!token) return handleError({ status: 'error', message: 'Token is required' }, res);

  let ownsToken = await req.user.ownsToken(req.user.id, token);
  // users can revoke their own tokens and admins can revoke any tokens
  console.log(ownsToken);
  if (!ownsToken && req.user.role !== roles.Admin) {
    return handleError({ status: 'error', message: 'Unauthorized' }, res);
  }

  let resp = await userService.revokeToken({ token, ipAddress });
  if (resp?.status === 'error') return handleError(resp, res);

  res.json({
    message: resp.message,
  });

  return 'success';
};

const registerSchema = (req: NextApiRequest, res: NextApiResponse) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    //recovery: Joi.string().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    acceptTerms: Joi.boolean().required(),
  });
  return validateRequest(req, res, schema);
};

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  let host = req.headers?.host || 'localhost';
  let protocol = /^localhost(:\d+)?$/.test(host) ? 'http:' : 'https:';
  let origin = protocol + '//' + host;
  let resp = await userService.register(req.body, origin);
  if (resp?.status === 'error') return handleError(resp, res);
  res.json({
    message: 'Registration successful, please check your email for verification instructions',
  });
  return 'success';
};

const verifyEmailSchema = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.token && req.query['token']) req.body.token = req.query['token'];

  console.log(req.body.token);

  if (!req.body.token) return handleError({ message: `Validation error: Token not found` }, res);

  const schema = Joi.object({
    token: Joi.string().required(),
  });

  return validateRequest(req, res, schema);
};

const verifyEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  let resp = await userService.verifyEmail(req.body);

  if (resp?.status === 'error') return handleError(resp, res);

  //res.redirect('http://localhost:3000/complete')
  res.json({ message: 'Verification successful, you can now login' });

  return 'success';
};

// helper functions

const setTokenCookie = (res: NextApiResponse, token: string) => {
  // create cookie with refresh token that expires in 7 days
  const cookieOptions = {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: false,
    secure: config.run !== 'development',
    path: '/',
  };
  res.setHeader('Set-Cookie', serialize('refreshToken', token, cookieOptions));
};

const ping = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.json('pong');
};

const handleError = (resp: any, res: NextApiResponse) => {
  console.log(resp.message);
  res.status(403).json({
    message: resp.message,
  });
  return 'error';
};

export default {
  ping,
  authenticate,
  authenticateSchema,
  register,
  registerSchema,
  revokeToken,
  revokeTokenSchema,
  refreshToken,
  verifyEmailSchema,
  verifyEmail,
};
