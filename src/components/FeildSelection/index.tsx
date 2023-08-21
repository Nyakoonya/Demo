import { Button, Select } from "antd";
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { ReactNode, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from "react";
import styles from './styles.scss'
import Item from "./Item";
import { nanoid } from "nanoid";
export interface IDimension {
  id: string,
  fieldName: string,
  datasourceName: string,
  datasourceId: string,
  [propName: string]: any
}
interface IProp {
  datasourceList: IDimension[],
  selectedFields: IDimension[],
  label: string
}
interface IRefInstance {
  onPropsChange: () => any[]
}
interface IFeildItem {
  content: ReactNode,
  id: string,
  value: string | null
}
function FeildSelection(props: IProp, ref: React.Ref<IRefInstance>) {
  useImperativeHandle(ref, () => {
    return {
      onPropsChange() {
        const result = fieldItems.map(f => (props.datasourceList.find(d => d.id === f.value)));
        console.log('result', result);
        return result;
      }
    }
  })
  const options = props.datasourceList.map(d => ({ label: `${d.datasourceName}.${d.fieldName}`, value: d.id }))

  const [selectedFields, setSelectedField] = useState(props.selectedFields);
  const [fieldItems, setFieldItems] = useState<IFeildItem[]>([]);
  useEffect(() => {
    const initialFieldItems = selectedFields.map(s => {
      const id = nanoid(5);
      return {
        id,
        content: <Item key={id} options={options} id={id} onRemove={handleRemoveItem} onChange={handleChangeFeildSelection} feildItem={s} />,
        value: s.id
      }
    })
    setFieldItems(initialFieldItems);
  }, [selectedFields]);
  const handleAddItem = () => {
    const id = nanoid(5);
    console.log('add id', id)
    const emptyItem = {
      content: <Item key={id} options={options} id={id} onRemove={handleRemoveItem} onChange={handleChangeFeildSelection} feildItem={null} />,
      id,
      value: null
    }
    setFieldItems((fieldItems) => [...fieldItems, emptyItem])
  }
  const handleRemoveItem = useCallback((id: string, feildItem: IDimension | null) => {
    console.log('remove id', id)
    setFieldItems((fieldItems) => fieldItems.filter(f => f.id !== id));
    // if (feildItem) {
    //   setSelectedField((selectedFields) => selectedFields.filter(s => s.id === feildItem.id))
    // }
  }, [])
  const handleChangeFeildSelection = useCallback((id: string, value: string) => {
    const newFieldItems = fieldItems.map(f => {
      if (f.id === id) {
        f.value = value
      }
      return f
    })
    setFieldItems(newFieldItems)
  }, [])
  return (
    <div>
      {fieldItems.map(f => f.content)}
      <Button
        type="dashed"
        onClick={handleAddItem}
        style={{ width: '60%', marginTop: '20px' }}
        icon={<PlusOutlined />}
      >
        {props.label}
      </Button>
    </div>

  )
}

export default forwardRef(FeildSelection);