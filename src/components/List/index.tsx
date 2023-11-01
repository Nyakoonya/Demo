import styles from './styles.scss'
import folderImg from '@/assets/images/folder.png';
import dashImg from '@/assets/images/dash.png';
import dsImg from '@/assets/images/datsource.png'
import { Dropdown, Input, Modal, Space } from 'antd';
import { ExclamationCircleFilled, ExclamationCircleTwoTone, MoreOutlined } from '@ant-design/icons/lib/icons';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loadFoldersLogic, updateFolderLogic } from '@/redux/actionCreators/entities/folder/logic';
import { useCallback, useState } from 'react';
import { IRootState } from '@/redux/Store';
import EditModal from './EditModal';
import { deleteFolder } from '@/service/modules/folders';
import { deleteDashboard, setIndexPageDash } from '@/service/modules/dashboard';
import { deleteDatasource } from '@/service/modules/datasource';
import { MyThunkDispatch } from '@/redux/typing';
import { loadDashboardsLogic } from '@/redux/actionCreators/entities/dashboard/logic';
import { loadDatasourcesLogic } from '@/redux/actionCreators/entities/datasource/logic';
import { message } from '../Common/EscapeAntd';
const { confirm } = Modal;
export interface IList {
  title: string,
  id: string,
  img: string,
  [propName: string]: any
}
type IOpenFunc = (id: string) => void
interface Iprops {
  list: IList[],
  onOpen?: IOpenFunc,
  type: string,
  loadFolders: () => void,
  loadDashs: (id: string) => void,
  loadDatasources: (id: string) => void
}
function List(props: Iprops) {
  const { list, onOpen, type } = props
  const [curId, setCurId] = useState('');
  const initialItem: any = {};
  const [curItem, setCurItem] = useState(initialItem)
  const [showModal, setShowModal] = useState(false);
  const img: any = {
    folder: folderImg,
    dash: dashImg,
    ds: dsImg
  }
  const deletApi: any = {
    folder: deleteFolder,
    dash: deleteDashboard,
    ds: deleteDatasource
  }
  const loadLogic: any = {
    folder: props.loadFolders,
    dash: props.loadDashs,
    ds: props.loadDatasources
  }

  const handleEdit = () => {
    console.log('type', type);
    console.log('curId', curId);
    const curItem = list.find(l => l.id === curId)!
    setCurItem(curItem);
    setShowModal(true);
  }


  const handleDelete = () => {
    const curItem = list.find(l => l.id === curId)!
    setCurItem(curItem);
    confirm({
      title: `Are you sure to delete this ${props.type}?`,
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deletApi[props.type](curId).then(() => {
          if (props.type !== 'folder') {
            loadLogic[props.type](curItem.folderId)
          } else {
            loadLogic[props.type]()
          }
        })
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const handleSetIndexPage = () => {
    const curItem = list.find(l => l.id === curId)!
    setCurItem(curItem);
    confirm({
      title: `You want to set [${curItem.title}] as index page?`,
      icon: <ExclamationCircleTwoTone />,
      okText: 'Yes',
      okType: 'primary',
      cancelText: 'No',
      onOk() {
        setIndexPageDash(curId).then((res) => {
          const { code, msg } = res;
          if (code === 0) {
            message.success(msg)
          } else {
            message.error(msg)
          }
        }).catch((err) => {
          message.error(err.message)
        })
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  let items = [
    {
      key: '1',
      label: (<p onClick={handleEdit}>
        Edit
      </p>)
    },
    {
      key: '2',
      label: (<p onClick={handleDelete}>
        Delete
      </p>)
    }
  ];
  if (props.type == 'dash') {
    items.unshift({
      key: '0',
      label: (<p onClick={handleSetIndexPage}>
        Set as index page
      </p>)
    })
  }

  const changeVisibility = () => {
    setShowModal((showModal) => !showModal);
    setCurId('');
    setCurItem('');
  }

  return (
    <div className={styles['folders-wrap']}>
      {list.map((item, i) => (
        <div className={styles['folder-card']} key={item.id}>
          <div className={styles['folder-img']} onClick={() => {
            setCurId(item.id)
            onOpen && onOpen(item.id)
          }}>
            <img src={item.img || img[type]} ></img>
          </div>
          <div style={{}}>
            <div className={styles['folder-descWrap']}>
              <div className={styles['folder-title']}>{item.title}</div>
              <div className={styles['folder-operation']}>
                <Dropdown menu={{ items }} trigger={['click']}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <MoreOutlined style={{ fontSize: '20px' }} onClick={() => { setCurId(item.id) }} />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
            <div className={styles['folder-description']}>{item.description}</div>
          </div>
        </div>
      ))}
      {showModal && <EditModal type={props.type} item={curItem} changeVisibility={changeVisibility} />}
    </div>
  )
}
const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
  return {
    loadFolders: () => dispatch(loadFoldersLogic()),
    loadDashs: (id: string) => dispatch(loadDashboardsLogic(id)),
    loadDatasources: (id: string) => dispatch(loadDatasourcesLogic(id))
  }
}

export default connect(null, mapDispatchToProps)(List)