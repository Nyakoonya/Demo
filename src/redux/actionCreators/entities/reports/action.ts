import {
  ADD_REPORT,
  ADD_REPORT_FAIL,
  ADD_REPORT_SUCCESS,
} from "@/redux/actionTypes/entities/reports/addReportTypes";
import {
  LOAD_REPORTS,
  LOAD_REPORTS_FAIL,
  LOAD_REPORTS_SUCCESS,
} from "@/redux/actionTypes/entities/reports/loadReportsTypes";
import {
  LOAD_REPORT,
  LOAD_REPORT_FAIL,
  LOAD_REPORT_SUCCESS,
} from "@/redux/actionTypes/entities/reports/loadReportTypes";
import { IReport } from "@/redux/reducers/ReportReducer";

export const loadReport = (): LOAD_REPORT => ({
  type: LOAD_REPORT,
});
export const loadReportSuccess = (payload: any): LOAD_REPORT_SUCCESS => ({
  type: LOAD_REPORT_SUCCESS,
  payload,
});
export const loadReportFail = (err: any): LOAD_REPORT_FAIL => ({
  type: LOAD_REPORT_FAIL,
  err,
});

export const loadReports = (): LOAD_REPORTS => ({
  type: LOAD_REPORTS,
});
export const loadReportsSuccess = (payload: any[]): LOAD_REPORTS_SUCCESS => ({
  type: LOAD_REPORTS_SUCCESS,
  payload,
});
export const loadReportsFail = (err: any): LOAD_REPORTS_FAIL => ({
  type: LOAD_REPORTS_FAIL,
  err,
});
// add report
export const addReport = (): ADD_REPORT => ({
  type: ADD_REPORT,
});
export const addReportSuccess = (payload: IReport) => ({
  type: ADD_REPORT_SUCCESS,
  payload,
});
export const addReportFail = (err: any) => ({
  type: ADD_REPORT_FAIL,
  err,
});
// update report


// save reports

// delete report
