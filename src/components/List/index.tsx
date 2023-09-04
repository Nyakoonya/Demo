import styles from './styles.scss'
import folderImg from '@/assets/images/folder.png';
import dashImg from '@/assets/images/dash.png';
import dsImg from '@/assets/images/datsource.png'
import { Dropdown, Space } from 'antd';
import { MoreOutlined } from '@ant-design/icons/lib/icons';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { updateFolderLogic } from '@/redux/actionCreators/entities/folder/logic';
import { useState } from 'react';
import { IRootState } from '@/redux/Store';
export interface IList {
  title: string,
  id: string,
  img: string,
  [propName: string]: any
}
type IOpenFunc = (id: string) => void
interface Iprops {
  list: IList[],
  onOpen: IOpenFunc,
  type: string,
  updateFolder: (payload: any) => void
}
function List(props: Iprops) {
  const { list, onOpen, type } = props
  const [curId, setCurId] = useState('');
  const img: any = {
    folder: folderImg,
    dash: dashImg,
    ds: dsImg
  }
  const editLogic: any = {
    folder: props.updateFolder
  }

  const handleEdit = () => {
    console.log('type', type);
    console.log('curId', curId);

    editLogic[type]()
  }

  const handleDelete = () => {

  }
  const items = [
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
  return (
    <div className={styles['folders-wrap']}>
      {list.map((item, i) => (
        <div className={styles['folder-card']} key={item.id}>
          <div className={styles['folder-img']} onClick={() => {
            setCurId(item.id)
            onOpen(item.id)
          }}>
            <img src={item.img || img[type]} ></img>
          </div>
          <div className={styles['folder-desc']}>
            <div className={styles['folder-title']}>{item.title}</div>
            <div className={styles['folder-operation']}>
              <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <MoreOutlined style={{ fontSize: '20px' }} />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
const mapStateToProps = (state: IRootState) => {

}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    updateFolder: (payload: any) => dispatch(updateFolderLogic(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)