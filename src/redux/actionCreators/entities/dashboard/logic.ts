import {
  addDashboard,
  addDashboardSuccess,
  loadDashboards,
  loadDashboardSuccess,
} from "./action";
import { Dispatch } from "redux";
import { AddDashboardActionType } from "../../../actionTypes/entities/dashboard/addDashoboardTypes";
import { LoadDashboardsActionType } from "@/redux/actionTypes/entities/dashboard/loadDashboardsTypes";
import { createDashboard, fetchDashboards } from "@/service/modules/dashboard";
import { push, RouterAction } from 'react-router-redux';

/* add dashboard */
export const addDashboardLogic = (folderId: string) => {
  return (dispatch: Dispatch<AddDashboardActionType | any>) => {
    dispatch(addDashboard());
    /** do some sync requests here */
    createDashboard({ folderId }).then(() => {
      dispatch(addDashboardSuccess());
      dispatch(loadDashboardsLogic(folderId))
    })
  };
};
/* load dashboards */
export const loadDashboardsLogic = (payload: any) => {
  return (dispatch: Dispatch<LoadDashboardsActionType | RouterAction>) => {
    fetchDashboards({ folderId: payload }).then(res => {
      console.log('res fetch dash', res)
      const { data: list } = res;
      dispatch(loadDashboardSuccess(list))
    }).then(() => {
      /** jump to the page and render */
      dispatch(push(`/folders/${payload}`));
    })
  };
};

