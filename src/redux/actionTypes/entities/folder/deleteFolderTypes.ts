export const DELETE_FOLDER = 'DELETE_FOLDER';
export const DELETE_FOLDER_SUCCESS = 'DELETE_FOLDER_SUCCESS';
export const DELETE_FOLDER_FAIL = 'DELETE_FOLDER_FAIL';

export interface DELETE_FOLDER {
  type: typeof DELETE_FOLDER
}

export interface DELETE_FOLDER_SUCCESS {
  type: typeof DELETE_FOLDER_SUCCESS,
  payload: any
}

export interface DELETE_FOLDER_FAIL {
  type: typeof DELETE_FOLDER_FAIL,
  err: any
}


export type DeleteFolderActionType = DELETE_FOLDER | DELETE_FOLDER_SUCCESS | DELETE_FOLDER_FAIL;