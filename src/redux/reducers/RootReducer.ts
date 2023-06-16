import { combineReducers } from "redux";
import dashboardReducers from "./DashboardReducer";
const RootReducer = combineReducers({
    dashboards: dashboardReducers, 
})
export default RootReducer;