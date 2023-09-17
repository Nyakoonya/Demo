import { connect } from "react-redux"
import { IRootState } from '@/redux/Store';
import { Action, AnyAction, Dispatch } from "redux";
import { useParams } from "react-router";
import { loadReportsLogic } from "@/redux/actionCreators/entities/reports/logic";
import { LoadReportsActionType } from "@/redux/actionTypes/entities/reports/loadReportsTypes";
import { ThunkDispatch } from "redux-thunk";
import List from "@/components/List";
import { Button } from "antd";
import { addDashboardLogic, loadDashboardsLogic } from "@/redux/actionCreators/entities/dashboard/logic";
import Tabs from "@/components/Tabs";
import Datasource from "../Datasource";
import { loadDatasourceDataLogic, loadDatasourcesLogic } from "@/redux/actionCreators/entities/datasource/logic";
import DSCreation from "../Datasource/DSCreation";
import { useCallback, useEffect, useRef, useState } from "react";
import DSData from "../Datasource/DSData";

type IOpenFunc = (id: string) => void
interface Iprops {
  dashboards: any[],
  datasources: any[],
  isLoading: boolean,
  isDone: boolean,
  loadReports: (id: string, isPush: boolean) => void,
  addDashboard: (id: string) => void,
  loadDashboards: (id: string) => void,
  loadDatasources: (id: string) => void,
  loadDatasourceData: (id: string) => any
  getDatasourceData: (id: string | null) => any,
  // [propName: string]: any
}
function FoldersPage(props: Iprops) {
  const DsdataRef = useRef<any>(null)
  const { dashboards, loadReports, addDashboard } = props;
  const params = useParams();
  const { folderId = '' } = params;
  const [curDsId, setCurDsId] = useState<string | null>(null)
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

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
  useEffect(() => {
    props.loadDashboards(folderId)
  }, [])

  const onAddDashboard = () => {
    console.log('create dash in folderId', params.folderId);
    addDashboard(folderId)
  }

  const handleShowData = useCallback((id: string) => {
    setCurDsId(id);
    props.loadDatasourceData(id);
  }, [])
  useEffect(() => {
    const data = props.getDatasourceData(curDsId);
    console.log('data----->>>>', data)
    if (data) {
      console.log('set---->>>>')
      setData(data);
      setShow(true);
    }
  }, [props.getDatasourceData(curDsId)]);

  const changeVisibility = () => {
    setShow((show) => !show)
  }

  const tabItems = [
    {
      label: 'Dashboards',
      key: '1',
      children: <><div style={{ display: 'inline-block', textAlign: 'right', width: '100%', padding: '10px', boxSizing: 'border-box' }}>
        <Button type="primary" onClick={onAddDashboard} style={{ marginRight: '40px' }}>Create a dashboard</Button>
      </div>

        <List list={dashboards} onOpen={(id) => loadReports(id, true)} type={'dash'} /></>
    },
    {
      label: 'Datasources',
      key: '2',
      children: <>
        <DSCreation folderId={folderId} />
        <List list={props.datasources} onOpen={(id) => handleShowData(id)} type={'ds'} />
        {show && <DSData data={data} ref={DsdataRef} id={curDsId} changeVisibility={changeVisibility} />}
      </>
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
  const { datasources } = states;
  return {
    dashboards: states.dashboards.entity,
    datasources: states.datasources.entity,
    isLoading: states.loading.isLoading,
    idDone: states.loading.isDone,
    getDatasourceData: (id: string | null) => datasources.entity.find(d => d.id === id) && datasources.entity.find(d => d.id === id)!.data,
  }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    loadReports: (id: string, isPush: boolean) => dispatch(loadReportsLogic(id, isPush)),
    loadDashboards: (id: string) => dispatch(loadDashboardsLogic(id)),
    addDashboard: (id: string) => dispatch(addDashboardLogic(id)),
    loadDatasources: (id: string) => dispatch(loadDatasourcesLogic(id)),
    loadDatasourceData: (id: string) => dispatch(loadDatasourceDataLogic(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoldersPage)


