export const LOAD_FOLDER = 'LOAD_FOLDER';
export const LOAD_FOLDER_SUCCESS = 'LOAD_FOLDER_SUCCESS';
export const LOAD_FOLDER_FAIL = 'LOAD_FOLDER_FAIL';

export interface LOAD_FOLDER {
    type: typeof LOAD_FOLDER
}

export interface LOAD_FOLDER_SUCCESS {
    type: typeof LOAD_FOLDER_SUCCESS,
    payload: any
}

export interface LOAD_FOLDER_FAIL {
    type: typeof LOAD_FOLDER_FAIL,
    err: any
}


export type LoadFoldersActionType = LOAD_FOLDER | LOAD_FOLDER_SUCCESS | LOAD_FOLDER_FAIL;