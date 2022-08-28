import { NextApiRequest, NextApiResponse } from 'next';

const validateRequest = (req: NextApiRequest, res: NextApiResponse, schema: any) => {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    res.status(400).json({ message: error.message });
    return false;
  }
  req.body = value;
  return true;
};

export default validateRequest;
