import axios from 'axios';
import { configStore } from './redux/store';

const api = axios.create({
  baseURL: 'https://aws-task-pfxn.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use((config) => {
  const state = configStore.getState();
  console.log(state);

  config.params = config.params || {};
  config.params['auth'] = 'dfafdfd';

  return config;
});

api.interceptors.response.use((response) => {


  return response;
});

export default api;
