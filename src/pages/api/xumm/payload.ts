import xummController from '@/controller/xumm.controller';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import { authorizeXumm, reqApiKeyMatch } from '@/api/middleware/xumm.middleware';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST') {
    let payload = await xummController.payload(req, res);
    if (payload) return;
  }

  return res.status(400).json({ success: false, message: 'Only POST requests are allowed.' });
};

export default reqApiKeyMatch(handler);
