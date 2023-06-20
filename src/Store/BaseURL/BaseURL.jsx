import axios from axios;
const API_URL_PROD = "https://api.alumniplus.in";
const API_URL_DEV = "http://139.59.30.64:4000";
const API_URL_LOCAL = "http://192.168.1.167:8000";

const axiosApi = axios.create({
    baseURL: API_URL_LOCAL,
  });
  