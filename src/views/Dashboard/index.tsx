import { connect } from "react-redux"
import { IRootState } from '@/redux/Store';
import GridLayout from "@/components/GridLayout";
import styles from './index.scss'
import { Card, Tabs } from "antd";
import { InboxOutlined, LayoutOutlined } from '@ant-design/icons';
import ComLib from '@/components/ComponentsLib';
import StyleTab from '@/components/StyleTab';
import { IReport } from "@/redux/reducers/ReportReducer";
import { ThunkDispatch } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchColumnsUnderFolder } from "@/service/modules/datasource";
import { loadReportsLogic } from "@/redux/actionCreators/entities/reports/logic";
import { changeActiveReport } from "@/redux/actionCreators/entities/constant";
interface Iprops {
  reports: IReport[],
  loadReports: (folderId: string | number, dashId: string, isPush: boolean) => void,
  changeActiveReport: (id: string | null) => void
}
function Dashboard(props: Iprops) {
  const [fieldList, setFieldList] = useState([]);
  const params = useParams();
  const { folderId = '', dashId = '' } = params;
  useEffect(() => {
    fetchColumnsUnderFolder(folderId).then(res => {
      const { data } = res;
      console.log('data---datasource columns', data)
      if (data) {
        setFieldList(data)
      }
    })
  }, [])
  useEffect(() => {
    props.loadReports(folderId, dashId, false)
  }, [])
  const tabsItems = [
    {
      id: '1',
      title: 'ComponentsLibrary',
      icon: InboxOutlined,
      children: <ComLib limit={10} datasourceFieldsList={fieldList}></ComLib>
    },
    {
      id: '2',
      title: 'StyleTab',
      icon: LayoutOutlined,
      children: <StyleTab></StyleTab>
    }
  ];
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('click blank----->>>')
    e.stopPropagation();
    props.changeActiveReport(null);
  }
  return (
    <div className={styles["dashboard-wrap"]}>
      <div className={styles["left-menu"]}>
        <Card style={{ width: '100%', height: '100%' }}>
          <Tabs
            defaultActiveKey="1"
            items={tabsItems.map((item, i) => {
              return {
                label: (
                  <span>
                    <item.icon />
                    {item.title}
                  </span>
                ),
                key: item.id,
                children: <div>{item.children}</div>,
              };
            })}
          />
        </Card>
      </div>
      <div className={styles["right-layout"]}>
        <Card style={{ width: '100%', height: '100%' }} onClick={(e) => handleClick(e)}>
          <GridLayout disabled={false}></GridLayout>
        </Card>

      </div>
    </div>

  )
}
const mapStateToProps = (states: IRootState) => {
  console.log('states', states)
  return {
    reports: states.reports.entity
  }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    loadReports: (folderId: string | number, dashId: string, isPush: boolean) => dispatch(loadReportsLogic(folderId, dashId, isPush)),
    changeActiveReport: (id: string | null) => dispatch(changeActiveReport(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)