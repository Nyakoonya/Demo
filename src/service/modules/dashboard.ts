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

export const deleteDashboard = (id: string | number): Promise<any> => request.delete({
  url: `/api/dashboards/${id}`
})

export const setIndexPageDash = (id: string | number): Promise<any> => request.post({
  url: `/api/dashboards/setmainpagedashboard/${id}`
})

export const getIndexPageDash = (): Promise<any> => request.get({
  url: '/api/dashboards/getMainPage'
})