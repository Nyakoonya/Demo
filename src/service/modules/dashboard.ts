import request from "../index";
export const fetchDashboards = (params: any): Promise<IDashboardsRes> =>
  request.get({
    url: "/dashboards",
    params,
  });
