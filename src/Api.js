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
  console.log('interceptor req >>', state);

  const token = JSON.parse(localStorage.getItem('user'));

  config.params = config.params || {};
  config.headers.Authorization = token;

  return config;
});

api.interceptors.response.use((response) => {
  console.log('interceptor response >>>', response);

  return response;
});

export default api;
