import { ReactNode, useState } from "react";
import styles from './styles.scss'
import { Radio, RadioChangeEvent } from "antd";
interface IItem {
  label: string,
  key: string,
  children: ReactNode
}
interface IProp {
  items: IItem[],
  activeKey: string,
  onChangeTab: (value: string) => void
}
function Tabs(props: IProp) {
  const [activeKey, setActiveKey] = useState(props.activeKey)
  const { items } = props;
  const handleTabChange = (e: RadioChangeEvent) => {
    console.log('value', e.target.value)
    setActiveKey(e.target.value);
    props.onChangeTab(e.target.value)
  }
  return (
    <div style={{ width: '100%', height: '100%', marginTop: '20px' }}>
      <div className={styles["tabs"]}>
        <Radio.Group onChange={handleTabChange} value={activeKey} style={{ marginBottom: 8 }} optionType="button" buttonStyle="solid">
          {items.map(item => (<Radio.Button value={item.key} key={item.key} >{item.label}</Radio.Button>))}
        </Radio.Group>
      </div>
      <div className={styles['tabs-content']}>
        {items.map(item => {
          if (activeKey === item.key) {
            return <div key={item.key}>
              {item.children}
            </div>
          }
          return null
        })}
      </div>
    </div>
  )
}

export default Tabs;