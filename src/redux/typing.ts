import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IRootState } from "./Store";
import { Action } from "redux";

export type MyThunkResult<R> = ThunkAction<R, IRootState, undefined, Action>;
export type MyThunkDispatch = ThunkDispatch<IRootState, undefined, Action>;