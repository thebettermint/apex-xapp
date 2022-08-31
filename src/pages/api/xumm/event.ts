import xummController from '@/controller/xumm.controller';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import { authorizeXumm } from '@/api/middleware/xumm.middleware';
import axios from 'axios';

axios.defaults.baseURL = 'https://xumm.app/api/v1/platform';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST') {
    try {
      const response = await axios.post('/event', req.body, req.xummAuthHeaders);
      res.json(response.data);
    } catch (e) {
      console.log(`XUMM API error @ curated assets: ${e.message}`);
      res.status(400).json({
        msg: e.message,
        error: true,
      });
    }
  }

  return res.status(400).json({ success: false, message: 'Only POST requests are allowed.' });
};

export default authorizeXumm(handler);
