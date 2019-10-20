import axios from 'axios';
import { END_POINTS } from './endpoints';

axios.create({
  baseURL: END_POINTS.BASE_URL,
});

axios.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      const requestConfig = error.config;
      return axios(requestConfig);
    }
    return Promise.reject(error);
  },
);

export default axios;
