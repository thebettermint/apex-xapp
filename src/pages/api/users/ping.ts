import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import { authorize, authorizeByRole } from '@/api/middleware/authorize.middleware';
import roles from '@/api/constants/roles';
import userController from '@/controller/user.controller';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== 'GET') {
    return res.status(400).json({ success: false, message: 'Only GET requests are allowed.' });
  }

  if (method == 'GET') {
    let response = await userController.ping(req, res);
    return response;
  }
};

export default authorize(authorizeByRole(handler, [roles.User, roles.Admin]));
