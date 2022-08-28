import { axiosPrivate } from '@/lib/axios/axiosPrivate';
import { axiosPublic } from '@/lib/axios/axiosPublic';

const register = async ({
  username,
  email,
  password,
  confirmPassword,
  acceptTerms,
}: {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}) => {
  try {
    let response = await axiosPublic.post(`/users/register`, {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      acceptTerms: acceptTerms,
    });

    console.log(response);
    return undefined;
  } catch (error: any) {
    return Error(error);
  }
};

const authenticate = async ({ user, pass }: { user: string; pass: string }) => {
  try {
    let response = await axiosPublic.post(`/users/authenticate`, {
      username: user,
      password: pass,
    });
    return response.data;
  } catch (error: any) {
    return Error(error.response.data.message);
  }
};

const revoke = async (store: any) => {
  let response = await axiosPrivate(store).post(`/users/revoke-token`);

  console.log(response);

  return response;
};

const update = async (id: string, params: any, store: any) => {
  try {
    let response = await axiosPrivate(store).put(`/users/${id}`, params);
    return response.data;
  } catch (error: any) {
    return Error(error.response.data.message);
  }
};

const verifyEmail = async (authToken: string) => {
  try {
    let response = await axiosPublic.post(`/users/verify-email`, { token: authToken });

    console.log(response.data);
    return response.data;
  } catch (e: any) {
    return Error;
  }
};

const checkEmail = async ({ email }: { email: string }) => {
  try {
    let response = await axiosPublic.get(`/users/email-exists/${email}`);
    return response.data;
  } catch (e: any) {
    return Error;
  }
};

const checkUsername = async ({ username }: { username: string }) => {
  try {
    let response = await axiosPublic.get(`/users/user-exists/${username}`);
    return response.data;
  } catch (e: any) {
    return Error;
  }
};

export default {
  authenticate,
  update,
  verifyEmail,
  register,
  //getWallets,
  revoke,
  checkUsername,
  checkEmail,
  //getKey,
};
