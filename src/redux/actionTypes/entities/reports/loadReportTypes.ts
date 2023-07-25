export const LOAD_REPORT = 'LOAD_REPORT';
export const LOAD_REPORT_SUCCESS = 'LOAD_REPORT_SUCCESS';
export const LOAD_REPORT_FAIL = 'LOAD_REPORT_FAIL';

export interface LOAD_REPORT {
    type: typeof LOAD_REPORT
}

export interface LOAD_REPORT_SUCCESS {
    type: typeof LOAD_REPORT_SUCCESS,
    payload: any
}

export interface LOAD_REPORT_FAIL {
    type: typeof LOAD_REPORT_FAIL,
    err: any
}


export type LoadReportActionType = LOAD_REPORT | LOAD_REPORT_SUCCESS | LOAD_REPORT_FAIL;