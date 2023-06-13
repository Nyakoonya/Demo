import { Fragment } from "react"
import styles from '.styles.scss'
interface Iprops {
    children: any
}
function Layout(props: Iprops) {
    return (
        <div>
            <div>header</div>
            <Fragment>{props.children}</Fragment>
            <div>footer</div>
        </div>
    )
}
export default Layout