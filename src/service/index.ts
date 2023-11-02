import Request from "./Request";
import { store, history } from "@/redux/Store";
import { logoutSuccess } from "@/redux/actionCreators/entities/user/action";
import { AuthError } from "@/utils/common";
import { message } from "@/components/Common/EscapeAntd";
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
      console.log('err interceptor catch', err);
      if (err.response.status === 404) {
        console.log("not found");
      }
      if (err.response.status == 401 || err.response.status == 403) {
        Promise.resolve().then(() => {
          store.dispatch(logoutSuccess())
          localStorage.removeItem('token');
          localStorage.removeItem('userData');
        }).then(() => {
          message.error(err.message)
        }).then(() => {
          history.push('/login');
        })
      }
      return err;
    },
  },
});
console.log('service', service)
export default service;
