export const LOAD_DATASOURCE = 'LOAD_DATASOURCE';
export const LOAD_DATASOURCE_SUCCESS = 'LOAD_DATASOURCE_SUCCESS';
export const LOAD_DATASOURCE_FAIL = 'LOAD_DATASOURCE_FAIL';

export interface LOAD_DATASOURCE {
  type: typeof LOAD_DATASOURCE
}

export interface LOAD_DATASOURCE_SUCCESS {
  type: typeof LOAD_DATASOURCE_SUCCESS,
  payload: any
}

export interface LOAD_DATASOURCE_FAIL {
  type: typeof LOAD_DATASOURCE_FAIL,
  err: any
}


export type LoadDatasourcesActionType = LOAD_DATASOURCE | LOAD_DATASOURCE_SUCCESS | LOAD_DATASOURCE_FAIL;