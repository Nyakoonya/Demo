import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout'
import { connect } from 'react-redux'
import GridItem from './GridItem';
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
export interface IWidget {
    layout: Layout,
    widgetName: string,
    id: string
}
interface IProps {
    reports: IReport[],
    addReport: (newReport: IReport) => void,
    // newReport: IReport
}

function GridLayout(props: IProps) {
    const { reports } = props;
    const reportsContents = reports.map(item => item.content)
    // initial render of widgets in redux
    const generateDom = (widgets: IWidget[]) => {
        return widgets.map((item, i) => (
            <div key={item.layout.i} data-grid={item.layout} onClick={() => onSelected(item)}>
                <GridItem widget={item.layout} />
            </div>
        ))
    }
    const onSelected = (item: IWidget) => {
        console.log('selected', item.layout.i)
    }
    // when add a widget
    const onAddWidget = () => {
        // add new widget into redux 
        // props.addReport(props.newReport)
        // regenerate?
    }
    // data from redux = initial data
    const testWidgets: IWidget[] = [
        {
            layout: {
                x: 3 % 12,
                y: Infinity, // puts it at the bottom
                w: 1,
                h: 2,
                i: new Date().getTime().toString(),
            },
            widgetName: 'test',
            // id: shortid.generate()
            id: new Date().getTime().toString(),
        }
    ];
    const getLayouts: any = () => {
        return reportsContents.map(item => item.layout)
    }

    // when remove a widget
    const onRemoveWidget = (widget: IWidget) => {

    }
    // when move a widget
    const onLayoutChange = (layouts: any) => {
        console.log('layouts--change layout', layouts)
    }

    const onBreakpointChange = (newBreakPoint: string, newCols: number) => {
        console.log('newCols--change breakpoint', newCols);
    }



    return (
        <div>
            <ResponsiveReactGridLayout
                layouts={getLayouts()}
                className='layout'
                onLayoutChange={onLayoutChange}
                onBreakpointChange={onBreakpointChange}
            >
                {generateDom(reportsContents)}
            </ResponsiveReactGridLayout></div>

    )
}
const mapStateToProps = (states: IRootState) => {
    console.log('states', states);
    return {
        reports: states.reports.entity,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
    return {
        addReport: (report: IReport) => addReportSuccess(report),
        loadReports: (id: string) => dispatch(loadReportsLogic(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GridLayout);