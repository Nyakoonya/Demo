import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout'
import { connect } from 'react-redux'
import GridItem from './GridItem';
import { useRef, useState } from 'react';
import './index.css'
// import * as shortid from 'shortid';
import { IRootState } from '@/redux/Store';
import { IReport, IReportsState } from '@/redux/reducers/ReportReducer';
import { Action, AnyAction, Dispatch } from 'redux';
import { addReportSuccess } from '@/redux/actionCreators/entities/reports/action';
import { ThunkDispatch } from 'redux-thunk';
import { loadReportsLogic } from '@/redux/actionCreators/entities/reports/logic';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
// const shortid = require('shortid');

interface IProps {
  reports: IReport[],
  addReport: (newReport: IReport) => void,
  // newReport: IReport
}

function GridLayout(props: IProps) {
  const { reports } = props;
  console.log('reports in dash', reports)
  const gridRef = useRef<any>(null)
  const initialLayouts = reports.map(r => r.content.layout)
  const [layouts, setLayouts] = useState({ lg: initialLayouts })
  // initial render of widgets in redux
  const generateDom = (widgets: IReport[]) => {
    console.log('----->>>generte------->>>')
    return widgets.map((item, i) => (
      <div key={item.content.layout.i} data-grid={item.content.layout} onClick={() => onSelected(item)}>
        <GridItem gridItem={item} ref={gridRef} />
      </div>
    ))
  }
  const onSelected = (item: IReport) => {
    console.log('selected', item.content.layout.i)
    // redux change active report
  }
  // when add a widget
  const onAddWidget = () => {
    // add new widget into redux 
    // props.addReport(props.newReport)
    // regenerate?
  }

  // when remove a widget
  const onRemoveWidget = (widget: IReport) => {

  }
  // when move a widget
  const onLayoutChange = (layout: any, layouts: any) => {
    console.log('layouts--change layout', layout)
    // change layout of report, through redux(updateReportLogic)
    console.log('layouts', layouts)
    setLayouts(layouts);
    gridRef.current && gridRef.current.resize()

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
      >
        {generateDom(reports)}
      </ResponsiveReactGridLayout></div>

  )
}
const mapStateToProps = (states: IRootState) => {
  console.log('states', states);
  return {
    reports: states.reports.entity,
  }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    addReport: (report: IReport) => addReportSuccess(report),
    loadReports: (id: string, isPush: boolean) => dispatch(loadReportsLogic(id, isPush))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GridLayout);