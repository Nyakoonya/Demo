import {
    ADD_FOLDER,
    ADD_FOLDER_SUCCESS,
    ADD_FOLDER_FAIL,
  } from "../actionTypes/entities/folder/addFolderTypes";
  import { LOADING, SUCCESS, FAILURE } from "../Status";
import { AddFolderActionType } from "../actionTypes/entities/folder/addFolderTypes";
import { LoadFoldersActionType} from '../actionTypes/entities/folder/loadFoldersTypes'
import { LOAD_FOLDER, LOAD_FOLDER_SUCCESS } from "../actionTypes/entities/folder/loadFoldersTypes";

export interface IFolderState {
    entity: any[],
    status: string
  }
  const initialState = {
    entity: [],
    status: LOADING
  }
  const folderReducers = (
    state: IFolderState = initialState,
    action:
    LoadFoldersActionType | AddFolderActionType
    //   | UpdateDashboardActionType
    //   | DeleteDashboardActionType
  ): IFolderState => {
    switch (action.type) {
      case LOAD_FOLDER: {
        return {
          ...state,
          status: LOADING
        }
      }
      case LOAD_FOLDER_SUCCESS: {
        return {
          entity: [...action.payload],
          status: SUCCESS
        }
      }
      /** add dashboard */
      case ADD_FOLDER: {
        return {
          ...state,
          status: LOADING
        };
      }
      case ADD_FOLDER_SUCCESS: {
        return {
          entity: [
            ...state.entity,
            action.payload
          ],
          status: SUCCESS
        };
      }
      case ADD_FOLDER_FAIL: {
        return {
          ...state,
          status: FAILURE
        };
      }
      /** update folder */
    //   case UPDATE_DASHBOARD_SUCCESS: {
    //     return {
    //       entity: [
    //         ...state.entity,
    //         action.payload
    //       ],
    //       status: SUCCESS
    //     };
    //   }
  
    //   case DELETE_DASHBOARD_SUCCESS: {
    //     return {
    //       entity: state.entity.filter(
    //         (item: any) => item.id !== action.payload.id
    //       ),
    //       status: SUCCESS
    //     };
    //   }
      default: {
        return state;
      }
    }
  };
  
  export default folderReducers;