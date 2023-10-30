import { EChartsOption } from "echarts";
import paint from './paint';

const optionHandler = (option: any, echartsInstance: any): EChartsOption => {
  const { type, content, dataSetting } = option;
  const chartPaint = paint[type];
  return chartPaint(content, dataSetting)
}


export {
  optionHandler
}