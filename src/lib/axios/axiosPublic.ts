import axios from 'axios';

export const axiosPublic = axios.create({
  baseURL:
    process.env.NODE_ENV == 'production'
      ? 'https://checksumso.vercel.app/api'
      : 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
