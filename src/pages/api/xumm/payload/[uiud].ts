import xummController from '@/controller/xumm.controller';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import { authorizeXumm } from '@/api/middleware/xumm.middleware';
import axios from 'axios';

axios.defaults.baseURL = 'https://xumm.app/api/v1/platform';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'GET') {
    let { payload_uuid } = req.query;

    if (typeof payload_uuid === undefined) {
      console.log('No token given respond 400');
      return res.status(400).json({
        msg: 'Token undefined',
        error: true,
      });
    }

    try {
      const response = await axios.get(`/payload/${payload_uuid}`, req.xummAuthHeaders);
      res.json(response.data);
    } catch (e) {
      console.log(`XUMM API error @ payload get: ${e.message}`);
      res.status(400).json({
        msg: e.message,
        error: true,
      });
    }
  }
  return res.status(400).json({ success: false, message: 'Only GET requests are allowed.' });
};

export default authorizeXumm(handler);
