import prisma from '@/prisma';

const create = async (req: any) => {
  const newEvent = await prisma.auditEvent.create({
    data: {
      url: req.url,
      method: req.method,
      params: req.body,
      query: req.query,
      userId: req.id,
    },
  });

  return newEvent;
};

const events = async () => await prisma.auditEvent.findMany();

const findByUserId = async (id: any) => {
  const newUser = await prisma.auditEvent.findMany({
    where: {
      userId: id,
    },
  });

  return newUser;
};

export default {
  create,
  findByUserId,
  events,
};
