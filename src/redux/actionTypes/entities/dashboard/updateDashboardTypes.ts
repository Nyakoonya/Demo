export const UPDATE_DASHBOARD = 'UPDATE_DASHBOARD';
export const UPDATE_DASHBOARD_SUCCESS = 'UPDATE_DASHBOARD_SUCCESS';
export const UPDATE_DASHBOARD_FAIL = 'UPDATE_DASHBOARD_FAIL';

export interface UPDATE_DASHBOARD {
    type: typeof UPDATE_DASHBOARD
}

export interface UPDATE_DASHBOARD_SUCCESS {
    type: typeof UPDATE_DASHBOARD_SUCCESS,
    payload: any
}

export interface UPDATE_DASHBOARD_FAIL {
    type: typeof UPDATE_DASHBOARD_FAIL,
    err?: any
}


export type UpdateDashboardActionType = UPDATE_DASHBOARD | UPDATE_DASHBOARD_SUCCESS | UPDATE_DASHBOARD_FAIL;