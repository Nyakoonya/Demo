import { FAILURE, LOADING, SUCCESS } from "../Status";
import { ADD_DATASOURCE, ADD_DATASOURCE_FAIL, ADD_DATASOURCE_SUCCESS, AddDatasourcesActionType } from "../actionTypes/entities/datasource/addDatasource";
import { LOAD_DATASOURCE, LOAD_DATASOURCE_FAIL, LOAD_DATASOURCE_SUCCESS, LoadDatasourcesActionType } from "../actionTypes/entities/datasource/loadDatasource";
import { LOAD_DATASOURCE_DATA, LOAD_DATASOURCE_DATA_FAIL, LOAD_DATASOURCE_DATA_SUCCESS, LoadDatasourcesDataActionType } from "../actionTypes/entities/datasource/loadDatasourceData";
import { UPDATE_DATASOURCE, UPDATE_DATASOURCE_FAIL, UPDATE_DATASOURCE_SUCCESS, UpdateDatasourcectionType } from "../actionTypes/entities/datasource/updateDatasource";
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
  action: LoadDatasourcesActionType | AddDatasourcesActionType | LoadDatasourcesDataActionType | UpdateDatasourcectionType
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
    case ADD_DATASOURCE: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case ADD_DATASOURCE_SUCCESS: {
      return {
        ...state,
        status: SUCCESS
      }
    }
    case ADD_DATASOURCE_FAIL: {
      return {
        ...state,
        status: FAILURE
      }
    }
    case LOAD_DATASOURCE_DATA: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case LOAD_DATASOURCE_DATA_SUCCESS: {
      const rest = state.entity.filter(item => item.id !== action.payload.id)
      return {
        entity: [...rest, action.payload],
        status: SUCCESS
      }
    }
    case LOAD_DATASOURCE_DATA_FAIL: {
      return {
        ...state,
        status: FAILURE
      }
    }
    case UPDATE_DATASOURCE: {
      return {
        ...state,
        status: LOADING
      }
    }
    case UPDATE_DATASOURCE_SUCCESS: {
      return {
        ...state,
        entity: [...(state.entity.filter((item: any) => item !== action.payload.id)), action.payload]
      }
    }
    case UPDATE_DATASOURCE_FAIL: {
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