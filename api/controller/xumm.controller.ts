import xumm from '../helpers/xumm';
import jwt from 'jsonwebtoken';
import config from 'config';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';

const init = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  let secret = config.xumm.secret;
  if (!secret) return handleError({ status: 'error', message: 'XUMM Secret not found' }, res);
  let authToken;
  if (secret)
    authToken = jwt.sign(
      {
        app: req.xummAuthHeaders.headers['X-API-Key'],
      },
      secret,
      { expiresIn: '4h' }
    );

  res.json(authToken);
  return 'success';
};

const payload = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    let baseUrl = 'https://xumm.app';
    let url = new URL(`/api/v1/platform/payload`, baseUrl);
    const response = await axios.post(url.href, req.body, req.xummAuthHeaders);
    console.log(response);
    res.json(response.data);
    return 'success';
  } catch (e: any) {
    console.log(`XUMM API error @ payload post: ${e.message}`);
    res.status(400).json({
      msg: e.message,
      error: true,
    });
    return 'fail';
  }
};

const getUserToken = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = req.query;
    let { uuid } = query;
    if (!uuid) return handleError({ status: 'error', message: 'UUID is required' }, res);

    if (typeof uuid == 'object') uuid = uuid[0];

    const about = await xumm.getAddress(uuid);
    const user_token = await xumm.getUserToken(uuid);
    res.send({
      data: { key: about.key, server: about.node, user: user_token },
      msg: 'Successfully acquired uuid metadata',
    });
  } catch (e: any) {
    console.log(`API error @ init: ${e.message}`);
    res.status(400).json({
      msg: e.message,
      error: true,
    });
  }
};

const getPayloadMetadata = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    let uuid = req.body.uuid || req.query.uuid;

    if (!uuid) return handleError({ status: 'error', message: 'UUID is required' }, res);

    if (typeof uuid == 'object') uuid = uuid[0];

    const about = await xumm.getPayload(uuid);
    res.send({
      data: about,
      msg: 'Successfully acquired uuid metadata',
    });
    return 'success';
  } catch (e: any) {
    console.log(`API error @ init: ${e.message}`);
    res.status(400).json({
      msg: e.message,
      error: true,
    });
    return 'fail';
  }
};

const getQrCode = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.body.type.method) {
    case 'xumm':
      xumm.signIn().then((data) => {
        res.send(data);
      });
      break;
  }
};

const getTxHash = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  let { uuid } = query;
  if (!uuid) return handleError({ status: 'error', message: 'UUID is required' }, res);

  if (typeof uuid == 'object') uuid = uuid[0];

  const result: any = await xumm.getPayload(uuid);
  const hash = result.response.txid;
  res.send({ data: hash });
};

const ping = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.json('pong');
};

const handleError = (resp: any, res: NextApiResponse) => {
  console.log(resp.message);
  res.status(403).json({
    message: resp.message,
  });
  return 'error';
};

export default {
  ping,
  getUserToken,
  getPayloadMetadata,
  getQrCode,
  getTxHash,
  payload,
  init,
};
