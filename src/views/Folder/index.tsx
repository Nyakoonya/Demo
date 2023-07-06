import { connect } from "react-redux"
import { IRootState } from '@/redux/Store';
import { Dispatch } from "redux";
type IOpenFunc = (id: number) => void
interface Iprops {
    dashboards: any[],
    loadReports: IOpenFunc
}
function FoldersPage (props: Iprops) {
    const { dashboards, loadReports } = props;
    
    return (
        dashboards.map((item, i) => (
            <div key={i} onClick={() => loadReports(item.id)}>{item.title}</div>
        ))
    )
}
const mapStateToProps = (states: IRootState) => {
    console.log('states', states)
    return {
        dashboards: states.dashboards.entity
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
 return {
    loadReports: (id: number) => dispatch(loadReportsLogic(id))
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoldersPage)

function loadReportsLogic(id: number): any {
    throw new Error("Function not implemented.");
}
