import { Action, AnyAction, Dispatch } from "redux"
import { addDatasource, addDatasourceSuccess, loadDatasourceData, loadDatasourceDataSuccess, loadDatasources, loadDatasourcesSuccess, updateDatasource, updateDatasourceFail, updateDatasourceSuccess } from "./action"
import { createDatasourceByExcel, fetchDatasourceData, fetchDatasourceList, updateDatasourceInfo } from "@/service/modules/datasource";
import { ThunkDispatch } from "redux-thunk";
import { getState } from "@/redux/Store";
import { isDone, isLoading } from "../constant";
import { MyThunkDispatch } from "@/redux/typing";
export const loadDatasourcesLogic = (folderId: string) => {
  return (dispatch: MyThunkDispatch) => {
    dispatch(loadDatasources());
    /* fetch datasource data */
    fetchDatasourceList(folderId).then(res => {
      console.log('res datasource list---->>>', res)
      const { data: { list } } = res;
      dispatch(loadDatasourcesSuccess(list))
    }).catch(error => {
      console.log('error', error)
    })
  }
}

export const addDatasourcelogic = (payload: { folderId: string, type: string, data: any }) => {
  return (dispatch: MyThunkDispatch) => {
    const { folderId, type, data } = payload;
    Promise.resolve().then(() => dispatch(addDatasource())).then(() => {
      console.log('type logic', type)
      if (type === 'excel') {
        createDatasourceByExcel(data).then(() => {
          dispatch(loadDatasourcesLogic(folderId))
        }).catch(error => {
          console.log('error', error)
        })
      }
    })
  }
}

export const loadDatasourceDataLogic = (id: string | null, page: number = 1, row: number = 10) => {
  return (dispatch: MyThunkDispatch) => {
    console.log('load data logic', id)
    dispatch(loadDatasourceData());
    dispatch(isLoading());
    // if (id) {
    fetchDatasourceData(id!, page, row).then(res => {
      console.log('res  ds data', res)
      const { data } = res;
      const state = getState();
      const datasourceList = state.datasources.entity;
      const target = datasourceList.find(d => d.id === id);
      const payload = {
        ...target,
        data,
      }
      dispatch(loadDatasourceDataSuccess(payload))
      return Promise.resolve(payload)
    }).catch(err => {
      console.log('err', err)
    })
  }
}

export const updateDatasourceLogic = (payload: any) => {
  return (dispatch: MyThunkDispatch) => {
    dispatch(updateDatasource());
    updateDatasourceInfo(payload).then(() => {
      dispatch(updateDatasourceSuccess(payload))
    }).then(() => {
      dispatch(loadDatasourcesLogic(payload.folderId));
      return Promise.resolve();
    }).catch((err: any) => {
      dispatch(updateDatasourceFail(err))
    })
  }
}