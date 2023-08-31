export const IS_LOADING = 'IS_LOADING';
export const IS_DONE = 'IS_DONE';
export const CHANGE_ACTIVE_REPORT = 'CHANGE_ACTIVE_REPORT';
export interface IS_LOADING {
  type: typeof IS_LOADING
}

export interface IS_DONE {
  type: typeof IS_DONE
}

export interface CHANGE_ACTIVE_REPORT {
  type: typeof CHANGE_ACTIVE_REPORT,
  payload: any
}

export type LoadingActionType = IS_LOADING | IS_DONE;

export type ChangeActiveReportType = CHANGE_ACTIVE_REPORT;