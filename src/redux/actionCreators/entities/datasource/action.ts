import { ADD_DATASOURCE, ADD_DATASOURCE_FAIL, ADD_DATASOURCE_SUCCESS } from "@/redux/actionTypes/entities/datasource/addDatasource";
import { LOAD_DATASOURCE, LOAD_DATASOURCE_FAIL, LOAD_DATASOURCE_SUCCESS } from "@/redux/actionTypes/entities/datasource/loadDatasource";
import { LOAD_DATASOURCE_DATA, LOAD_DATASOURCE_DATA_FAIL, LOAD_DATASOURCE_DATA_SUCCESS } from "@/redux/actionTypes/entities/datasource/loadDatasourceData";

/* load datasource */
export const loadDatasources = (): LOAD_DATASOURCE => ({
  type: LOAD_DATASOURCE
});
export const loadDatasourcesSuccess = (payload: any): LOAD_DATASOURCE_SUCCESS => ({
  type: LOAD_DATASOURCE_SUCCESS,
  payload
});
export const loadDatasourcesFail = (err: any): LOAD_DATASOURCE_FAIL => ({
  type: LOAD_DATASOURCE_FAIL,
  err
});

/* add datasource */
export const addDatasource = (): ADD_DATASOURCE => ({
  type: ADD_DATASOURCE
});
export const addDatasourceSuccess = (payload?: any): ADD_DATASOURCE_SUCCESS => ({
  type: ADD_DATASOURCE_SUCCESS,
  payload
});
export const addDatasourceFail = (err: any): ADD_DATASOURCE_FAIL => ({
  type: ADD_DATASOURCE_FAIL,
  err
});

/* load datasource data */
export const loadDatasourceData = (): LOAD_DATASOURCE_DATA => ({
  type: LOAD_DATASOURCE_DATA
});
export const loadDatasourceDataSuccess = (payload: any): LOAD_DATASOURCE_DATA_SUCCESS => ({
  type: LOAD_DATASOURCE_DATA_SUCCESS,
  payload
});
export const loadDatasourceDataFail = (err: any): LOAD_DATASOURCE_DATA_FAIL => ({
  type: LOAD_DATASOURCE_DATA_FAIL,
  err
});