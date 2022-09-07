import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import config from 'config';

import axios from 'axios';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST') {
    try {
      let response = await axios.get(`${config.api.url}/find/address/${req.body.address}`, {
        headers: {
          Authorization: `Bearer ${config.api.secret}`,
        },
      });

      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(error.response.status).send(error.response.data);
    }
  }
  return res.status(400).json({ success: false, message: 'Only POST requests are allowed.' });
};

export default handler;
