import { combineReducers } from "redux";
import dashboardReducers from "./DashboardReducer";
import folderReducers from "./FolderReducer";
import reportReducers from "./ReportReducer";
const RootReducer = combineReducers({
    dashboards: dashboardReducers, 
    folders: folderReducers,
    reports: reportReducers
})
export default RootReducer;