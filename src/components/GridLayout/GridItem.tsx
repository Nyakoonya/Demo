// render different reports by settings
import { Layout } from "react-grid-layout";
import styles from './GridItem.scss'
interface IProps {
    widget: Layout
}
function GridItem(props: IProps) {
    return (
        <div className={styles["item-wrap"]}>GRIDITEM</div>
    )
}

export default GridItem;