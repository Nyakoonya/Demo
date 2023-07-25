export const LOAD_REPORTS = 'LOAD_REPORTS';
export const LOAD_REPORTS_SUCCESS = 'LOAD_REPORTS_SUCCESS';
export const LOAD_REPORTS_FAIL = 'LOAD_REPORTS_FAIL';

export interface LOAD_REPORTS {
    type: typeof LOAD_REPORTS
}

export interface LOAD_REPORTS_SUCCESS {
    type: typeof LOAD_REPORTS_SUCCESS,
    payload: any[]
}

export interface LOAD_REPORTS_FAIL {
    type: typeof LOAD_REPORTS_FAIL,
    err: any
}


export type LoadReportsActionType = LOAD_REPORTS | LOAD_REPORTS_SUCCESS | LOAD_REPORTS_FAIL;