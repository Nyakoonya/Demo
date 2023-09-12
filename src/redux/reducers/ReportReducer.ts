import { FAILURE, LOADING, SUCCESS } from "../Status";
import {
  ADD_REPORT,
  ADD_REPORT_FAIL,
  ADD_REPORT_SUCCESS,
  AddReportActionType,
} from "../actionTypes/entities/reports/addReportTypes";
import {
  LOAD_REPORTS,
  LOAD_REPORTS_FAIL,
  LOAD_REPORTS_SUCCESS,
  LoadReportsActionType,
} from "../actionTypes/entities/reports/loadReportsTypes";
import { REMOVE_REPORT, REMOVE_REPORT_FAIL, REMOVE_REPORT_SUCCESS, RemoveReportActionType } from "../actionTypes/entities/reports/removeReportTypes";
import { UPDATE_REPORT, UPDATE_REPORTS, UPDATE_REPORTS_FAIL, UPDATE_REPORTS_SUCCESS, UPDATE_REPORT_FAIL, UPDATE_REPORT_SUCCESS, UpdateReportActionType } from "../actionTypes/entities/reports/updateReportTypes";

export interface IReportsState {
  entity: IReport[];
  status: string;
}
export interface IReport {
  id: string;
  title: string;
  category?: string;
  type: string;
  content: any;
  dataSetting: any;
  limit: number
}
const initialState = {
  entity: [],
  status: LOADING,
};
const reportReducers = (
  state: IReportsState = initialState,
  action: LoadReportsActionType | AddReportActionType | UpdateReportActionType | RemoveReportActionType
): IReportsState => {
  switch (action.type) {
    case LOAD_REPORTS: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case LOAD_REPORTS_SUCCESS: {
      return {
        entity: [...action.payload],
        status: SUCCESS,
      };
    }
    case LOAD_REPORTS_FAIL: {
      return {
        ...state,
        status: FAILURE,
      };
    }
    case ADD_REPORT: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case ADD_REPORT_SUCCESS: {
      return {
        entity: [...state.entity, action.payload],
        status: SUCCESS,
      };
    }
    case ADD_REPORT_FAIL: {
      return {
        ...state,
        status: FAILURE
      }
    }
    case UPDATE_REPORT: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case UPDATE_REPORT_SUCCESS: {
      return {
        entity: [...(state.entity.filter(item => item.id !== action.payload.id)), action.payload],
        status: SUCCESS,
      };
    }
    case UPDATE_REPORT_FAIL: {
      return {
        ...state,
        status: FAILURE
      }
    }
    case UPDATE_REPORTS: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case UPDATE_REPORTS_SUCCESS: {
      return {
        entity: action.payload,
        status: SUCCESS,
      };
    }
    case UPDATE_REPORTS_FAIL: {
      return {
        ...state,
        status: FAILURE
      }
    }
    case REMOVE_REPORT: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case REMOVE_REPORT_SUCCESS: {
      return {
        entity: [...(state.entity.filter(item => item.id !== action.payload))],
        status: SUCCESS,
      };
    }
    case REMOVE_REPORT_FAIL: {
      return {
        ...state,
        status: FAILURE
      }
    }
    default: {
      return state;
    }
  }
};

export default reportReducers;
