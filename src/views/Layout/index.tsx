import { Fragment } from "react"
import styles from './styles.scss'
interface Iprops {
    children: any
}
function Layout(props: Iprops) {
    return (
        <div>
            <header>
                <div className={styles['header-wrap']}>
                    <div className={styles['header-left']}>
                        <div className={styles['logo-box']}>
                            {/* <img src='' /> */}
                            <h2>LOGO</h2>
                        </div>
                    </div>
                    <div className={styles['header-right']}>
                        <div className={styles['avator-box']}>
                            {/* <img src='' /> */}
                            User
                        </div>
                        <div className={styles['menu-button-box']}>
                            <button>Menu</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles['content']}>
                <Fragment>{props.children}</Fragment>
            </div>
            <footer>
                <div className={styles['footer']}>Footer Content.</div>
            </footer>
        </div>
    )
}
export default Layout