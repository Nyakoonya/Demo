import { Action, AnyAction, Dispatch } from "redux"
import { addDatasource, addDatasourceSuccess, loadDatasourceData, loadDatasourceDataSuccess, loadDatasources, loadDatasourcesSuccess } from "./action"
import { createDatasourceByExcel, fetchDatasourceData, fetchDatasourceList } from "@/service/modules/datasource";
import { ThunkDispatch } from "redux-thunk";
import { getState } from "@/redux/Store";
import { isDone, isLoading } from "../constant";
export const loadDatasourcesLogic = (folderId: string) => {
  return (dispatch: ThunkDispatch<{}, {}, Action>) => {
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
  return (dispatch: ThunkDispatch<{}, {}, Action>) => {
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
  return (dispatch: ThunkDispatch<{}, {}, Action>) => {
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
    // } else {
    //   return Promise.resolve();
    // }
  }
}