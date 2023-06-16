import { IRootState } from '@/redux/Store';
import Folders from '../components/Folders'
import styles from './styles.scss'
import { connect } from 'react-redux';
import { IDashboardState } from '@/redux/reducers/DashboardReducer';
interface Iprops {
    dashboards: IDashboardState
}
function Home(props: Iprops) {
    console.log('props.dashboards----->>>>', props.dashboards)
    const testList = [
        {
            title: 'test',
            id: 1,
            img: ''
        },
        {
            title: 'test',
            id: 2,
            img: ''
        },
        {
            title: 'test',
            id: 3,
            img: ''
        },
        {
            title: 'test',
            id: 4,
            img: ''
        },
        {
            title: 'test',
            id: 5,
            img: ''
        }
    ]
    return (
        <>
            <div className={styles['create-box']}>
                <div className={styles['create-btn']}>Create your dashborad</div>
            </div>
            <Folders list={testList} />
        </>
    );
}
const mapStateToProps = (states: IRootState) => {
    console.log('states', states)
    return {
        dashboards: states.dashboards
    }
}
export default connect(mapStateToProps)(Home);