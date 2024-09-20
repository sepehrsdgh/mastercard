import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "/api",
});

const axiosInstanceBackend = axios.create({
  baseURL: process.env.EXTERNAL_API_URL,
});

export {axiosInstance, axiosInstanceBackend};
