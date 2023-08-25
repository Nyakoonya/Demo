import { IS_DONE, IS_LOADING, LoadingActionType } from "../actionTypes/entities/constant";
export interface ILoadingState {
  isLoading: boolean,
  isDone: boolean
}
const initialState = {
  isLoading: false,
  isDone: false
}
const loadingReducers = (
  state: ILoadingState = initialState,
  action:
    LoadingActionType
): ILoadingState => {
  switch (action.type) {
    case IS_LOADING:
      return {
        isLoading: true,
        isDone: false
      }
    case IS_DONE:
      return {
        isLoading: false,
        isDone: true
      }
    default:
      return state
  }
}
export default loadingReducers