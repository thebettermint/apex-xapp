import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import config from 'config';

import axios from 'axios';

axios.defaults.baseURL = config.ipfs.gateway;

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST') {
    let response = await axios.get(req.body.cid, {
      responseType: 'json',
      onDownloadProgress: function (progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        //console.log(percentCompleted)
      },
    });

    if (response instanceof Error)
      return res.status(500).json({ success: false, message: response.message });

    return res.json({ success: true, response: response.data });
  }

  return res.status(400).json({ success: false, message: 'Only POST requests are allowed.' });
};

export default handler;
