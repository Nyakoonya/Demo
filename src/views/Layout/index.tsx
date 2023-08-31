import { Fragment, useCallback, useEffect, useState } from "react"
import styles from './styles.scss'
import { useParams } from "react-router"
import { connect } from "react-redux";
import { IRootState } from "@/redux/Store";
import { IReport } from "@/redux/reducers/ReportReducer";
import { saveReportsUnderDash } from "@/service/modules/reports";
import { message } from "antd";
interface Iprops {
  children: any,
  reports: IReport[]
}
function Layout(props: Iprops) {
  const routerParams = useParams();
  const [visibility, setVisibility] = useState(false);
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
  return (
    <div>
      <header>
        <div className={styles['header-wrap']}>
          <div className={styles['header-left']}>
            <div className={styles['logo-box']}>
              {/* <img src='' /> */}
              <h2>LOGO</h2>
            </div>
          </div>
          <div className={styles['header-right']}>
            {visibility && <div onClick={handleSaveReports}>Save</div>}
            <div className={styles['avator-box']}>
              {/* <img src='' /> */}
              User
            </div>
            <div className={styles['menu-button-box']}>
              <button>Menu</button>
            </div>
          </div>
        </div>
      </header>
      <div className={styles['content']}>
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