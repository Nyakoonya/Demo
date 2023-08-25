import { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useImperativeHandle, useState, forwardRef } from 'react';
import { Upload as AntdUpload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons';

interface RefInstance {
  data: any
}
interface IProp {

}
function Upload(props: IProp, ref: React.Ref<RefInstance>) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  useImperativeHandle(ref, () => ({
    data: () => formData,
    uploading: () => uploading
  }))

  const uploadProps: UploadProps = {
    onRemove: (file) => {
      setFileList([]);
    },
    beforeUpload: (file) => {
      console.log('file', file)
      setFileList([file]);
      const formData = new FormData();
      formData.append('file', file as RcFile);
      console.log('formData----right', formData.get('file'))
      setFormData(formData);
      setUploading(true);
      return false;
    },
    fileList,
  };
  return (
    <AntdUpload {...uploadProps}>
      <Button icon={<UploadOutlined />}>Select File</Button>
    </AntdUpload>
  )
}
export default forwardRef(Upload);