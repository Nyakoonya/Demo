import { addFolder, addFolderSuccess, loadFolders, loadFoldersSuccess, updateFolder, updateFolderFail, updateFolderSuccess } from "./action";
import { Dispatch } from "redux";
import { LoadFoldersActionType } from "@/redux/actionTypes/entities/folder/loadFoldersTypes";
import { createFolder, fetchFolders, updateFolderAPI } from '@/service/modules/folders';
import { MyThunkDispatch } from "@/redux/typing";
import { push } from "react-router-redux";
import { message } from "@/components/Common/EscapeAntd";

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
  return (dispatch: Dispatch<any>) => {
    dispatch(loadFolders());
    // fetch folders data
    fetchFolders().then(res => {
      console.log('res load folders', res)
      if (res && res.data) {
        const { data: { list } } = res;
        dispatch(loadFoldersSuccess(list))
      }
    }).catch(err => {
      console.log('err', err)
    })
  };
};

export const updateFolderLogic = (payload: any) => {
  return (dispatch: MyThunkDispatch) => {
    dispatch(updateFolder())
    updateFolderAPI(payload).then(res => {
      dispatch(updateFolderSuccess(payload));
    }).then(() => {
      dispatch(loadFoldersLogic());
      return Promise.resolve();
    })
      .catch(err => {
        console.log('err', err);
        message.error(err.message)
        dispatch(updateFolderFail(err))
      })
  }
}

export const delteFolderLogic = () => {
  return (dispatch: MyThunkDispatch) => {

  }
}
