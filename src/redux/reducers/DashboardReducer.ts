import {
  ADD_DASHBOARD,
  ADD_DASHBOARD_SUCCESS,
  ADD_DASHBOARD_FAIL,
} from "../actionTypes/entities/dashboard/addDashoboardTypes";
import {
  UPDATE_DASHBOARD,
  UPDATE_DASHBOARD_FAIL,
  UPDATE_DASHBOARD_SUCCESS,
} from "../actionTypes/entities/dashboard/updateDashboardTypes";
import { DELETE_DASHBOARD_SUCCESS } from "../actionTypes/entities/dashboard/deleteDashboardTypes";
import { LOADING, SUCCESS, FAILURE } from "../Status";
import { AddDashboardActionType } from "../actionTypes/entities/dashboard/addDashoboardTypes";
import { UpdateDashboardActionType } from "../actionTypes/entities/dashboard/updateDashboardTypes";
import { DeleteDashboardActionType } from "../actionTypes/entities/dashboard/deleteDashboardTypes";
import {
  LOAD_DASHBOARDS,
  LOAD_DASHBOARDS_FAIL,
  LOAD_DASHBOARDS_SUCCESS,
  LoadDashboardsActionType,
} from "../actionTypes/entities/dashboard/loadDashboardsTypes";

export interface IDashboardState {
  entity: any[];
  status: string;
}
const initialState = {
  entity: [],
  status: LOADING,
};
const dashoboradReducers = (
  state: IDashboardState = initialState,
  action:
    | LoadDashboardsActionType
    | AddDashboardActionType
    | UpdateDashboardActionType
    | DeleteDashboardActionType
): IDashboardState => {
  switch (action.type) {
    case LOAD_DASHBOARDS: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case LOAD_DASHBOARDS_SUCCESS: {
      return {
        entity: [...action.payload],
        status: SUCCESS,
      };
    }
    case LOAD_DASHBOARDS_FAIL: {
      return {
        ...state,
        status: FAILURE,
      };
    }
    /** add dashboard */
    case ADD_DASHBOARD: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case ADD_DASHBOARD_SUCCESS: {
      return {
        entity: [...state.entity],
        status: SUCCESS,
      };
    }
    case ADD_DASHBOARD_FAIL: {
      return {
        ...state,
        status: FAILURE,
      };
    }
    /** update dashboard */
    case UPDATE_DASHBOARD_SUCCESS: {
      return {
        entity: [...state.entity, action.payload],
        status: SUCCESS,
      };
    }

    case DELETE_DASHBOARD_SUCCESS: {
      return {
        entity: state.entity.filter(
          (item: any) => item.id !== action.payload.id
        ),
        status: SUCCESS,
      };
    }
    default: {
      return state;
    }
  }
};

export default dashoboradReducers;
