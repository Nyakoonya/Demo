import { push } from "react-router-redux";
import { IRootState } from "../../../Store";
import { addReportFail, addReportSuccess, loadReportsSuccess, loadReportSuccess, updateReportSuccess } from "./action";
import { fetchReportData, fetchReports, saveReportsUnderDash } from "@/service/modules/reports";
import { IReport } from "@/redux/reducers/ReportReducer";
import { generateContent } from "@/utils/generateContent";
import { MyThunkDispatch, MyThunkResult } from "@/redux/typing";
import { loadDashboardsLogic } from "../dashboard/logic";
// const shortid = require('shortid');
// type MyThunkResult<R> = ThunkAction<R, IRootState, undefined, Action>;
// type MyThunkDispatch = ThunkDispatch<IRootState, undefined, Action>;
export const loadReportsLogic = (
  folderId: string | number,
  dashId: string, isPush: boolean
) => {
  return (dispatch: MyThunkDispatch, getState: () => IRootState) => {
    dispatch(loadDashboardsLogic(folderId, true))
    const state = getState();
    fetchReports(dashId).then(res => {
      console.log('res---->>>>load reports', res)
      let data = res.data;
      try {
        data = data.map((item: IReport) => ({
          ...item,
          content: {
            ...item.content,
            layout: {
              ...item.content.layout,
              y: item.content.layout.y == null ? Infinity : item.content.layout.y
            }
          }
        }))
      } catch (error) {
        console.log('error load reports', error)
      }
      dispatch(loadReportsSuccess(data));
      return data;
    }).then((data) => {
      console.log('data----->>>> load reports', data)
      data.forEach((item: any) => {
        dispatch(loadReportLogic(item))
      })
    }).then(() => {
      if (isPush) {
        const location = window.location;
        const path = location.hash.replace("#", "");
        dispatch(push(`${path}/dashboard/${dashId}`));
      }
    }).catch(err => {
      console.log('err', err)
    })

  };
};
// fetch report data by report type
export const loadReportLogic = (payload: {
  dashId: string,
  category: string,
  type: string,
  dataSetting: any,
  limit: number,
  id?: string,
  title?: string,
  content?: any
},
): MyThunkResult<Promise<boolean>> => {
  console.log('------------');
  return (dispatch, getState) => {
    console.log("payload ", payload);
    console.log('state', getState());
    const state = getState();
    const activeReport = state.constant.activeReport;
    // content
    if (!payload.id) {
      console.log('payload.title', payload.title)
      const newItem = generateContent(state.reports.entity.length);
      payload.id = newItem.id;
      payload.title = payload.title;
      payload.content = newItem.content
      fetchReportData(
        payload
      ).then((res) => {
        console.log("done res", res);
        dispatch(addReportSuccess({
          ...payload,
          id: payload.id!,
          title: payload.title!,
          content: payload.content!,
          dataSetting: {
            ...res.data
          }
        }))
      })
        .catch(err => {
          console.log('err', err)
          dispatch(addReportFail(err))
        });

    } else {
      fetchReportData(
        payload
      ).then((res) => {
        console.log("done res active", res);
        dispatch(updateReportSuccess({
          ...payload,
          id: payload.id!,
          title: payload.title!,
          content: payload.content!,
          dataSetting: {
            ...res.data
          }
        }))
      })
    }

    return Promise.resolve(true)
  };
};
