export const DELETE_DASHBOARD = "DELETE_DASHBOARD";
export const DELETE_DASHBOARD_SUCCESS = "DELETE_DASHBOARD_SUCCESS";
export const DELETE_DASHBOARD_FAIL = "DELETE_DASHBOARD_FAIL";

export interface DELETE_DASHBOARD {
    type: typeof DELETE_DASHBOARD
}

export interface DELETE_DASHBOARD_SUCCESS {
    type: typeof DELETE_DASHBOARD_SUCCESS,
    payload: any
}

export interface DELETE_DASHBOARD_FAIL {
    type: typeof DELETE_DASHBOARD_FAIL,
    err?: any
}


export type DeleteDashboardActionType = DELETE_DASHBOARD | DELETE_DASHBOARD_SUCCESS | DELETE_DASHBOARD_FAIL;