import styles from './styles.scss'

export interface IList {
    title: string,
    id: string,
    img: string,
    [propName: string]: any
}
type IOpenFunc = (id: string) => void
interface Iprops {
    list: IList[],
    onOpen: IOpenFunc
}
function List(props: Iprops) {
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

export default List