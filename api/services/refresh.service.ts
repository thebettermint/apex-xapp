import prisma from '@/prisma';
import crypto from 'crypto';

const randomTokenString = () => {
  return crypto.randomBytes(40).toString('hex');
};

const generateRefreshToken = (user: { id: string }, ipAddress: string) => {
  // create a refresh token that expires in 7 days
  return prisma.refresh.create({
    data: {
      userId: user.id,
      token: randomTokenString(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      createdByIp: ipAddress,
    },
  });
};

const findById = async (id: any) => {
  // create a refresh token that expires in 7 days
  let data = await prisma.refresh.findFirst({
    where: { userId: id },
  });

  return [data?.token || undefined];
};

const ownsToken = async (id: any, token: any) => {
  // create a refresh token that expires in 7 days
  let refreshTokens = await prisma.refresh.findMany({
    where: { userId: id },
  });

  return !!refreshTokens.find((x: { token: any }) => x.token === token);
};

export default {
  generateRefreshToken,
  findById,
  ownsToken,
};
