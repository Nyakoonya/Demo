import Request from "./Request";
/** base config */
const BASE_URL = `http://${process.env.API}:${process.env.HOST}/api`;
// const BASE_URL = '/api'
console.log('BASE_URL', BASE_URL)
const TIME_OUT = 5000;
const baseConfig = {
  BASE_URL,
  TIME_OUT,
};
/** create instance */
const service = new Request({
  ...baseConfig,
  interceptors: {
    requestInterceptor: (config) => {
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
});
console.log('service', service)
export default service;
