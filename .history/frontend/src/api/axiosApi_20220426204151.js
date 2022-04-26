import axios from "axios"


const axiosApi = axios.create({
    baseURL: 'http://localhost:5000/api/'
})

axiosApi.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axiosApi.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

export default axiosApi