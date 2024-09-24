import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

const axiosInstanceBackend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL,
});

export {axiosInstance, axiosInstanceBackend};
