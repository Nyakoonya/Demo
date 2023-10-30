import { InfoCircleOutlined } from "@ant-design/icons";
import { measureTips, dimesionTips } from './tips';
interface IProp {
  reportType: string,
  tipType: string
}
const OtherTips = (props: IProp) => {
  const mtip = measureTips[props.reportType];
  const dtip = dimesionTips[props.reportType];
  return (
    <div style={{ marginBottom: '5px' }}>
      {props.tipType == 'measure' && mtip &&
        <>
          <InfoCircleOutlined style={{ color: 'green' }} />
          <span style={{ marginLeft: '5px' }}>{mtip}</span>
        </>}
      {props.tipType == 'dimension' && dtip && <><InfoCircleOutlined style={{ color: 'green' }} />
        <span style={{ marginLeft: '5px' }}>{dtip}</span></>}
    </div>
  )
}
export default OtherTips;