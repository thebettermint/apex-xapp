import xAppController from '@/controller/xapp.controller';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import { authorizeXumm, reqApiKeyMatch } from '@/api/middleware/xumm.middleware';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST') {
    let payload = await xAppController.init(req, res);
    if (payload) return;
  }

  return res.status(400).json({ success: false, message: 'Only GET requests are allowed.' });
};

export default authorizeXumm(reqApiKeyMatch(handler));
