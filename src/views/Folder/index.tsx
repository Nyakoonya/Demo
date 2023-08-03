import { connect } from "react-redux"
import { IRootState } from '@/redux/Store';
import { AnyAction, Dispatch } from "redux";
import { useParams } from "react-router";
import { loadReportsLogic } from "@/redux/actionCreators/entities/reports/logic";
import { LoadReportsActionType } from "@/redux/actionTypes/entities/reports/loadReportsTypes";
import { ThunkDispatch } from "redux-thunk";
import List from "@/components/List";
import { Button } from "antd";
import { addDashboardLogic, loadDashboardsLogic } from "@/redux/actionCreators/entities/dashboard/logic";
import Tabs from "@/components/Tabs";
import Datasource from "../Datasource";
import { loadDatasourcesLogic } from "@/redux/actionCreators/entities/datasource/logic";

type IOpenFunc = (id: string) => void
interface Iprops {
  dashboards: any[],
  datasources: any[],
  loadReports: IOpenFunc,
  addDashboard: (id: string) => void,
  loadDashboards: (id: string) => void,
  loadDatasources: (id: string) => void
  // [propName: string]: any
}
function FoldersPage(props: Iprops) {
  const { dashboards, loadReports, addDashboard } = props;
  const params = useParams();
  const { folderId = '' } = params;
  const onAddDashboard = () => {
    console.log('create dash in folderId', params.folderId);
    addDashboard(folderId)
  }
  const onChangeRender = (value: string) => {
    console.log('value--change render', value)
    switch (value) {
      case '1':
        props.loadDashboards(folderId);
        break;
      case '2':
        props.loadDatasources(folderId);
        break;
      default:
        break;
    }
  }
  const tabItems = [
    {
      label: 'Folders',
      key: '1',
      children: <><div style={{ display: 'inline-block', textAlign: 'right', width: '100%', padding: '10px', boxSizing: 'border-box' }}>
        <Button type="primary" onClick={onAddDashboard}>Create a dashboard</Button>
      </div>

        <List list={dashboards} onOpen={loadReports} /></>
    },
    {
      label: 'Datasources',
      key: '2',
      children: <List list={props.datasources} onOpen={() => { }} />
    }
  ]
  return (
    <div>
      <Tabs items={tabItems} activeKey='1' onChangeTab={(value) => onChangeRender(value)}></Tabs>
    </div>

  )
}
const mapStateToProps = (states: IRootState) => {
  console.log('states', states)
  return {
    dashboards: states.dashboards.entity,
    datasources: states.datasources.entity
  }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  return {
    loadReports: (id: string) => dispatch(loadReportsLogic(id)),
    loadDashboards: (id: string) => dispatch(loadDashboardsLogic),
    addDashboard: (id: string) => dispatch(addDashboardLogic(id)),
    loadDatasources: (id: string) => dispatch(loadDatasourcesLogic(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoldersPage)


