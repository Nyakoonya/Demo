import { LOAD_DATASOURCE, LOAD_DATASOURCE_FAIL, LOAD_DATASOURCE_SUCCESS } from "@/redux/actionTypes/entities/datasource/loadDatasource";

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