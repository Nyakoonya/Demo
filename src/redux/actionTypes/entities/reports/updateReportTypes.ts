import { IReport } from "@/redux/reducers/ReportReducer";

export const UPDATE_REPORT = 'UPDATE_REPORT';
export const UPDATE_REPORT_SUCCESS = 'UPDATE_REPORT_SUCCESS';
export const UPDATE_REPORT_FAIL = 'UPDATE_REPORT_FAIL';

export interface UPDATE_REPORT {
  type: typeof UPDATE_REPORT
}

export interface UPDATE_REPORT_SUCCESS {
  type: typeof UPDATE_REPORT_SUCCESS,
  payload: IReport
}

export interface UPDATE_REPORT_FAIL {
  type: typeof UPDATE_REPORT_FAIL,
  err: any
}


export type UpdateReportActionType = UPDATE_REPORT | UPDATE_REPORT_SUCCESS | UPDATE_REPORT_FAIL;