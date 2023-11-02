import { Modal as AntdModal, Button } from "antd";
import { ReactNode, forwardRef, useImperativeHandle, useState } from "react";
import innerDownload from "@/utils/innerDownload";
interface IProp {
  title: string,
  btnLabel: string,
  width?: number,
  children: ReactNode,
  onOk?: () => void;
  onCancel?: () => void;
  footer?: null;
  extraBtn?: boolean
}
interface RefInstance {
  close: () => void
}
function Modal(props: IProp, ref: React.Ref<RefInstance>) {
  const [status, setStatus] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      close() {
        setStatus(false)
      }
    }
  })

  const onOpen = () => {
    setStatus(true);
  }
  const handleOk = () => {
    props.onOk && props.onOk();
    setStatus(false);
  };
  const handleCancel = () => {
    props.onCancel && props.onCancel();
    setStatus(false);
  };
  const handleDownload = () => {
    innerDownload("/static/Data uploading template.zip", "Data uploading template.zip");
  }
  return (
    <div>
      <div style={{ display: 'inline-block', textAlign: 'right', width: '100%', padding: '10px', boxSizing: 'border-box' }}>
        {props.extraBtn && <Button onClick={handleDownload} style={{ marginRight: '40px' }}>Download a template</Button>}
        <Button type="primary" onClick={onOpen} style={{ marginRight: '40px' }}>{props.btnLabel}</Button>
      </div>
      <AntdModal title={props.title} open={status} onOk={handleOk} onCancel={handleCancel} width={props.width} footer={props.footer} >
        {props.children}
      </AntdModal>
    </div>
  )
}
export default forwardRef(Modal);