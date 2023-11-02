import avator from '@/assets/images/avator.jpeg'
import styles from './styles.scss'
const IntroPage = () => {
  return (
    <div>
      <div className={styles["avatar-wrap"]}>
        <div className={styles["avator"]}>
          <img src={avator} alt="" />
        </div>
      </div>

      <div className={styles["brief"]}></div>
      <div className={styles["links"]}></div>
    </div>
  )
}

export default IntroPage;