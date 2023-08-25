export const LOAD_DATASOURCE_DATA = 'LOAD_DATASOURCE_DATA';
export const LOAD_DATASOURCE_DATA_SUCCESS = 'LOAD_DATASOURCE_DATA_SUCCESS';
export const LOAD_DATASOURCE_DATA_FAIL = 'LOAD_DATASOURCE_DATA_FAIL';

export interface LOAD_DATASOURCE_DATA {
  type: typeof LOAD_DATASOURCE_DATA
}

export interface LOAD_DATASOURCE_DATA_SUCCESS {
  type: typeof LOAD_DATASOURCE_DATA_SUCCESS,
  payload: any
}

export interface LOAD_DATASOURCE_DATA_FAIL {
  type: typeof LOAD_DATASOURCE_DATA_FAIL,
  err: any
}


export type LoadDatasourcesDataActionType = LOAD_DATASOURCE_DATA | LOAD_DATASOURCE_DATA_SUCCESS | LOAD_DATASOURCE_DATA_FAIL;