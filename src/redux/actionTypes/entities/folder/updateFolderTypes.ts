export const UPDATE_FOLDER = 'UPDATE_FOLDER';
export const UPDATE_FOLDER_SUCCESS = 'UPDATE_FOLDER_SUCCESS';
export const UPDATE_FOLDER_FAIL = 'UPDATE_FOLDER_FAIL';

export interface UPDATE_FOLDER {
  type: typeof UPDATE_FOLDER
}

export interface UPDATE_FOLDER_SUCCESS {
  type: typeof UPDATE_FOLDER_SUCCESS,
  payload: any
}

export interface UPDATE_FOLDER_FAIL {
  type: typeof UPDATE_FOLDER_FAIL,
  err: any
}


export type UpdateFolderActionType = UPDATE_FOLDER | UPDATE_FOLDER_SUCCESS | UPDATE_FOLDER_FAIL;