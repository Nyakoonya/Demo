import { DeleteOutlined } from "@ant-design/icons/lib/icons";
import { Select } from "antd";
import styles from './styles.scss';
import { forwardRef, useImperativeHandle, useState } from "react";
import { IDimension } from ".";
interface IProp {
  options: any[],
  id: string,
  feildItem: IDimension | null,
  onRemove: (id: string, feildItem: IDimension | null) => void,
  onChange: (id: string, value: string) => void
}
interface IRef {
  getSelectedField: () => any
}
function Item(props: IProp, ref: React.Ref<IRef>) {
  const { options } = props;
  const [selectedFeild, setSelectedFeild] = useState('');
  const defaultValue = props.feildItem && `${props.feildItem.datasourceId}.${props.feildItem.fieldName}`
  const [value, setValue] = useState(defaultValue)

  const handleSelect = (value: string) => {
    console.log('value', value);
    setValue(value);
    props.onChange(props.id, value)
  }
  const handleDelete = () => {
    console.log('props.id', props.id);
    props.onRemove(props.id, props.feildItem)
  }
  return (
    <div className={styles['item-wrap']} id={props.id}>
      <Select options={options} onChange={handleSelect} className={styles['select-item']} value={value} />
      <DeleteOutlined onClick={handleDelete} />
    </div>
  )
}

export default Item;