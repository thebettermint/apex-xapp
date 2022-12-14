import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import fund from '@thebettermint/xrpl-auto-funder';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST') {
    try {
      let response = await fund({
        publicAddress: req.body.publicAddress,
        network: req.body.network,
      });

      return res.json({ success: true, response: response });
    } catch (error) {
      return res.status(error.response.status).send(error.response.data);
    }
  }

  return res.status(400).json({ success: false, message: 'Only POST requests are allowed.' });
};

export default handler;
