import jwt from 'jsonwebtoken';
import config from 'config';
import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';

const uuidv4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

const reqApiKeyMatch = (handler: any) => {
  return async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    let reqApiKey = req.headers['x-api-key'];
    if (typeof reqApiKey == 'object') reqApiKey = reqApiKey[0];

    if (typeof reqApiKey === 'string' && uuidv4.test(reqApiKey.trim())) {
      const envKey = 'XAPP_' + reqApiKey.trim().replace(/-/g, '_');
      if (Object.keys(process.env).indexOf(envKey) > -1) {
        // Attach prepared axios headers on this specific req.
        Object.assign(req, {
          xummAuthHeaders: {
            headers: {
              'X-API-Key': reqApiKey.trim(),
              'X-API-Secret': process.env[envKey],
            },
          },
        });
        return handler(req, res);
      }
    }
    console.log('Invalid or missing req API key header');
    res.status(403).json({
      msg: 'Preflight error, missing API key header or invalid',
      error: true,
    });
  };
};

const authorizeXumm = (handler: any) => {
  return async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    try {
      let authorization = req.headers['Authorization'];
      console.log(authorization);
      if (typeof authorization == 'object') authorization = authorization[0];

      if (authorization == null)
        return res.status(403).json({
          msg: 'JWT missing valid API Key',
          //error: e.message
        });
      const decodedJwt = jwt.verify(authorization, config.xumm.secret);

      if (typeof decodedJwt === 'string') return null;
      const reqApiKey = decodedJwt['app'];

      if (typeof reqApiKey === 'string' && uuidv4.test(reqApiKey.trim())) {
        const envKey = 'XAPP_' + reqApiKey.trim().replace(/-/g, '_');

        if (Object.keys(process.env).indexOf(envKey) > -1) {
          // Attach prepared axios headers on this specific req.

          Object.assign(req, {
            xummAuthHeaders: {
              headers: {
                'X-API-Key': reqApiKey.trim(),
                'X-API-Secret': process.env[envKey],
              },
            },
          });

          // `return` to skip the error response, no code after here
          return handler(req, res);
        }
      }

      console.log('Invalid or missing req API key in JWT');
      res.status(403).json({
        msg: 'JWT missing valid API Key',
        //error: e.message
      });
    } catch (e: any) {
      res.status(403).json({
        msg: 'invalid token',
        error: e.message,
      });
    }
  };
};

export { reqApiKeyMatch, authorizeXumm };
