export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';

export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAIL = 'LOG_IN_FAIL';

export interface IUser {
  token: string | null | undefined,
  userData: any
}
export interface LOG_IN {
  type: typeof LOG_IN
}

export interface LOG_IN_SUCCESS {
  type: typeof LOG_IN_SUCCESS,
  payload: IUser
}

export interface LOG_IN_FAIL {
  type: typeof LOG_IN_FAIL,
  err: any
}

/* logout */
export interface LOG_OUT {
  type: typeof LOG_OUT
}

export interface LOG_OUT_SUCCESS {
  type: typeof LOG_OUT_SUCCESS
}

export interface LOG_OUT_FAIL {
  type: typeof LOG_OUT_FAIL,
  err: any
}


export type LoginActionType = LOG_IN | LOG_IN_SUCCESS | LOG_IN_FAIL;
export type LogoutActionType = LOG_OUT | LOG_OUT_SUCCESS | LOG_OUT_FAIL;