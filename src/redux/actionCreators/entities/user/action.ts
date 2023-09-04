import { IUser, LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS, LOG_OUT, LOG_OUT_FAIL, LOG_OUT_SUCCESS } from "@/redux/actionTypes/entities/user/userType";

export const login = (): LOG_IN => ({
  type: LOG_IN,
});
export const loginSuccess = (
  payload: IUser
): LOG_IN_SUCCESS => ({
  type: LOG_IN_SUCCESS,
  payload,
});
export const loginFail = (err: any): LOG_IN_FAIL => ({
  type: LOG_IN_FAIL,
  err,
});

export const logout = (): LOG_OUT => ({
  type: LOG_OUT,
});
export const logoutSuccess = (
): LOG_OUT_SUCCESS => ({
  type: LOG_OUT_SUCCESS
});
export const logoutFail = (err: any): LOG_OUT_FAIL => ({
  type: LOG_OUT_FAIL,
  err,
});