import {
  addDashboard,
  addDashboardSuccess,
  loadDashboards,
  loadDashboardSuccess,
  updateDashboard,
  updateDashboardFail,
  updateDashboardSuccess,
} from "./action";
import { Dispatch } from "redux";
import { AddDashboardActionType } from "../../../actionTypes/entities/dashboard/addDashoboardTypes";
import { LoadDashboardsActionType } from "@/redux/actionTypes/entities/dashboard/loadDashboardsTypes";
import { createDashboard, fetchDashboards } from "@/service/modules/dashboard";
import { push, RouterAction } from 'react-router-redux';
import { MyThunkDispatch } from "@/redux/typing";
import { updateDashboard as updateDashboardAPI } from "@/service/modules/dashboard";
import { isEmpty } from "lodash";

/* add dashboard */
export const addDashboardLogic = (folderId: string) => {
  return (dispatch: Dispatch<AddDashboardActionType | any>) => {
    dispatch(addDashboard());
    /** do some sync requests here */
    createDashboard({ folderId }).then(() => {
      dispatch(addDashboardSuccess());
      dispatch(loadDashboardsLogic(folderId))
    }).catch(err => {
      console.log('err', err)
    })
  };
};
/* load dashboards */
export const loadDashboardsLogic = (payload: any) => {
  return (dispatch: Dispatch<LoadDashboardsActionType | RouterAction>) => {
    const popFolderIds = !isEmpty(localStorage.getItem('popFolders')) ? JSON.parse(localStorage.getItem('popFolders')!) : [];
    console.log('popFolderIds---from local', popFolderIds)
    let newFolderIds = popFolderIds.filter((f: any) => f != payload);
    newFolderIds.unshift(payload);
    newFolderIds = newFolderIds.slice(0, 4);
    console.log('newFolderIds----->>>final', newFolderIds)
    localStorage.setItem('popFolders', JSON.stringify(newFolderIds));
    fetchDashboards({ folderId: payload }).then(res => {
      console.log('res fetch dash', res)
      const { data: list } = res;
      dispatch(loadDashboardSuccess(list))
    }).then(() => {
      /** jump to the page and render */
      dispatch(push(`/folders/${payload}`));
    }).catch(err => console.log('err', err))
  };
};

export const updateDashLogic = (payload: any) => {
  return (dispatch: MyThunkDispatch) => {
    dispatch(updateDashboard());
    updateDashboardAPI(payload).then(() => {
      dispatch(updateDashboardSuccess(payload));
    }).then(() => {
      dispatch(loadDashboardsLogic(payload.folderId));
      return Promise.resolve();
    })
      .catch((err: any) => {
        dispatch(updateDashboardFail(err))
      })
  }
}

