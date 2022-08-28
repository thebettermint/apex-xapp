import mem from 'mem';

import { axiosPublic } from './axiosPublic';

const refreshTokenFn = async (store: any) => {
  console.log('refreshing');
  try {
    const response = await axiosPublic.post(
      '/users/refresh-token',
      {},
      { withCredentials: true, headers: { 'Content-Type': 'application/json' } }
    );

    if (!response.data.jwtToken) {
      store.router('/landing');
      return;
    }

    store.setJwt(response.data.jwtToken);
    store.setUser(response.data);

    return { accessToken: response.data.jwtToken };
  } catch (error) {
    console.log('this is the error before redirect', error);
    store.router('/landing');
    return;
  }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
