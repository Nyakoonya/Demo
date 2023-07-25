import { connect } from "react-redux"
import { IRootState } from '@/redux/Store';
import { AnyAction, Dispatch } from "redux";
import { useParams } from "react-router";
import { loadReportsLogic } from "@/redux/actionCreators/entities/reports/logic";
import { LoadReportsActionType } from "@/redux/actionTypes/entities/reports/loadReportsTypes";
import { ThunkDispatch } from "redux-thunk";
import List from "@/components/List";
import { Button } from "antd";
import { addDashboardLogic } from "@/redux/actionCreators/entities/dashboard/logic";
type IOpenFunc = (id: string) => void
interface Iprops {
    dashboards: any[],
    loadReports: IOpenFunc,
    addDashboard: (id: string) => void
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
    return (
        <div>
            <div style={{ display: 'inline-block', textAlign: 'right', width: '100%', padding: '10px', boxSizing: 'border-box' }}>
                <Button type="primary" onClick={onAddDashboard}>Create a dashboard</Button>
            </div>

            <List list={dashboards} onOpen={loadReports} />
        </div>

    )
}
const mapStateToProps = (states: IRootState) => {
    console.log('states', states)
    return {
        dashboards: states.dashboards.entity
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    return {
        loadReports: (id: string) => dispatch(loadReportsLogic(id)),
        addDashboard: (id: string) => dispatch(addDashboardLogic(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoldersPage)


