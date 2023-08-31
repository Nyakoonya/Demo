import { IReport } from "@/redux/reducers/ReportReducer";

export const REMOVE_REPORT = 'REMOVE_REPORT';
export const REMOVE_REPORT_SUCCESS = 'REMOVE_REPORT_SUCCESS';
export const REMOVE_REPORT_FAIL = 'REMOVE_REPORT_FAIL';

export interface REMOVE_REPORT {
  type: typeof REMOVE_REPORT
}

export interface REMOVE_REPORT_SUCCESS {
  type: typeof REMOVE_REPORT_SUCCESS,
  payload: string
}

export interface REMOVE_REPORT_FAIL {
  type: typeof REMOVE_REPORT_FAIL,
  err: any
}


export type RemoveReportActionType = REMOVE_REPORT | REMOVE_REPORT_SUCCESS | REMOVE_REPORT_FAIL;