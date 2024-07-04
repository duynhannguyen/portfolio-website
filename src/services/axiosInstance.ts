import axios from "axios";

const SEVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;
const BASE_API_URL = `${SEVER_DOMAIN}/api/v1`;

const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 60000,
});

export default api;
