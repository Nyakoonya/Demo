export const ADD_FOLDER = 'ADD_FOLDER';
export const ADD_FOLDER_SUCCESS = 'ADD_FOLDER_SUCCESS';
export const ADD_FOLDER_FAIL = 'ADD_FOLDER_FAIL';

export interface ADD_FOLDER {
    type: typeof ADD_FOLDER
}

export interface ADD_FOLDER_SUCCESS {
    type: typeof ADD_FOLDER_SUCCESS,
    payload: any
}

export interface ADD_FOLDER_FAIL {
    type: typeof ADD_FOLDER_FAIL,
    err: any
}


export type AddFolderActionType = ADD_FOLDER | ADD_FOLDER_SUCCESS | ADD_FOLDER_FAIL;