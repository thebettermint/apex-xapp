import xummController from '@/controller/xumm.controller';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import { reqApiKeyMatch } from '@/api/middleware/xumm.middleware';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'GET') {
    let init = await xummController.init(req, res);
    if (init) return;
  }

  return res.status(400).json({ success: false, message: 'Only GET requests are allowed.' });
};

export default reqApiKeyMatch(handler);
