import prisma, { PrismaObj } from '@/prisma';
import config from 'config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import refreshService from './refresh.service';
import { User } from 'prisma/generated/client';
import Role from '../constants/roles';
import emailService from './email.service';

const authenticate = async ({
  username,
  password,
  ipAddress,
}: {
  username: string;
  password: string;
  ipAddress: string | undefined;
}) => {
  const user = await prisma.user.findFirst({
    where: { username: username },
  });

  if (!user || !user.verified || !bcrypt.compareSync(password, user.passwordHash)) {
    return {
      status: 'error',
      message: 'Email or password is incorrect',
      refreshToken: '',
    };
  }

  // authentication successful so generate jwt and refresh tokens
  const jwtToken = generateJwtToken(user.id);
  const refreshToken = await generateRefreshToken(user.id, ipAddress);

  // return basic details and tokens
  return {
    status: 'success',
    user: basicDetails(user),
    jwtToken,
    refreshToken: refreshToken.token,
  };
};

const register = async (params: any, origin: any) => {
  try {
    // validate
    if (
      await prisma.user.findFirst({
        where: {
          email: params.email,
        },
      })
    ) {
      let user = await prisma.user.findFirst({
        where: {
          email: params.email,
        },
      });
      if (!user) return;
      // send already registered error in email to prevent account enumeration
      await emailService.sendAlreadyRegisteredEmail(params.email, origin);
      return basicDetails(user);
    }

    // first registered account is an admin
    const isFirstAccount = (await prisma.user.count({})) === 0;
    params.role = isFirstAccount ? Role.Admin : Role.User;
    params.verificationToken = randomTokenString();

    // hash password
    params.passwordHash = hash(params.password);

    // create account object
    const newUser = await prisma.user.create({
      data: {
        username: params.username,
        email: params.email,
        passwordHash: params.passwordHash,
        role: params.role,
        verificationToken: params.verificationToken,
      },
    });

    // send email
    await emailService.sendVerificationEmail(newUser, origin);

    return basicDetails(newUser);
  } catch (e) {
    console.log(e);
    if (e instanceof PrismaObj.PrismaClientKnownRequestError) return handlePrismaError(e);
    return handleGeneralError('register');
  }
};

const create = async (params: any) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        username: params.username,
        email: params.email,
        passwordHash: params.username,
        role: params.role,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

const refreshToken = async ({
  token,
  ipAddress,
}: {
  token: string;
  ipAddress: string | undefined;
}) => {
  const refreshToken = await getRefreshToken(token);
  if (refreshToken.status == 'error') return refreshToken;
  const userId = refreshToken.token?.userId || '';

  // replace old refresh token with a new one and save
  const newRefreshToken = await generateRefreshToken(userId, ipAddress);

  await prisma.refresh.update({
    where: { id: refreshToken.token?.id },
    data: {
      revoked: new Date(),
      revokedByIp: ipAddress,
      replacedByToken: newRefreshToken.token,
    },
  });

  // generate new jwt
  const jwtToken = generateJwtToken(userId);

  // find user details
  let user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  // return basic details and tokens
  return {
    status: 'success',
    jwtToken,
    user,
    refreshToken: newRefreshToken.token,
  };
};

const revokeToken = async ({ token, ipAddress }: { token: string; ipAddress: string }) => {
  const refreshToken = await getRefreshToken(token);
  if (refreshToken.status == 'error') return refreshToken;
  // revoke token and save

  const revoke = await prisma.refresh.update({
    where: { id: refreshToken.token?.id },
    data: {
      revoked: new Date(),
      revokedByIp: ipAddress,
    },
  });

  return { status: 'success', message: revoke };
};

async function verifyEmail({ token }: { token: string }) {
  let user = await prisma.user.findFirst({
    where: {
      verificationToken: token,
    },
  });

  if (!user) return { status: 'error', message: 'Verification failed' };

  const update = await prisma.user.update({
    where: { id: user.id },
    data: {
      verified: true,
      verificationToken: '',
    },
  });

  return { status: 'success', update: update };
}

async function findByUsername({ username }: { username: string }) {
  let user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  return user;
}

async function findByEmail({ email }: { email: string }) {
  let user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  return user;
}

const users = async () => await prisma.user.findMany();

const findByUsernameOrEmail = async (param: string) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          username: param,
        },
        {
          email: param,
        },
      ],
    },
  });
  return user;
};

const findById = async (id: any) => {
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  return user;
};

const getRefreshToken = async (token: string) => {
  const refreshToken = await prisma.refresh.findFirst({ where: { token: token } });
  if (!refreshToken || refreshToken.revoked || Date.now() >= Number(refreshToken.expiresAt))
    return { status: 'error', message: 'Invalid token' };
  return { status: 'success', token: refreshToken };
};

const hash = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

const randomTokenString = () => {
  return crypto.randomBytes(40).toString('hex');
};

const generateJwtToken = (id: string) => {
  let secret = config.jwt.secret;
  if (!secret) return;
  // create a jwt token containing the account id that expires in 15 minutes
  return jwt.sign({ sub: id, id: id }, secret, { expiresIn: '3m' });
};

const generateRefreshToken = async (id: any, ipAddress: string | undefined) => {
  // create account object
  const newToken = await prisma.refresh.create({
    data: {
      userId: id,
      token: randomTokenString(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      createdByIp: ipAddress,
    },
  });

  return newToken;
};

const basicDetails = (user: User) => {
  const { id, username, role, verified } = user;
  return { status: true, id, username, role, verified };
};

const handleGeneralError = (type: string) => {
  return {
    status: 'error',
    type: type,
    message: 'There was an interal server error for this request. Please try again.',
  };
};

const handlePrismaError = (e: any) => {
  // The .code property can be accessed in a type-safe manner
  if (e.code === 'P2002') {
    let key: any = e.meta?.target;
    return {
      status: 'error',
      message: `This ${key.split('_')[1]} is already taken.`,
    };
  }
  return {
    status: 'error',
    message: `Unknown database error. Try again`,
  };
};

export default {
  create,
  findByUsernameOrEmail,
  findById,
  users,
  register,
  authenticate,
  revokeToken,
  refreshToken,
  verifyEmail,
  findByEmail,
  findByUsername,
};
