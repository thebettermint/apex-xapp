import userController from '@/controller/user.controller';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import { authorize, authorizeByRole } from '@/api/middleware/authorize.middleware';
import roles from '@/api/constants/roles';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST' || method == 'GET') {
    let verify = await userController.revokeToken(req, res);
    if (verify) return;
  }

  return res.status(400).json({ success: false, message: 'Only POST/GET requests are allowed.' });
};

export default authorize(authorizeByRole(handler, [roles.User, roles.Admin]));
