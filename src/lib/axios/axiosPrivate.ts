import axios from 'axios';
import { memoizedRefreshToken } from './refreshToken';

axios.defaults.baseURL =
  process.env.NODE_ENV == 'production'
    ? 'https://checksumso.vercel.app/api'
    : 'http://localhost:3000/api';

const axiosPrivate = (store: any) => {
  axios.interceptors.request.use(
    async (config) => {
      if (store.jwt) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${store.jwt}`,
        };
      }

      return config;
    },
    (error) => {
      store.router('/landing');
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const config = error?.config;

      if (error?.response?.status === 401 && !config?.sent) {
        config.sent = true;

        const result = await memoizedRefreshToken(store);

        if (result?.accessToken) {
          config.headers = {
            ...config.headers,
            authorization: `Bearer ${result?.accessToken}`,
          };
        }

        return axios(config);
      }

      store.router('/landing');
      return Promise.reject(error);
    }
  );
  return axios;
};

export { axiosPrivate };
