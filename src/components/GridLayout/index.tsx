import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout'
import { connect } from 'react-redux'
import GridItem from './GridItem';
import { useRef, useState } from 'react';
import './index.css'
// import * as shortid from 'shortid';
import { IRootState } from '@/redux/Store';
import { IReport, IReportsState } from '@/redux/reducers/ReportReducer';
import { Action, AnyAction, Dispatch } from 'redux';
import { addReportSuccess, removeReportSuccess, updateReportSuccess, updateReportsSuccess } from '@/redux/actionCreators/entities/reports/action';
import { ThunkDispatch } from 'redux-thunk';
import { loadReportsLogic } from '@/redux/actionCreators/entities/reports/logic';
import { changeActiveReport } from '@/redux/actionCreators/entities/constant';
import { CloseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
// const shortid = require('shortid');

interface IProps {
  reports: IReport[],
  addReport: (newReport: IReport) => void,
  changeActiveReport: (id: string | null) => void
  removeReport: (id: string) => void,
  updateReports: (reports: IReport[]) => void
  disabled?: boolean
  // newReport: IReport
}

function GridLayout(props: IProps) {
  // const { reports } = props;
  const reports = useSelector((state: IRootState) => state.reports.entity)
  console.log('reports in dash', reports)
  const gridRef = useRef<any>({})
  const initialLayouts = reports.map(r => r.content.layout)
  const [layouts, setLayouts] = useState({ lg: initialLayouts })
  // initial render of widgets in redux
  const generateDom = (widgets: IReport[]) => {
    console.log('----->>>generte------->>>');
    console.log('widgets', widgets)
    return widgets.map((item, i) => (
      <div key={item.content.layout.i} data-grid={item.content.layout} onClick={(e) => onSelected(e, item)}>
        {!props.disabled && <span className='remove' onClick={() => onRemoveItem(item.id)}><CloseOutlined /></span>}
        <GridItem gridItem={item} ref={gridRef.current[item.id] ??= { current: null }} key={item.id} disabled={props.disabled} />
      </div>
    ))
  }
  const onSelected = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: IReport) => {
    if (!props.disabled) {
      console.log('selected', item.id)
      e.stopPropagation();
      // redux change active report
      props.changeActiveReport(item.id);
    }
  }
  // when remove a widget
  const onRemoveItem = (id: string) => {
    props.removeReport(id);
    props.changeActiveReport(null)
  }

  const onLayoutChange = (layout: any, layouts: any) => {
    console.log('layouts--change layout', layout)
    // change layout of report, through redux(updateReportLogic)
    console.log('layouts', layouts)
    setLayouts(layouts);
    if (layout.length > 0 && reports.length > 0) {
      const newReports = reports.map(r => {
        const target = layout.find((l: any) => l.i === r.id);
        if (target) {
          return {
            ...r,
            content: {
              ...r.content,
              layout: target
            }
          }
        } else {
          return r;
        }
      });
      console.log('newReports', newReports)
      props.updateReports(newReports)
    }
    console.log('gridRef.current', gridRef.current)
    reports.map(report => {
      gridRef.current && gridRef.current[report.id].current && gridRef.current[report.id].current.resize()
    })

  }

  const onBreakpointChange = (newBreakPoint: string, newCols: number) => {
    console.log('newCols--change breakpoint', newCols);
  }



  return (
    <div>
      <ResponsiveReactGridLayout
        layouts={layouts}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        containerPadding={[15, 15]}
        className='layout'
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        isDraggable={!props.disabled}
        isResizable={!props.disabled}
      >
        {generateDom(reports)}
      </ResponsiveReactGridLayout></div>

  )
}
const mapStateToProps = (states: IRootState) => {
  console.log('states active', states);
  return {
    reports: states.reports.entity,
  }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    addReport: (report: IReport) => addReportSuccess(report),
    // loadReports: (id: string, isPush: boolean) => dispatch(loadReportsLogic(id, isPush)),
    changeActiveReport: (id: string | null) => dispatch(changeActiveReport(id)),
    removeReport: (id: string) => dispatch(removeReportSuccess(id)),
    updateReports: (reports: IReport[]) => dispatch(updateReportsSuccess(reports))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GridLayout);