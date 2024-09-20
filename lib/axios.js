import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production'?process.env.NEXT_PUBLIC_API_BASE_URL:"http://localhost:3000/api",
});

const axiosInstanceBackend = axios.create({
  baseURL: process.env.EXTERNAL_API_URL,
});

export {axiosInstance, axiosInstanceBackend};
