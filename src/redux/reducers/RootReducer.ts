import { combineReducers } from "redux";
import dashboardReducers from "./DashboardReducer";
import folderReducers from "./FolderReducer";
import reportReducers from "./ReportReducer";
import datasourceReducers from "./DatasourceReducer";
const RootReducer = combineReducers({
  dashboards: dashboardReducers,
  folders: folderReducers,
  reports: reportReducers,
  datasources: datasourceReducers
})
export default RootReducer;