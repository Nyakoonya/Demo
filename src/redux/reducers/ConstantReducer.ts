import { CHANGE_ACTIVE_REPORT, ChangeActiveReportType } from "../actionTypes/entities/constant";
export interface IConstantState {
  activeReport: any
}
const initialState = {
  activeReport: null
}
const constantReducers = (
  state: IConstantState = initialState,
  action:
    ChangeActiveReportType
): IConstantState => {
  switch (action.type) {
    case CHANGE_ACTIVE_REPORT:
      return {
        activeReport: action.payload
      }
    default:
      return state
  }
}
export default constantReducers