import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: window.location.origin+"/api",
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
  // https://axios-http.com/zh/docs/instance axios詳情