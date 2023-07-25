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
import { sid } from "@/utils/common";

/* add dashboard */
export const addDashboardLogic = (folderId: string) => {
  return (dispatch: Dispatch<AddDashboardActionType>) => {
    dispatch(addDashboard());
    /** do some sync requests here */
    setTimeout(() => {
      console.log("creating...");
      const payload = {
        title: 'test2',
        id: sid(),
        img: '',
        reports: []
      }
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
        id: '1',
        reports: ['123', '234']
      }
    ]
    dispatch(loadDashboardSuccess(data))
    /** jump to the page and render */
    dispatch(push(`/folders/${payload}`));
  };
};

