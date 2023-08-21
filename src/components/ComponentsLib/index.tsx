import { ReactNode, useRef, useState } from "react";
import { Button, Divider, Form, InputNumber, Select } from 'antd';
import { components } from '../../lib/index';
import FeildSelection, { IDimension } from "../FeildSelection";

const FormItem = Form.Item;
interface IProp {
  limit: number,
  datasourceList: IDimension[]
}
function ComLib(props: IProp): ReactNode {
  const dimensionRef = useRef<any>(null);
  const measureRef = useRef<any>(null);
  const [limit, setLimit] = useState(props.limit || 10);
  const compTypes = Object.keys(components).map((k) => ({
    label: k,
    options: components[k].map(item => ({
      label: item.label,
      value: item.label
    }))
  }))

  const handleSelectCompType = (value: string) => {
    console.log('value', value)
  }
  const handleDone = () => {
    const dimensions = dimensionRef.current && dimensionRef.current.onPropsChange();
    const measures = measureRef.current && measureRef.current.onPropsChange();
    console.log('dimensions', dimensions);
    console.log('measures', measures)
    console.log('limit', limit);
  }
  const handleChangeLimit = (value: number | null) => {
    if (value)
      setLimit(value);
    // dispatch
  }

  return (
    <div>
      <Form layout="vertical" >
        <FormItem label="Component Type">
          <Select
            defaultValue={null}
            onChange={handleSelectCompType}
            options={compTypes}
          ></Select>
        </FormItem>
        <Divider>Data Settings</Divider>
        <FormItem label="Dimensions">
          <FeildSelection datasourceList={[]} selectedFields={[]} ref={dimensionRef} label='Add a dimension' />
        </FormItem>
        <FormItem label="Measures">
          <FeildSelection datasourceList={[]} selectedFields={[]} ref={measureRef} label='Add a measure' />
        </FormItem>
        <FormItem label="Limit">
          <InputNumber min={1} max={20000} defaultValue={limit} onChange={handleChangeLimit}></InputNumber>
        </FormItem>
      </Form>
      <Button type="primary" onClick={handleDone}>Done</Button>
    </div>
  )
}

export default ComLib;