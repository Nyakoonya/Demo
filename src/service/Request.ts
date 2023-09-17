import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import type { RequestConfig, RequestInterceptors } from "./interceptorType";
import { store, history } from "@/redux/Store";
import { logoutSuccess } from "@/redux/actionCreators/entities/user/action";
import { AuthError } from "@/utils/common";
import { message } from "@/components/Common/EscapeAntd";
class Request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;

  constructor(config: RequestConfig) {
    console.log('config', config)
    this.instance = axios.create(config);
    this.interceptors = config.interceptors!;

    /** use interceptors */
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // add common interceptors applied to all instances
    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers!["authorization"] = token;
        }
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res: any) => {
        console.log('res interceptor', res)
        if (res.data) {
          const data = res.data
          if (data.code === 0) {
            return data
          } else {
            message.error(data.msg);
            return data;
          }
        } else {
          const { data } = res.response;
          // handle with the response 
          Promise.resolve().then(() => {
            throw new AuthError(data)
          }).catch(err => {
            if (err.status == 401 || err.status == 403) {
              Promise.resolve().then(() => {
                store.dispatch(logoutSuccess())
                localStorage.removeItem('token');
                localStorage.removeItem('userData');
              }).then(() => {
                message.error(err.message)
              }).then(() => {
                history.push('/login')
              })
            }
          })

        }
      },
      (err) => {
        console.log('err interceptor', err)
        // handle with the differrent errors
        if (err.response.status === 404) {
          console.log("not found");
        }
        return err;
      }
    );
  }

  request<T = any>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 2.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          console.log('err inter', err)
          reject(err);
          return err;
        });
    });
  }
  get<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }

  put<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PUT" });
  }

  delete<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}
export default Request;