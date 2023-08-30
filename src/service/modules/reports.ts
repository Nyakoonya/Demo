import { IReport } from "@/redux/reducers/ReportReducer";
import request from "../index";
export const fetchReports = (id: string): Promise<IReportRes> =>
  request.get({
    url: "/api/reports",
    params: {
      dashId: id
    },
  });

export const fetchReportData = (params: any): Promise<IReportDatasRes> =>
  request.post({
    url: "/api/reports/data",
    data: params,
  });

export const saveReportsUnderDash = (reports: IReport[], dashId: string): Promise<IReportRes> => request.post({
  url: '/api/reports',
  data: {
    dashId,
    reports
  }
})
