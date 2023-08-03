import { ReactNode } from "react";
import { Button, Divider, Form, Select } from 'antd';
import { components } from '../../lib/index';
import { groupBy } from "lodash";
const FormItem = Form.Item;

function ComLib(): ReactNode {
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

    return (
        <div>
            <FormItem label="Component Type">
                <Select
                    defaultValue={null}
                    onChange={handleSelectCompType}
                    options={compTypes}
                ></Select>
            </FormItem>
            <Divider>Data Settings</Divider>
            <FormItem label="Dimensions">
                +
            </FormItem>
            <FormItem label="Measures">
                +
            </FormItem>
            <Button type="primary">Confirm</Button>
        </div>
    )
}

export default ComLib;