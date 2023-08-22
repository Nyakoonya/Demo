import styles from './styles.scss'
import folderImg from '@/assets/images/folder.png';
import dashImg from '@/assets/images/dash.png'
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
  imgType: string
}
function List(props: Iprops) {
  const { list, onOpen, imgType } = props
  const img: any = {
    folderImg: folderImg,
    dashImg: dashImg,
    dsImg: ''
  }
  return (
    <div className={styles['folders-wrap']}>
      {list.map((item, i) => (
        <div className={styles['folder-card']} key={item.id} onClick={() => onOpen(item.id)}>
          <div className={styles['folder-img']}>
            <img src={item.img || img[imgType]} ></img>
          </div>
          <div className={styles['folder-desc']}>
            <div className={styles['folder-title']}>{item.title}</div>
            <div className={styles['folder-operation']}>...</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List