/* import { ValidateProps } from 'api/constants'; */
/* import { auths, validateBody } from 'api/middleware'; */
//import createRouter from 'next-connect';
//import expressWrapper from 'next-connect';
//import userController from '@/controller/user.controller';
import { authorize, authorizeByRole } from 'api/middleware/authorize.middleware';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  console.log(req.user);

  if (method == 'GET') return res.json({ success: true, response: req.user });

  return res.status(400).json({ success: false, message: 'Only GET requests are allowed.' });
};

export default authorizeByRole(handler, 'user');
