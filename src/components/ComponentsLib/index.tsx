import { ReactNode, useEffect, useRef, useState } from "react";
import { Button, Divider, Form, InputNumber, Select } from 'antd';
import { components, others } from '../../lib/index';
import FeildSelection, { IDimension } from "../FeildSelection";
import { IRootState } from "@/redux/Store";
import { Action, Dispatch } from "redux";
import { connect, useSelector } from "react-redux";
import { loadReportLogic } from "@/redux/actionCreators/entities/reports/logic";
import { useParams } from "react-router";
import { IReport } from "@/redux/reducers/ReportReducer";

const FormItem = Form.Item;
interface IProp {
  limit: number,
  datasourceFieldsList: IDimension[],
  loadReport: (payload: any) => void,
  activeReport: IReport | null,
  reports: IReport[]
}
function ComLib(props: IProp): ReactNode {
  const dimensionRef = useRef<any>(null);
  const measureRef = useRef<any>(null);
  const { dashId } = useParams();
  const [limit, setLimit] = useState(props.limit || 10);
  const [dimLimit, setDimLimit] = useState(Infinity);
  const [meaLimit, setMeaLimit] = useState(Infinity);
  const [dataSettingVisibility, setVisibility] = useState(false);
  const [curChartType, setChartType] = useState('');
  const [curChartCategory, setChartCategory] = useState('')
  const activeReport = useSelector((state: IRootState) => state.constant.activeReport)
  const [defaultCompType, setDefaultComType] = useState(props.activeReport && props.activeReport.type);
  const [defaultDimensions, setDefaultDimenisons] = useState(props.activeReport ? props.activeReport.dataSetting.dimensions : []);
  const [defaultMeasures, setDefaultMeasures] = useState(props.activeReport ? props.activeReport.dataSetting.measures : []);

  useEffect(() => {
    const activeReportItem = activeReport ? props.reports.find(r => r.id === activeReport) : null

    if (activeReportItem) {
      setLimit(activeReportItem.limit)
    }
    setDefaultComType(activeReportItem ? `${activeReportItem.category}-${activeReportItem.type}` : '')
    handleSelectCompType(activeReportItem ? `${activeReportItem.category}-${activeReportItem.type}` : '')
    setDefaultDimenisons(activeReportItem ? activeReportItem.dataSetting.dimensions : []);
    setDefaultMeasures(activeReportItem ? activeReportItem.dataSetting.measures : []);

  }, [activeReport])

  const compTypes = Object.keys(components).map((k) => ({
    label: k,
    options: components[k].map(item => ({
      label: item.label,
      value: `${item.category}-${item.label}`
    })),
  }))


  const handleSelectCompType = (value: string) => {
    console.log('value', value)
    if (value) {
      const category = value.split('-')[0]
      const type = value.split('-')[1]
      setChartType(type)
      setChartCategory(category);
      const obj = (others as any)[type];
      setDefaultComType(value)
      setDimLimit(obj.dimensionLimit)
      setMeaLimit(obj.measureLimit)
    } else {
    }

  }
  const handleDone = () => {
    const dimensions = dimensionRef.current && dimensionRef.current.onPropsChange();
    const measures = measureRef.current && measureRef.current.onPropsChange();
    const dataSetting = {
      dimensions: dimensions.map((d: any) => ({
        fieldName: d.columnName,
        datasourceId: d.dataSourceId,
        datasourceName: d.title
      })),
      measures: measures.map((m: any) => ({
        fieldName: m.columnName,
        datasourceId: m.dataSourceId,
        datasourceName: m.title
      })),
    }
    // redux logic
    props.loadReport({
      dashId,
      category: curChartCategory,
      type: curChartType,
      dataSetting,
      limit
    })
  }
  const handleChangeLimit = (value: number | null) => {
    if (value)
      setLimit(value);
  }

  return (
    <div>
      <Form layout="vertical" >
        <FormItem label="Component Type">
          <Select
            value={defaultCompType}
            onChange={handleSelectCompType}
            options={compTypes}
            allowClear={true}
          ></Select>
        </FormItem>
        <Divider>Data Settings</Divider>
        {defaultCompType && (<><FormItem label="Dimensions">
          <FeildSelection list={props.datasourceFieldsList} selectedFields={defaultDimensions} ref={dimensionRef} label='Add a dimension' limit={dimLimit} />
        </FormItem><FormItem label="Measures">
            <FeildSelection list={props.datasourceFieldsList} selectedFields={defaultMeasures} ref={measureRef} label='Add a measure' limit={meaLimit} />
          </FormItem><FormItem label="Limit">
            <InputNumber min={1} max={20000} defaultValue={limit} onChange={handleChangeLimit}></InputNumber>
          </FormItem>
          <Button type="primary" onClick={handleDone}>Done</Button></>)}
      </Form>
    </div>
  )
}
const mapStateToProps = (state: IRootState) => {
  const { reports, constant } = state
  return {
    reports: reports.entity,
    activeReport: constant.activeReport ? reports.entity.find(r => r.id === constant.activeReport)! : null
  }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    loadReport: (payload: any) => dispatch(loadReportLogic(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ComLib);