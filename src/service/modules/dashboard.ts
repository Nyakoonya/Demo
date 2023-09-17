import request from "../index";
export const fetchDashboards = (params: IDashParams): Promise<IDashboardsRes> =>
  request.get({
    url: "/api/dashboards/list",
    params,
  });

export const createDashboard = (payload: IDashParams): Promise<any> => request.post({
  url: '/api/dashboards/create',
  data: payload
})

export const updateDashboard = (payload: IDashUpdate): Promise<any> => request.put({
  url: '/api/dashboards',
  data: payload
})

export const deleteDashboard = (id: string): Promise<any> => request.delete({
  url: `/api/dashboards/${id}`
})
