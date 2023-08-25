export const ADD_DATASOURCE = 'ADD_DATASOURCE';
export const ADD_DATASOURCE_SUCCESS = 'ADD_DATASOURCE_SUCCESS';
export const ADD_DATASOURCE_FAIL = 'ADD_DATASOURCE_FAIL';

export interface ADD_DATASOURCE {
  type: typeof ADD_DATASOURCE
}

export interface ADD_DATASOURCE_SUCCESS {
  type: typeof ADD_DATASOURCE_SUCCESS,
  payload?: any
}

export interface ADD_DATASOURCE_FAIL {
  type: typeof ADD_DATASOURCE_FAIL,
  err: any
}


export type AddDatasourcesActionType = ADD_DATASOURCE | ADD_DATASOURCE_SUCCESS | ADD_DATASOURCE_FAIL;