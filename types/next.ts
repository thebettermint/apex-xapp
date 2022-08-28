import type { NextApiRequest } from 'next';
import type { NextRequest } from 'next/server';

export interface UserPayload {
  id?: string;
  email?: string;
  role?: string;
  ownsToken: (id: any, token: any) => Promise<boolean>;
}

export interface ExtendedNextApiRequest extends NextApiRequest {
  user: UserPayload;
  ip: string;
}

export interface IUser {
  username: string;
  accessToken: string;
  id: string;
}
