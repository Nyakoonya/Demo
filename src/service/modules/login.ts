import request from "../index";
export const LoginAPI = (params: any): Promise<ILoginRes> =>
  request.post({
    url: "/login",
    params,
  });


