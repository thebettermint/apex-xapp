import userController from '@/controller/user.controller';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST') {
    let refresh = await userController.refreshToken(req, res);
    if (refresh) return;
  }

  return res.status(400).json({ success: false, message: 'Only GET requests are allowed.' });
};

export default handler;
