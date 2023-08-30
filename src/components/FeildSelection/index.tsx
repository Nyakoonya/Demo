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
  list: IDimension[],
  selectedFields: IDimension[],
  label: string,
  limit: number,
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
        console.log('fieldItems', fieldItems)
        const result = fieldItems.map(f => (props.list.find(d => `${d.dataSourceId}.${d.columnName}` === f.value)));
        console.log('result', result);
        return result;
      }
    }
  })
  const options = props.list.map(d => ({ label: `${d.title}.${d.columnName}`, value: `${d.dataSourceId}.${d.columnName}` }))

  const [selectedFields, setSelectedField] = useState(props.selectedFields);
  const [fieldItems, setFieldItems] = useState<IFeildItem[]>([]);
  useEffect(() => {
    const initialFieldItems = selectedFields.map(s => {
      const id = nanoid(5);
      return {
        id,
        content: <Item key={id} options={options} id={id} onRemove={handleRemoveItem} onChange={handleChangeFeildSelection} feildItem={s} />,
        value: `${s.datasourceId}.${s.fieldName}`
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
    setFieldItems((fieldItems) => {
      console.log('fieldItems====>>>>', fieldItems)
      console.log('value===>>>', value)
      return fieldItems.map(f => {
        if (f.id === id) {
          f.value = value
        }
        return f
      })
    })
  }, [])
  return (
    <div>
      {fieldItems.map(f => f.content)}
      {props.limit > fieldItems.length && <Button
        type="dashed"
        onClick={handleAddItem}
        style={{ width: '60%', marginTop: '20px' }}
        icon={<PlusOutlined />}
      >
        {props.label}
      </Button>}
    </div>

  )
}

export default forwardRef(FeildSelection);