import { IS_DONE, IS_LOADING } from "@/redux/actionTypes/entities/constant";

export const isLoading = (): IS_LOADING => ({
  type: IS_LOADING
});

export const isDone = (): IS_DONE => ({
  type: IS_DONE
})