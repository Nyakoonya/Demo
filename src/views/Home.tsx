import { IRootState } from '@/redux/Store';
import styles from './styles.scss'
import { connect } from 'react-redux';
import { IFolderState } from '@/redux/reducers/FolderReducer';
import List, { IList } from '../components/List';
import { loadDashboardsLogic } from '@/redux/actionCreators/entities/dashboard/logic';
import { Dispatch } from 'redux';
import { addFolderLogic, loadFoldersLogic } from '@/redux/actionCreators/entities/folder/logic';
import { useEffect } from 'react';
import { loadFolders } from '@/redux/actionCreators/entities/folder/action';
type IOpenFunc = (id: string) => void
interface Iprops {
  loadDashboards: IOpenFunc;
  folders: IList[],
  [propName: string]: any
}
function Home(props: Iprops) {
  console.log('props.folders----->>>>', props.folders)

  useEffect(() => {
    props.loadFolders()
  }, [])
  const onCreate = () => {
    console.log('new');
    props.addFolder()
  }
  return (
    <>
      <div className={styles['create-box']}>
        <div className={styles['create-btn']} onClick={onCreate}>New Folder</div>
      </div>
      <List list={props.folders} onOpen={props.loadDashboards} imgType={'folderImg'} />
    </>
  );
}
const mapStateToProps = (states: IRootState) => {
  console.log('states', states)
  return {
    folders: states.folders.entity
  }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    loadFolders: () => dispatch(loadFoldersLogic()),
    addFolder: () => dispatch(addFolderLogic()),
    loadDashboards: (id: string) => dispatch(loadDashboardsLogic(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);