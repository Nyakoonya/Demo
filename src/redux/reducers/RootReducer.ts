import { combineReducers } from "redux";
import dashboardReducers from "./DashboardReducer";
import folderReducers from "./FolderReducer";
const RootReducer = combineReducers({
    dashboards: dashboardReducers, 
    folders: folderReducers
})
export default RootReducer;