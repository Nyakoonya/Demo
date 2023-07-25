import request from "../index";
export const fetchReport = (params: any): Promise<IReportRes> =>
  request.get({
    url: "/report",
    params,
  });

export const fetchReportData = (params: any): Promise<IReportDatasRes> =>
  request.post({
    url: "/report/data",
    params,
  });
