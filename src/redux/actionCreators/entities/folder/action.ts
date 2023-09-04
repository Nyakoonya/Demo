import {
  LOAD_FOLDER,
  LOAD_FOLDER_FAIL,
  LOAD_FOLDER_SUCCESS,
} from "@/redux/actionTypes/entities/folder/loadFoldersTypes";
import {
  ADD_FOLDER,
  ADD_FOLDER_FAIL,
  ADD_FOLDER_SUCCESS,
} from "../../../actionTypes/entities/folder/addFolderTypes";
import {
  DELETE_FOLDER,
  DELETE_FOLDER_FAIL,
  DELETE_FOLDER_SUCCESS,
} from "@/redux/actionTypes/entities/folder/deleteFolderTypes";
import {
  UPDATE_FOLDER,
  UPDATE_FOLDER_FAIL,
  UPDATE_FOLDER_SUCCESS,
} from "@/redux/actionTypes/entities/folder/updateFolderTypes";
//** load folder */
export const loadFolders = (): LOAD_FOLDER => ({
  type: LOAD_FOLDER,
});
export const loadFoldersSuccess = (payload: any): LOAD_FOLDER_SUCCESS => ({
  type: LOAD_FOLDER_SUCCESS,
  payload,
});
export const loadFoldersFail = (err: any): LOAD_FOLDER_FAIL => ({
  type: LOAD_FOLDER_FAIL,
  err,
});
/** add folder */
export const addFolder = (): ADD_FOLDER => ({
  type: ADD_FOLDER,
});
export const addFolderSuccess = (payload: any): ADD_FOLDER_SUCCESS => ({
  type: ADD_FOLDER_SUCCESS,
  payload,
});
export const addFolderFail = (err: any): ADD_FOLDER_FAIL => ({
  type: ADD_FOLDER_FAIL,
  err,
});

/** update dashboard */
export const updateFolder = (): UPDATE_FOLDER => ({
  type: UPDATE_FOLDER,
});
export const updateFolderSuccess = (payload: any): UPDATE_FOLDER_SUCCESS => ({
  type: UPDATE_FOLDER_SUCCESS,
  payload,
});
export const updateFolderFail = (err: any): UPDATE_FOLDER_FAIL => ({
  type: UPDATE_FOLDER_FAIL,
  err,
});

// /** delete dashboard */
export const deleteDahboard = (): DELETE_FOLDER => ({
  type: DELETE_FOLDER,
});

export const deleteDahboardSuccess = (payload: any): DELETE_FOLDER_SUCCESS => ({
  type: DELETE_FOLDER_SUCCESS,
  payload,
});
export const deleteDahboardFail = (err: any): DELETE_FOLDER_FAIL => ({
  type: DELETE_FOLDER_FAIL,
  err,
});
