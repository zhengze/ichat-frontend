import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
axios.defaults.timeout = 2000;

// axios 请求拦截
axios.interceptors.request.use(function(response){
    // 在 headers 中设置authorization 属性放token，token是存在缓存中的
    response.headers.authorization = 'Bearer ' + localStorage["accessToken"];
    return response
}, function (error) {
    return Promise.reject(error);
  })
// axios 响应拦截器
axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

export default axios;