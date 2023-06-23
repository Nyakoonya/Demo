import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import {routerMiddleware} from 'react-router-redux';
import RootReducer from "./reducers/RootReducer";
import { IDashboardState } from "./reducers/DashboardReducer";
import { IFolderState } from "./reducers/FolderReducer";

export interface IRootState {
  dashboards: IDashboardState
  folders: IFolderState
}

let createHistory = require('history').createHashHistory;
let history = createHistory();   // 初始化history
let routerWare = routerMiddleware(history);

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk, routerWare)));

export default store;
