import userController from '@/controller/user.controller';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST' || method == 'GET') {
    let validate = userController.verifyEmailSchema(req, res);
    if (!validate) return;
    let verify = await userController.verifyEmail(req, res);
    if (verify) return;
  }

  return res.status(400).json({ success: false, message: 'Only POST/GET requests are allowed.' });
};

export default handler;
