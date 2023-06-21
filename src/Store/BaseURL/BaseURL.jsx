import axios from 'axios';
const API_URL_PROD = "https://api.alumniplus.in";
const API_URL_DEV = "http://139.59.30.64:4000";
const API_URL_LOCAL = "http://192.168.1.167:8000";

const axiosApi = axios.create({
    baseURL: API_URL_LOCAL,
  });
  axiosApi.interceptors.request.use(
    function (config) {
      // const token = useGetToken(TOKEN_PREFIX);
      const token = localStorage.getItem("token");
      // config.headers["Institution"] = "643a646e01740c9db3376afc"
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    function (error) {
      return error;
    }
  );

  export async function get(url, config = {}) {
    return await axiosApi
      .get(url, { ...config })
      .then((response) => response.data);
  }
  
  export async function post(url, data, config = {}) {
    return axiosApi
      .post(url, { ...data }, { ...config })
      .then((response) => response.data);
  }
  
  export async function ApiPut(url, data, config = {}) {
    return axiosApi
      .put(url, { ...data }, { ...config })
      .then((response) => response.data);
  }
  
  export async function del(url, config = {}) {
    return await axiosApi
      .delete(url, { ...config })
      .then((response) => response.data);
  }
  