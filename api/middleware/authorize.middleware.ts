import jwt from 'jsonwebtoken';
import config from 'config';
//import userService from 'api/services/user.service';
//import refreshService from 'api/services/refresh.service';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import refreshService from '../services/refresh.service';
import userService from '../services/user.service';

const authorize = (handler: any) => {
  return async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    console.log(token);
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Please log in to get access.',
      });
    }
    // Remove Bearer from string
    if (token && typeof token == 'string') token = token.replace(/^Bearer\s+/, '');

    if (token && typeof token == 'string') {
      jwt.verify(token, config.jwt.secret || 'jwt-secret', (err: any, decoded: any) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' });
        req.user = decoded;
        console.log(decoded);
        return handler(req, res);
      });
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
};

const authorizeByRole = (handler: any, ...roles: any) => {
  // authorize based on user role
  return async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    const user = await userService.findById(req.user.id);

    if (!user || (roles[0].length && !roles[0].includes(user.role))) {
      // account no longer exists or role not authorized
      console.log('fail role');
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // authentication and authorization successful
    req.user = { id: user.id, role: roles[0], ownsToken: refreshService.ownsToken };

    return handler(req, res);
  };
};

export { authorize, authorizeByRole };
