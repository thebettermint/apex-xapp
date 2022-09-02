import { NextApiResponse } from 'next';
import { ExtendedNextApiRequest } from 'types/next';
import xrplFunder from '@thebettermint/xrpl-auto-funder';

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method == 'POST') {
    let response = await xrplFunder({
      publicAddress: req.body.publicAddress,
      network: req.body.network,
    });

    return res.json({ success: true, response: response });
  }

  return res.status(400).json({ success: false, message: 'Only POST requests are allowed.' });
};

export default handler;
