import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import config from 'config';

import axios from 'axios';

axios.defaults.baseURL = config.api.url;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST') {
    let response = await axios.post(
      `/claimed`,
      { uuid: req.body.uuid },
      {
        headers: {
          Authorization: `Bearer ${config.api.secret}`,
        },
      }
    );

    return res.json({ success: true, response: response.data });
  }

  return res.status(400).json({ success: false, message: 'Only POST requests are allowed.' });
};

export default handler;
