import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";
import { IDashboardState } from "./reducers/DashboardReducer";

export interface IRootState {
  dashboards: IDashboardState
}

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
