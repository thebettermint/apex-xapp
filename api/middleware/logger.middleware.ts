import eventService from 'api/services/event.service';
import { NextApiRequest, NextApiResponse } from 'next';

const logger = async (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const auditEvent = await eventService.create(req);
    console.log(auditEvent.createdAt, auditEvent.method, auditEvent.url);
    return handler(req, res);
  };
};

export default logger;
