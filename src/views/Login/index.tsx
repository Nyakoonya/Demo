import { Radio, RadioChangeEvent, Tabs } from 'antd';
import styles from './styles.scss';
import Login from './Login'

export default function () {
  const tabItems = [
    {
      id: '1',
      label: 'Login',
      key: '1',
      children: <Login />
    },
    // {
    //   id: '2',
    //   label: 'Register',
    //   key: '2',
    //   children: <div>register</div>
    // }
  ]
  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-box"]}>
        <Tabs
          defaultActiveKey="1"
          centered
          items={tabItems}
        />
      </div>
    </div >
  )
}