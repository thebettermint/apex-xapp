import xummController from '@/controller/xumm.controller';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import { reqApiKeyMatch } from '@/api/middleware/xumm.middleware';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  console.log('... server request, finding metadata for payload');
  const query = req.query;
  console.log(query);
  let { uuid } = query;
  console.log(uuid);

  if (method == 'GET') {
    let meta = await xummController.getPayloadMetadata(req, res);
    if (meta) return;
  }

  return res.status(400).json({ success: false, message: 'Only GET requests are allowed.' });
};

export default reqApiKeyMatch(handler);
