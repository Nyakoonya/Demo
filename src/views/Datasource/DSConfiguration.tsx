import Upload from "@/components/Upload";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface IProp {
  type: string,
  category: string
}
interface IRef {
  onAddDatasource: (type: string) => any
}
function DSConfiguration(props: IProp, ref: React.Ref<IRef>) {
  const { type, category } = props;
  let renderContent = null;
  const uploadRef = useRef<any>(null);
  useImperativeHandle(ref, () => {
    return {
      onAddDatasource(type: string) {
        console.log('add ds------>>>')
        let data = null;
        if (type === 'excel') {
          data = uploadRef.current && uploadRef.current.data();
        }
        return data;
      }
    }
  })
  switch (category) {
    case 'upload':
      renderContent = (<Upload ref={uploadRef} />)
      break;
    default:
      break;
  }
  return renderContent;
}
export default forwardRef(DSConfiguration);