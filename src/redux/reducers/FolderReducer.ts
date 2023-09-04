import {
  ADD_FOLDER,
  ADD_FOLDER_SUCCESS,
  ADD_FOLDER_FAIL,
} from "../actionTypes/entities/folder/addFolderTypes";
import { LOADING, SUCCESS, FAILURE } from "../Status";
import { AddFolderActionType } from "../actionTypes/entities/folder/addFolderTypes";
import { LoadFoldersActionType } from '../actionTypes/entities/folder/loadFoldersTypes'
import { LOAD_FOLDER, LOAD_FOLDER_SUCCESS } from "../actionTypes/entities/folder/loadFoldersTypes";
import { UPDATE_FOLDER, UPDATE_FOLDER_FAIL, UPDATE_FOLDER_SUCCESS, UpdateFolderActionType } from "../actionTypes/entities/folder/updateFolderTypes";
import { DELETE_FOLDER, DELETE_FOLDER_FAIL, DELETE_FOLDER_SUCCESS, DeleteFolderActionType } from "../actionTypes/entities/folder/deleteFolderTypes";

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
    | UpdateFolderActionType
    | DeleteFolderActionType
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
    case UPDATE_FOLDER: {
      return {
        ...state,
        status: LOADING
      };
    }
    case UPDATE_FOLDER_SUCCESS: {
      return {
        entity: [
          ...(state.entity.filter(item => item.id !== action.payload.id)),
          action.payload
        ],
        status: SUCCESS
      };
    }
    case UPDATE_FOLDER_FAIL: {
      return {
        ...state,
        status: FAILURE
      };
    }
    case DELETE_FOLDER: {
      return {
        ...state,
        status: LOADING
      };
    }
    case DELETE_FOLDER_SUCCESS: {
      return {
        entity: state.entity.filter(
          (item: any) => item.id !== action.payload.id
        ),
        status: SUCCESS
      };
    }
    case DELETE_FOLDER_FAIL: {
      return {
        ...state,
        status: FAILURE
      };
    }
    default: {
      return state;
    }
  }
};

export default folderReducers;