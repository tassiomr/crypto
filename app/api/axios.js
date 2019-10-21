import axios from 'axios';
import { userAgent } from '../utils/deviceInfo';
import { baseURL } from './endpoints';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async (config) => {
    const requestConfig = config;
    const agentConfig = await userAgent;
    requestConfig.headers['User-Agent'] = agentConfig;

    return requestConfig;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default api;
