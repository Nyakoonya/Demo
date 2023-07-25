import { addFolder, addFolderSuccess, loadFolders, loadFoldersSuccess } from "./action";
import { Dispatch } from "redux";
import { LoadFoldersActionType } from "@/redux/actionTypes/entities/folder/loadFoldersTypes";
import { sid } from "@/utils/common";

export const addFolderLogic = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(addFolder());
    /** you do some sync requests here */
    setTimeout(() => {
      console.log("creating...");
      const payload = {
        title: "untitled",
        id: sid(),
        img: "",
      };
      dispatch(addFolderSuccess(payload));
    }, 1000);
    dispatch(loadFoldersLogic());
  };
};

export const loadFoldersLogic = () => {
  return (dispatch: Dispatch<LoadFoldersActionType>) => {
    dispatch(loadFolders());
    // fetch folders data
    const testList = [
      {
        title: "test",
        id: "1",
        img: "",
      },
      {
        title: "test",
        id: "2",
        img: "",
      },
      {
        title: "test",
        id: "3",
        img: "",
      },
      {
        title: "test",
        id: "4",
        img: "",
      },
      {
        title: "test",
        id: "5",
        img: "",
      },
    ];
    dispatch(loadFoldersSuccess(testList))
  };
};
