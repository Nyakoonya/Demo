import { IReport } from "@/redux/reducers/ReportReducer";

export const UPDATE_REPORT = 'UPDATE_REPORT';
export const UPDATE_REPORT_SUCCESS = 'UPDATE_REPORT_SUCCESS';
export const UPDATE_REPORT_FAIL = 'UPDATE_REPORT_FAIL';

export const UPDATE_REPORTS = 'UPDATE_REPORTS';
export const UPDATE_REPORTS_SUCCESS = 'UPDATE_REPORTS_SUCCESS';
export const UPDATE_REPORTS_FAIL = 'UPDATE_REPORTS_FAIL';

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

export interface UPDATE_REPORTS {
  type: typeof UPDATE_REPORTS
}

export interface UPDATE_REPORTS_SUCCESS {
  type: typeof UPDATE_REPORTS_SUCCESS,
  payload: IReport[]
}

export interface UPDATE_REPORTS_FAIL {
  type: typeof UPDATE_REPORTS_FAIL,
  err: any
}


export type UpdateReportActionType = UPDATE_REPORT | UPDATE_REPORT_SUCCESS | UPDATE_REPORT_FAIL | UPDATE_REPORTS | UPDATE_REPORTS_SUCCESS | UPDATE_REPORTS_FAIL;