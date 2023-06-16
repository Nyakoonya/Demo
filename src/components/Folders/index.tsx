import styles from './styles.scss'

interface IfolderList {
    title: string,
    id: number,
    img: string
}
interface Iprops {
    list: IfolderList[]
}
function Folders(props: Iprops) {
    const { list } = props
    return (
        <div className={styles['folders-wrap']}>
            {list.map((item, i) => (
                <div className={styles['folder-card']} key={item.id}>
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

export default Folders