import {
  addDashboard,
  addDashboardSuccess,
  loadDashboards,
  loadDashboardSuccess,
} from "./action";
import { Dispatch } from "redux";
import { AddDashboardActionType } from "../../../actionTypes/entities/dashboard/addDashoboardTypes";
import { LoadDashboardsActionType } from "@/redux/actionTypes/entities/dashboard/loadDashboardsTypes";
import { fetchDashboards } from "@/service/modules/dashboard";
import { push, RouterAction } from 'react-router-redux';
export const addDashboardLogic = (payload: any) => {
  return (dispatch: Dispatch<AddDashboardActionType>) => {
    dispatch(addDashboard());
    /** you do some sync requests here */
    setTimeout(() => {
      console.log("creating...");
      dispatch(addDashboardSuccess(payload));
    }, 1000);
  };
};
export const loadDashboardsLogic = (payload: any) => {
  return (dispatch: Dispatch<LoadDashboardsActionType | RouterAction>) => {
    console.log("payload folderId ", payload);
    /**fetch dashboards list */
    // fetchDashboards(payload).then((res) => {
    //   console.log("res", res);
    // dispatch(loadDashboardsSuccess(res.data))
    // }).catch(err => {
    // console.log('err', err)
    // dispatch(loadDashboardsFail(err))
    // });
    const data = [
      {
        title: 'test1',
        id: 1
      }
    ]
    dispatch(loadDashboardSuccess(data))
    /** jump to the page and render */
    dispatch(push(`/folders/${payload}`));
  };
};

