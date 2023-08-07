import Upload from "@/components/Upload";
import { useRef } from "react";

interface IProp {
  type: string,
  category: string
}
function DSConfiguration(props: IProp) {
  const { type, category } = props;
  let renderContent = null;
  const uploadRef = useRef<any>(null);

  switch (category) {
    case 'upload':
      renderContent = (<Upload ref={uploadRef} />)
      break;
    default:
      break;
  }
  return renderContent;
}
export default DSConfiguration;