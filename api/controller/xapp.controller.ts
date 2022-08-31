import xumm from '../helpers/xumm';
import jwt from 'jsonwebtoken';
import config from 'config';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';

axios.defaults.baseURL = 'https://xumm.app/api/v1/platform';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const uuidv4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

const init = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const { ott } = query;

  const token = ott;

  if (typeof token !== 'string') {
    console.log('No token given respond 400');
    res.status(400).json({
      msg: 'Token undefined / invalid',
      error: true,
    });
    return 'error';
  }

  if (!uuidv4.test(token)) {
    console.log('No token given respond 401');
    res.status(401).json({
      msg: 'Invalid token format',
      error: true,
    });
    return 'error';
  }

  try {
    const response = await axios.get(`/xapp/ott/${token}`, req.xummAuthHeaders);

    const authToken = jwt.sign(
      {
        ott: token,
        app: req.xummAuthHeaders.headers['X-API-Key'],
      },
      config.xumm.secret,
      { expiresIn: '4h' }
    );

    response.data['token'] = authToken;
    res.json(response.data);
    return 'success';
  } catch (e) {
    console.log(`XUMM API error @ ott fetch: ${e.message}`);
    res.status(400).json({
      msg: e.message,
      error: true,
    });
    return 'error';
  }
};

const handleError = (resp: any, res: NextApiResponse) => {
  console.log(resp.message);
  res.status(403).json({
    message: resp.message,
  });
  return 'error';
};

export default {
  init,
};
