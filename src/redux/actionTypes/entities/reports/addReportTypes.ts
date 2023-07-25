import { IReport } from "@/redux/reducers/ReportReducer";

export const ADD_REPORT = 'ADD_REPORT';
export const ADD_REPORT_SUCCESS = 'ADD_REPORT_SUCCESS';
export const ADD_REPORT_FAIL = 'ADD_REPORT_FAIL';

export interface ADD_REPORT {
    type: typeof ADD_REPORT
}

export interface ADD_REPORT_SUCCESS {
    type: typeof ADD_REPORT_SUCCESS,
    payload: IReport
}

export interface ADD_REPORT_FAIL {
    type: typeof ADD_REPORT_FAIL,
    err: any
}


export type AddReportActionType = ADD_REPORT | ADD_REPORT_SUCCESS | ADD_REPORT_FAIL;