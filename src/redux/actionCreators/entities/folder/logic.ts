import { addFolder, addFolderSuccess } from "./action";
import { Dispatch } from "redux";
import { AddFolderActionType } from "../../../actionTypes/entities/folder/addFolderTypes";
import { LoadFoldersActionType } from "@/redux/actionTypes/entities/folder/loadFoldersTypes";


export const addFolderLogic = (payload: any) => {
  return (dispatch: Dispatch<AddFolderActionType>) => {
    dispatch(addFolder());
    /** you do some sync requests here */
    setTimeout(() => {
      console.log("creating...");
      dispatch(addFolderSuccess(payload));
    }, 1000);
  };
};

export const loadFoldersLogic = (payload: any) => {
  return (dispatch: Dispatch<LoadFoldersActionType>) => {
    
  }
}
