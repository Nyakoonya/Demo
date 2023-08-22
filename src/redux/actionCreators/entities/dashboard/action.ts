import {
  LOAD_DASHBOARDS,
  LOAD_DASHBOARDS_FAIL,
  LOAD_DASHBOARDS_SUCCESS,
} from "@/redux/actionTypes/entities/dashboard/loadDashboardsTypes";

import {
  ADD_DASHBOARD,
  ADD_DASHBOARD_FAIL,
  ADD_DASHBOARD_SUCCESS,
} from "../../../actionTypes/entities/dashboard/addDashoboardTypes";
import {
  DELETE_DASHBOARD,
  DELETE_DASHBOARD_FAIL,
  DELETE_DASHBOARD_SUCCESS,
} from "../../../actionTypes/entities/dashboard/deleteDashboardTypes";
import {
  UPDATE_DASHBOARD,
  UPDATE_DASHBOARD_FAIL,
  UPDATE_DASHBOARD_SUCCESS,
} from "../../../actionTypes/entities/dashboard/updateDashboardTypes";
/** load dashboards */
export const loadDashboards = (): LOAD_DASHBOARDS => ({
  type: LOAD_DASHBOARDS,
});
export const loadDashboardSuccess = (
  payload: any
): LOAD_DASHBOARDS_SUCCESS => ({
  type: LOAD_DASHBOARDS_SUCCESS,
  payload,
});
export const loadDashboardFail = (err: any): LOAD_DASHBOARDS_FAIL => ({
  type: LOAD_DASHBOARDS_FAIL,
  err,
});

/** add dashboard */
export const addDashboard = (): ADD_DASHBOARD => ({
  type: ADD_DASHBOARD,
});
export const addDashboardSuccess = (): ADD_DASHBOARD_SUCCESS => ({
  type: ADD_DASHBOARD_SUCCESS
});
export const addDashboardFail = (err: any): ADD_DASHBOARD_FAIL => ({
  type: ADD_DASHBOARD_FAIL,
  err,
});

/** update dashboard */
export const updateDashboard = (): UPDATE_DASHBOARD => ({
  type: UPDATE_DASHBOARD,
});
export const updateDashboardSuccess = (
  payload: any
): UPDATE_DASHBOARD_SUCCESS => ({
  type: UPDATE_DASHBOARD_SUCCESS,
  payload,
});
export const updateDashboardFail = (err: any): UPDATE_DASHBOARD_FAIL => ({
  type: UPDATE_DASHBOARD_FAIL,
  err,
});

/** delete dashboard */
export const deleteDahboard = (): DELETE_DASHBOARD => ({
  type: DELETE_DASHBOARD,
});

export const deleteDahboardSuccess = (
  payload: any
): DELETE_DASHBOARD_SUCCESS => ({
  type: DELETE_DASHBOARD_SUCCESS,
  payload,
});
export const deleteDahboardFail = (err: any): DELETE_DASHBOARD_FAIL => ({
  type: DELETE_DASHBOARD_FAIL,
  err,
});
