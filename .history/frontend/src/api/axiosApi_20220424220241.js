import axios from "axios"


const axiosApi = axios.create({
    baseURL: 'http://localhost:5000/api/'
})

axiosApi.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });