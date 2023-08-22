export const ADD_DASHBOARD = 'ADD_DASHBOARD';
export const ADD_DASHBOARD_SUCCESS = 'ADD_DASHBOARD_SUCCESS';
export const ADD_DASHBOARD_FAIL = 'ADD_DASHBOARD_FAIL';

export interface ADD_DASHBOARD {
  type: typeof ADD_DASHBOARD
}

export interface ADD_DASHBOARD_SUCCESS {
  type: typeof ADD_DASHBOARD_SUCCESS
}

export interface ADD_DASHBOARD_FAIL {
  type: typeof ADD_DASHBOARD_FAIL,
  err: any
}


export type AddDashboardActionType = ADD_DASHBOARD | ADD_DASHBOARD_SUCCESS | ADD_DASHBOARD_FAIL;