export const IS_LOADING = 'IS_LOADING';
export const IS_DONE = 'IS_DONE';
export interface IS_LOADING {
  type: typeof IS_LOADING
}

export interface IS_DONE {
  type: typeof IS_DONE
}

export type LoadingActionType = IS_LOADING | IS_DONE;