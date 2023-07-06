import { IWidget } from ".";
import styles from './GridItem.scss'
interface IProps {
    widget: IWidget
}
function GridItem(props: IProps) {
    return (
        <div className={styles["item-wrap"]}>GRIDITEM</div>
    )
}

export default GridItem;