import { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useImperativeHandle, useState, forwardRef } from 'react';
import { Upload as AntdUpload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons';

interface RefInstance {
  upload: () => void
}
interface IProp {

}
function Upload(props: IProp, ref: React.Ref<RefInstance>) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      upload() {
        handleUpload()
      }
    }
  })
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file as RcFile);
    });
    setUploading(true);
    // api
  }

  const uploadProps: UploadProps = {
    onRemove: (file) => {
      setFileList([]);
    },
    beforeUpload: (file) => {
      setFileList([file]);

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