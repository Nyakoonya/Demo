// render different reports by settings
import styles from './GridItem.scss'
import { IReport } from "@/redux/reducers/ReportReducer";
import Echarts from '../Echarts';
import { ReactElement, forwardRef, useImperativeHandle, useRef } from 'react';
import { isEmpty, get as _get } from 'lodash';
import ErrorBoundry from '../ErrorBoundry';
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
  const reportData = _get(gridItem, ['dataSetting', 'data']);
  console.log('reportData', reportData)
  if (!isEmpty(reportData) || !gridItem || !gridItem.dataSetting) {
    return (
      <div className={styles["item-wrap"]}>
        <div className={styles['item-title']}>{gridItem.title}</div>
        {props.gridItem.category === 'echarts' ? (<Echarts id={`echarts-${gridItem.id}`} item={gridItem} style={{ height: 'calc(100% - 30px)', position: 'relative' }} ref={echartsRef} />) : null}
        {props.gridItem.category === 'table' ? (<div>table</div>) : null}
        {!props.gridItem.category && <div>unknown</div>}
      </div>
    )
  } else {
    return (
      <ErrorBoundry />
    )
  }
}

export default forwardRef(GridItem);