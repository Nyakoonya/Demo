import { Button, Select } from "antd";
import { PlusOutlined } from '@ant-design/icons'
export interface IDimension {
  fieldName: string,
  datasourceName: string,
  [propName: string]: any
}
interface IProp {
  datasourceList: IDimension[]
}
function DimensionSelect(props: IProp) {
  const handleAddDim = () => {

  }
  const selectedDims: IDimension[] = [];
  const dimensions = props.datasourceList.map(d => ({ label: `${d.datasourceName}.${d.fieldName}`, value: `${d.datasourceName}.${d.fieldName}` }))
  return (
    <div>
      {selectedDims.map(d => (
        <Select options={dimensions}></Select>
      ))}
      <Button
        type="dashed"
        onClick={handleAddDim}
        style={{ width: '60%', marginTop: '20px' }}
        icon={<PlusOutlined />}
      >
        Add a dimension
      </Button>
    </div>

  )
}

export default DimensionSelect;