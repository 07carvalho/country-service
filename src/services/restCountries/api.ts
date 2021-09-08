import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REST_COUNTRIES_API_URL
});
export default api;
