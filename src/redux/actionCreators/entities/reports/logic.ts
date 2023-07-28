import { LoadReportActionType } from "@/redux/actionTypes/entities/reports/loadReportTypes";
import { push, RouterAction } from "react-router-redux";
import { Action, ActionCreator, AnyAction, Dispatch } from "redux";
import { getState } from "../../../Store";
import { loadReportsSuccess, loadReportSuccess } from "./action";
import { LoadReportsActionType } from "@/redux/actionTypes/entities/reports/loadReportsTypes";
import { fetchReport } from "@/service/modules/reports";
import { IReport } from "@/redux/reducers/ReportReducer";
// import * as shortid from "shortid";
import { AddReportActionType } from "@/redux/actionTypes/entities/reports/addReportTypes";
import { ThunkAction } from "redux-thunk";
import { useLocation } from "react-router";
import { bar } from '@/mock/barData'
// const shortid = require('shortid');

export const loadReportsLogic = (
  dashId: string
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: Dispatch<LoadReportsActionType | RouterAction>) => {
    const state = getState();
    const { dashboards } = state;
    const curDash = dashboards.entity.find((dash) => dash.id === dashId);
    const reportIds: string[] = curDash.reports || [];
    // call api

    let reports: IReport[] = [];
    /**reportIds.forEach((id, idx) => {
      console.log("id", id);
      if (id) {
        fetchReport(id)
          .then((res) => {
            console.log("res", res);

            const testRes = {
              // id: shortid.generate(),
              id,
              name: "just test",
              type: "none",
              content: {
                layout: {
                  x: idx*3.5 % 12,
                  y: Infinity, // puts it at the bottom
                  w: 3,
                  h: 2.2,
                  i: id
                },
              },
              dataSetting: {},
            };
            reports.push(testRes);
          })
          .then(() => {
            console.log("reports--->", reports);
            dispatch(loadReportsSuccess(reports));
          });
      }
    });*/
    reports.push(bar);
    dispatch(loadReportsSuccess(reports));
    const location = window.location;
    const path = location.hash.replace("#", "");
    dispatch(push(`${path}/dashboard/${dashId}`));
  };
};
// fetch report data by report type
export const loadReportLogic = (payload: any) => {
  return (dispatch: Dispatch<LoadReportActionType | RouterAction>) => {
    console.log("payload reportId ", payload);
    /**fetch report data by id */
    // fetchReportData(payload).then((res) => {
    //   console.log("res", res);
    // dispatch(loadReportSuccess(res.data))
    // }).catch(err => {
    // console.log('err', err)
    // dispatch(loadReportFail(err))
    // });
    const data: any = {};
    dispatch(loadReportSuccess(data));
  };
};

// export const addReportLogic = (payload: IReport) => {
//   return (dispatch: Dispatch<AddReportActionType>) => {

//   }
// }
