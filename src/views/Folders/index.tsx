import { connect } from "react-redux"
import { IRootState } from '@/redux/Store';

interface Iprops {
    dashboards: any[]
}
function FoldersPage (props: Iprops) {
    const { dashboards } = props;
    return (
        dashboards.map((item) => (
            <div>{item.title}</div>
        ))
    )
}
const mapStateToProps = (states: IRootState) => {
    console.log('states', states)
    return {
        dashboards: states.dashboards.entity
    }
}
export default connect(mapStateToProps)(FoldersPage)