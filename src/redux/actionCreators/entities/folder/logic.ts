import { addFolder, addFolderSuccess, loadFolders, loadFoldersSuccess } from "./action";
import { Dispatch } from "redux";
import { LoadFoldersActionType } from "@/redux/actionTypes/entities/folder/loadFoldersTypes";
import { createFolder, fetchFolders } from '@/service/modules/folders';

export const addFolderLogic = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(addFolder());
    /** you do some sync requests here */
    // dispatch(addFolderSuccess(payload));
    createFolder().then(res => {
      console.log('res add folder logic', res)
      dispatch(loadFoldersLogic());
    })
  };
};

export const loadFoldersLogic = () => {
  return (dispatch: Dispatch<LoadFoldersActionType>) => {
    dispatch(loadFolders());
    // fetch folders data
    fetchFolders().then(res => {
      console.log('res load folders', res)
      const { data: { list } } = res;
      dispatch(loadFoldersSuccess(list))
    })

  };
};
