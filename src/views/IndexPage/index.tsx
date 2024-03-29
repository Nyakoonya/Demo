import List, { IList } from '@/components/List';
import styles from './styles.scss'
import { connect } from 'react-redux';
import { IRootState } from '@/redux/Store';
import { MyThunkDispatch } from '@/redux/typing';
import { loadDashboardsLogic } from '@/redux/actionCreators/entities/dashboard/logic';
import { useEffect, useRef, useState } from 'react';
import { loadFoldersLogic } from '@/redux/actionCreators/entities/folder/logic';
import { compact, isEmpty } from 'lodash';
import { Button, Card } from 'antd';
import GridLayout from '@/components/GridLayout';
import { loadReportsLogic } from '@/redux/actionCreators/entities/reports/logic';
import { getIndexPageDash } from '@/service/modules/dashboard';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
interface IProp {
  folders: IList[],
  loadFolders: () => void,
  loadDashboards: (id: string) => void,
  loadReports: (folderId: string | number, dashId: string, isPush: boolean) => void,
}
const IndexPage = (props: IProp) => {
  /* index page */
  const [curIndexDashId, setCurIndexDashId] = useState('');
  const [curIndexDashTitle, setCurIndexDashTitle] = useState('');
  const [curIndexFolderTitle, setCurIndexFolderTitle] = useState('');
  useEffect(() => {
    getIndexPageDash().then(res => {
      if (res && res.data) {
        const { data: { dashId, folderId, folderTitle, dashTitle } } = res;
        if (folderId && dashId) {
          setCurIndexDashId(dashId);
          setCurIndexFolderTitle(folderTitle);
          setCurIndexDashTitle(dashTitle)
          props.loadReports(folderId, dashId, false)
        }
      }
    }).catch(err => {
      console.log('err', err)
    })
  }, [])
  /* popular folders */
  const initialPopFolders: IList[] = [];
  const [popFolders, setPopFolders] = useState(initialPopFolders);
  const mounted = useRef(false);
  useEffect(() => {
    const { folders } = props;
    if (!mounted.current) {
      // do componentDidMount logic
      props.loadFolders();
      mounted.current = true;
    } else {
      // do componentDidUpdate logic
      console.log('reset======>>>')
      let ids = !isEmpty(localStorage.getItem('popFolders')) ? JSON.parse(localStorage.getItem('popFolders')!) : [];
      let newData: any = [];
      ids.forEach((id: any) => {
        const target = folders.find(f => f.id == id);
        if (!isEmpty(target)) {
          newData.push(target)
        }
      })
      if (newData.length < 4) {
        const newIds = newData.map((d: any) => d.id);
        newData = newData.concat(folders.filter(f => !newIds.includes(f.id)));
        newData = newData.slice(0, 4);
      }
      console.log('newData=====>>>', newData)
      setPopFolders(newData);
    }
  }, [props.folders]);
  const handleSeeAllFolders = () => {
    push('/folders');
  }


  return (<div>
    <div className={styles["dash-box"]}>
      <p>Dashboard in the index page: {curIndexFolderTitle} / {curIndexDashTitle}</p>
      <div className={styles["index-dashboard"]}>
        {curIndexDashId ? <Card style={{ width: '100%', height: '100%' }}>
          <GridLayout disabled></GridLayout>
        </Card> :
          <div>No dashboard has been set as index page yet.</div>
        }
      </div>
    </div>
    <div className={styles["folders-box"]}>
      <p>Popular Chart Folders</p>
      <div className={styles["popular-folders"]}>
        <div className={styles['seeAll-btn']}>
          <Button onClick={handleSeeAllFolders} type="primary">
            <Link to={'/folders'} replace={true}>See All</Link>
          </Button></div>
        <List list={popFolders} onOpen={props.loadDashboards} type={'folder'} />
      </div>
    </div>
  </div>)
}
const mapStateToProps = (states: IRootState) => {
  return {
    folders: states.folders.entity
  }
}
const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
  return {
    loadFolders: () => dispatch(loadFoldersLogic()),
    loadDashboards: (id: string) => dispatch(loadDashboardsLogic(id)),
    loadReports: (folderId: string | number, dashId: string, isPush: boolean) => dispatch(loadReportsLogic(folderId, dashId, isPush)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);