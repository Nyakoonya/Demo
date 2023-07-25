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

export interface IReportsState {
  entity: IReport[];
  status: string;
}
export interface IReport {
  id: string;
  name: string;
  category?: string;
  type: string;
  content: any;
  dataSetting: any;
}
const initialState = {
  entity: [],
  status: LOADING,
};
const reportReducers = (
  state: IReportsState = initialState,
  action: LoadReportsActionType | AddReportActionType
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
    default: {
      return state;
    }
  }
};

export default reportReducers;
