import styles from './styles.scss'

interface IFolderList {
    title: string,
    id: number,
    img: string
}
type IOpenFunc = (id: number) => void
interface Iprops {
    list: IFolderList[],
    onOpen: IOpenFunc
}
function FoldersList(props: Iprops) {
    const { list, onOpen } = props
    return (
        <div className={styles['folders-wrap']}>
            {list.map((item, i) => (
                <div className={styles['folder-card']} key={item.id} onClick={() => onOpen(item.id)}>
                    <div className={styles['folder-img']}>
                        <img src={item.img} ></img>
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

export default FoldersList