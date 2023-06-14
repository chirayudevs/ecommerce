import axios from 'axios';
import api from '../Api';

const APP_BASE_URL = api.defaults.baseURL;

export const Get = (url, config) => {
  return axios.get(APP_BASE_URL + url, config);
};

export const Post = (url, data, config) => {
  return axios.post(APP_BASE_URL + url, data, config);
};

export const Put = (url, data, config) => {
  return axios.put(APP_BASE_URL + url, data, config);
};

export const Delete = (url, config) => {
  return axios.delete(APP_BASE_URL + url, config);
}