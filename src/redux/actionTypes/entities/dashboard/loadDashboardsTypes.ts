export const LOAD_DASHBOARDS = 'LOAD_DASHBOARD';
export const LOAD_DASHBOARDS_SUCCESS = 'LOAD_DASHBOARD_SUCCESS';
export const LOAD_DASHBOARDS_FAIL = 'LOAD_DASHBOARD_FAIL';

export interface LOAD_DASHBOARDS {
    type: typeof LOAD_DASHBOARDS
}

export interface LOAD_DASHBOARDS_SUCCESS {
    type: typeof LOAD_DASHBOARDS_SUCCESS,
    payload: any
}

export interface LOAD_DASHBOARDS_FAIL {
    type: typeof LOAD_DASHBOARDS_FAIL,
    err: any
}


export type LoadDashboardsActionType = LOAD_DASHBOARDS | LOAD_DASHBOARDS_SUCCESS | LOAD_DASHBOARDS_FAIL;