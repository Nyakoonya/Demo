import { IRootState } from "@/redux/Store"
import { MyThunkDispatch } from "@/redux/typing"
import { LoginAPI } from "@/service/modules/login";
import { login, loginFail, loginSuccess, logoutSuccess } from "./action";
import { push, RouterAction } from 'react-router-redux';

export const loginLogic = (username: string, password: string) => {
  return (dispatch: MyThunkDispatch, getState: () => IRootState) => {
    dispatch(login());
    LoginAPI({ username, password }).then(res => {
      console.log('res login', res)
      const { token, userData } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userData', JSON.stringify(userData))
      dispatch(loginSuccess({ token, userData }))
    }).then(() => {
      console.log('push---->>>after login')
      dispatch(push(`/`))
    })
      .catch((err) => {
        dispatch(loginFail(err))
      })
  }

}