import { addDashboard, addDashboardSuccess } from "./action";
import { Dispatch } from "redux";
import { AddDashboardActionType } from "../../../actionTypes/entities/dashboard/addDashoboardTypes";


export const addDashboardLogic = (payload: any) => {
  return (dispatch: Dispatch<AddDashboardActionType>) => {
    dispatch(addDashboard());
    /** you do some sync requests here */
    setTimeout(() => {
      console.log("creating...");
      dispatch(addDashboardSuccess(payload));
    }, 1000);
  };
};
