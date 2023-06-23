import { IRootState } from '@/redux/Store';
import styles from './styles.scss'
import { connect } from 'react-redux';
import { IFolderState } from '@/redux/reducers/FolderReducer';
import FoldersList from '../components/FoldersList';
import { loadDashboardsLogic } from '@/redux/actionCreators/entities/dashboard/logic';
import { Dispatch } from 'react';
type IOpenFunc = (id: number) => void
interface Iprops {
    loadDashboards: IOpenFunc;
    folders: IFolderState,

}
function Home(props: Iprops) {
    console.log('props.folders----->>>>', props.folders)

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
                <div className={styles['create-btn']}>New Folder</div>
            </div>
            <FoldersList list={testList}  onOpen={props.loadDashboards}/>
        </>
    );
}
const mapStateToProps = (states: IRootState) => {
    console.log('states', states)
    return {
        folders: states.folders
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        loadDashboards: (id: number) => dispatch(loadDashboardsLogic(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);