import { FAILURE, LOADING, SUCCESS } from "../Status";
import { LOAD_DATASOURCE, LOAD_DATASOURCE_FAIL, LOAD_DATASOURCE_SUCCESS, LoadDatasourcesActionType } from "../actionTypes/entities/datasource/loadDatasource";
export interface IDatasourceState {
  entity: IDatasource[],
  status: string
}
export interface IDatasource {
  id: string,
  name: string,
  type: string,
  folderId: string,
  [propName: string]: any
}
const initialState = {
  entity: [],
  status: LOADING,
};
const datasourceReducers = (
  state: IDatasourceState = initialState,
  action: LoadDatasourcesActionType
): IDatasourceState => {
  switch (action.type) {
    case LOAD_DATASOURCE: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case LOAD_DATASOURCE_SUCCESS: {
      return {
        entity: [...action.payload],
        status: SUCCESS
      }
    }
    case LOAD_DATASOURCE_FAIL: {
      return {
        ...state,
        status: FAILURE
      }
    }
    default: {
      return state;
    }
  }
}
export default datasourceReducers;