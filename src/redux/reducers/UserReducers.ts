import { IUser, LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS, LOG_OUT, LOG_OUT_FAIL, LOG_OUT_SUCCESS, LoginActionType, LogoutActionType } from "../actionTypes/entities/user/userType";
const initialState = {
  token: null,
  userData: null,
}
const userReducers = (state: IUser = initialState, action: LoginActionType | LogoutActionType): IUser => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
      }
    case LOG_IN_SUCCESS:
      return {
        ...action.payload
      }
    case LOG_IN_FAIL:
      return {
        ...state
      }
    case LOG_OUT:
      return {
        ...state,
      }
    case LOG_OUT_SUCCESS:
      return {
        ...initialState
      }
    case LOG_OUT_FAIL:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default userReducers;