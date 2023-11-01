import { Fragment, useCallback, useEffect, useState } from "react"
import styles from './styles.scss'
import { useLocation, useParams } from "react-router"
import { connect, useSelector, shallowEqual } from "react-redux";
import { IRootState } from "@/redux/Store";
import { IReport } from "@/redux/reducers/ReportReducer";
import { saveReportsUnderDash } from "@/service/modules/reports";
import { Avatar, Breadcrumb, Button, Drawer, message } from "antd";
import { HomeOutlined, MenuOutlined, SaveOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import routes from "@/router/home";
interface Iprops {
  children: any,
  reports: IReport[],
  folders: any[],
  dashboards: any[]
}
function Layout(props: Iprops) {
  const routerParams = useParams();
  const [visibility, setVisibility] = useState(false);
  const user = localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData')!).username
  const [open, setOpen] = useState(false);
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
  /* need rewrite */
  const location = useLocation();
  const curFolder = routerParams.folderId ? props.folders.find(f => f.id == routerParams.folderId) : null;
  const curDash = routerParams.folderId ? props.dashboards.find(d => d.id == routerParams.dashId) : null;
  const itemsMap = routes.filter(route => route.meta == 1).map(route => ({
    title: route.title,
    path: route.path,
    reg: route.reg,
    isDynamic: route.isDynamic
  }))

  let extraBreadcrumbItems: any[] = [];

  for (let i = 0; i < itemsMap.length; i++) {
    const title = itemsMap[i].isDynamic ? (itemsMap[i].title == 'Dash' ? `${itemsMap[i].title} ${curDash && curDash.title}` : `${itemsMap[i].title} ${curFolder && curFolder.title}`) : itemsMap[i].title;
    let path = itemsMap[i].path;
    if (itemsMap[i].isDynamic && i < 3 && routerParams.folderId) {
      path = `/folders/${routerParams.folderId}`
    } else if (itemsMap[i].isDynamic && i >= 3 && routerParams.dashId) {
      path = `/folders/${routerParams.folderId}/dashboard/${routerParams.dashId}`
    }
    if (new RegExp(itemsMap[i].reg!).test(location.pathname)) {
      extraBreadcrumbItems.push({
        title,
        url: location.pathname,
        key: location.pathname
      })
      break;
    } else {
      extraBreadcrumbItems.push({
        title: title,
        url: itemsMap[i].isDynamic ? path : itemsMap[i].path,
        key: itemsMap[i].path
      })
    }
  }
  extraBreadcrumbItems = extraBreadcrumbItems.map((item, index) => ({
    url: item.url,
    key: item.key,
    title: index == extraBreadcrumbItems.length - 1 ? <span>{item.title}</span> : <Link to={item.url}>{item.title}</Link>
  }))
  console.log('extraBreadcrumbItems', extraBreadcrumbItems)
  extraBreadcrumbItems.shift();
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
              Data Visualizer
            </div>
          </div>
          <div className={styles['header-right']}>
            {visibility &&
              <><div onClick={handleSaveReports} className={styles['saveBtn-box']}>
                <SaveOutlined style={{ fontSize: '2rem', fontWeight: 200 }} />
                <span style={{ fontSize: '0.8rem', marginTop: '.4rem' }}>Save</span>
              </div>
                <div> | </div></>}
            <div className={styles['avator-box']}>
              {/* <img src='' /> */}
              <Avatar style={{ backgroundColor: '#2a5abe', verticalAlign: 'middle', fontSize: '.9rem' }} size="large" gap={3}>
                {user}
              </Avatar>
            </div>
            <div className={styles['menu-button-box']}>
              <Button type="primary" onClick={() => setOpen(true)}>
                <MenuOutlined style={{ fontSize: '1.6rem' }} />
              </Button>
              <Drawer title="About Me" placement="right" onClose={() => setOpen(false)} open={open}>
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
        <div className={styles['footer']}>Made with ❤ by Yuwei</div>
      </footer>
    </div>
  )
}
const mapStateToProps = (state: IRootState) => {
  return {
    reports: state.reports.entity,
    folders: state.folders.entity,
    dashboards: state.dashboards.entity
  }
}
export default connect(mapStateToProps)(Layout)