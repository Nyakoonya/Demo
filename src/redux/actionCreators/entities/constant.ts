import { CHANGE_ACTIVE_REPORT, IS_DONE, IS_LOADING } from "@/redux/actionTypes/entities/constant";

export const isLoading = (): IS_LOADING => ({
  type: IS_LOADING
});

export const isDone = (): IS_DONE => ({
  type: IS_DONE
})

export const changeActiveReport = (payload: any): CHANGE_ACTIVE_REPORT => {
  console.log('payload change active report', payload);
  return {
    type: CHANGE_ACTIVE_REPORT,
    payload
  }
}