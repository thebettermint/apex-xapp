/* import { ValidateProps } from 'api/constants'; */
/* import { auths, validateBody } from 'api/middleware'; */
//import createRouter from 'next-connect';
//import expressWrapper from 'next-connect';
import { authorize, authorizeByRole } from 'api/middleware/authorize.middleware';
//import userController from '@/controller/user.controller';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== 'GET') {
    return res.status(400).json({ success: false, message: 'Only GET requests are allowed.' });
  }

  if (method == 'GET') {
    return res.json('pong');
  }
};

export default authorize(authorizeByRole(handler, ['user']));
