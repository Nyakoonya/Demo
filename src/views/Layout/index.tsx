import { Fragment, useCallback, useEffect, useState } from "react"
import styles from './styles.scss'
import { useLocation, useParams } from "react-router"
import { connect } from "react-redux";
import { IRootState } from "@/redux/Store";
import { IReport } from "@/redux/reducers/ReportReducer";
import { saveReportsUnderDash } from "@/service/modules/reports";
import { Avatar, Breadcrumb, Button, Drawer, message } from "antd";
import { HomeOutlined, MenuOutlined, SaveOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { breadcrumbNameMap } from "@/router/home";
interface Iprops {
  children: any,
  reports: IReport[]
}
function Layout(props: Iprops) {
  const routerParams = useParams();
  const [visibility, setVisibility] = useState(false);
  const user = localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData')!).username
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (routerParams.dashId) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [routerParams.dashId])

  const handleSaveReports = () => {
    console.log('props.reports------->>save', props.reports)
    console.log('routerParams', routerParams)
    let reports = props.reports.map(r => ({
      ...r,
      dataSetting: {
        dimensions: r.dataSetting.dimensions,
        measures: r.dataSetting.measures
      }
    }))

    saveReportsUnderDash(reports, routerParams.dashId!).then(res => {
      console.log('res save', res)
      const { code, msg } = res;
      if (code === 0) {
        message.success(msg)
      } else {
        message.error(msg)
      }
    })
  }

  const location = useLocation();
  const params = Object.values(routerParams);
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const newPathSnippets = pathSnippets.filter((l) => !params.includes(l))
  const extraBreadcrumbItems = newPathSnippets.map((_, index) => {
    const path = `/${newPathSnippets.slice(0, index + 1).join('/')}`;
    const url = `/${pathSnippets.slice(0, index + 2).join('/')}`
    return {
      url,
      key: url,
      title: index == newPathSnippets.length - 1 ? <span>{breadcrumbNameMap[path]}</span> : <Link to={url}>{breadcrumbNameMap[path]}</Link>,
    };
  });

  const breadcrumbItems = [
    {
      title: extraBreadcrumbItems.length == 0 ? null : <Link to="/"><HomeOutlined /></Link>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);
  return (
    <div>
      <header>
        <div className={styles['header-wrap']}>
          <div className={styles['header-left']}>
            <div className={styles['logo-box']}>
              {/* <img src='' /> */}
              N-BI
            </div>
          </div>
          <div className={styles['header-right']}>
            {visibility &&
              <><div onClick={handleSaveReports} className={styles['saveBtn-box']}>
                <SaveOutlined style={{ fontSize: '22px', fontWeight: 200 }} />
                <span style={{ fontSize: 12, marginTop: '5px' }}>Save</span>
              </div>
                <div> | </div></>}
            <div className={styles['avator-box']}>
              {/* <img src='' /> */}
              <Avatar style={{ backgroundColor: '#2a5abe', verticalAlign: 'middle' }} size="large" gap={3}>
                {user}
              </Avatar>
            </div>
            <div className={styles['menu-button-box']}>
              <Button type="primary" onClick={() => setOpen(true)}>
                <MenuOutlined style={{ fontSize: '24px' }} />
              </Button>
              <Drawer title="Basic Drawer" placement="right" onClose={() => setOpen(false)} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </div>
          </div>
        </div>
      </header>
      <div className={styles['content']}>
        <div className={styles['breadcrumb-box']}>
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <Fragment>{props.children}</Fragment>
      </div>
      <footer>
        <div className={styles['footer']}>Footer Content.</div>
      </footer>
    </div>
  )
}
const mapStateToProps = (state: IRootState) => {
  return {
    reports: state.reports.entity
  }
}
export default connect(mapStateToProps)(Layout)