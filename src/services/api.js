import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://animechan.vercel.app/api/'
});

export default api;