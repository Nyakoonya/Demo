import avator from '@/assets/images/avator.jpeg'
import styles from './styles.scss'
import { GithubOutlined, LinkedinFilled, MailOutlined, MobileFilled } from '@ant-design/icons';
const IntroPage = () => {
  return (
    <div>
      <div className={styles["avatar-wrap"]}>
        <div className={styles["avator"]}>
          <img src={avator} alt="" />
        </div>
      </div>
      <div className={styles["brief"]}>
        <p className={styles['name']}><i>Yuwei Tong</i></p>
        <p><i>{`Front-end Engineer`}</i></p>
        <p><i>{`Being a Fullstack Developer  &  Open To Work`}</i></p>
        <p className={styles['summary']}>Hi! Welcome to my project! I'm Yuwei, a passionate software developer! This project is designed and developed by me alone. You can download the manual of my project from the <b>Header</b> area. Please contact me when you have any question here!</p>
      </div>
      <div className={styles["contacts"]}>
        <h3>Contact Me</h3>
        <div className={styles["list"]}>
          <div className={styles["icons"]}>
            <div className={styles["icons-item"]}><LinkedinFilled style={{ color: '#0a66c2', fontSize: '2rem' }} /></div>
            <div className={styles["icons-item"]}><GithubOutlined style={{ color: '#000', fontSize: '2rem' }} /></div>
            <div className={styles["icons-item"]}><MailOutlined style={{ color: '#d85941', fontSize: '2rem' }} /></div>
            <div className={styles["icons-item"]}><MobileFilled style={{ color: '#000', fontSize: '2rem' }} /></div>
          </div>
          <div className={styles["links"]}>
            <div className={styles["links-item"]}><a href='https://www.linkedin.com/in/yuwei-tong-26525424b/'>LinkedIn</a></div>
            <div className={styles["links-item"]}><a href='https://github.com/Nyakoonya'>GitHub</a></div>
            <div className={styles["links-item"]}><a>assafare2@gmail.com</a></div>
            <div className={styles["links-item"]}><a>+4791009117</a></div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default IntroPage;