// render different reports by settings
import styles from './GridItem.scss'
import { IReport } from "@/redux/reducers/ReportReducer";
import Echarts from '../Echarts';
import { ReactElement, forwardRef, useImperativeHandle, useRef } from 'react';
interface IProps {
  gridItem: IReport
}
interface RefInstance {
  resize: () => void
}
function GridItem(props: IProps, ref: React.Ref<RefInstance>): ReactElement {
  const { gridItem } = props;
  const echartsRef = useRef<any>(null);
  useImperativeHandle(ref, () => {
    return {
      resize: handleResize
    }
  })
  const handleResize = () => {
    console.log('gridItem resize')
    echartsRef.current && echartsRef.current.resize()
  }
  console.log('gridItem---->grid item', gridItem)
  return (
    <div className={styles["item-wrap"]}>
      {props.gridItem.category === 'echarts' ? (<Echarts id={`echarts-${gridItem.id}`} item={gridItem} ref={echartsRef} />) : null}
      {props.gridItem.category === 'table' ? (<div>table</div>) : null}
      {!props.gridItem.category && <div>unknown</div>}
    </div>
  )
}

export default forwardRef(GridItem);