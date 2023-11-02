import { isEmpty, max, maxBy } from "lodash";

const optionHandler = (content: any, data: any, echartsInstance: any) => {
  const { xAxis, yAxis, series, legend } = data;
  const xAxisModel = echartsInstance && echartsInstance.getModel() && echartsInstance.getModel().getComponent('xAxis');
  console.log('xAxisOptions-------->>>', xAxisModel)
  console.log('xAxis', xAxis)
  let letterMaxLength = 0
  if (xAxisModel) {
    const { axis: { _extent } } = xAxisModel;
    letterMaxLength = !isEmpty(xAxis.data) ? Math.floor((_extent[1] / xAxis.data.length) / 10) : 0;
  }
  const xDataLength = !isEmpty(xAxis.data) ? xAxis.data.map((d: any) => d && d.toString().length) : 0;
  const maxDataLength: number = max(xDataLength) || 0;
  console.log('letterMaxLength', letterMaxLength)
  console.log('maxDataLength', maxDataLength)
  const option = {
    legend,
    tooltip: {
      trigger: "axis",
      axisPointer: "shadow",
    },
    grid: {
      left: "10%",
      bottom: "10%",
    },
    xAxis: {
      ...xAxis,
      axisLabel: {
        interval: 0,
        rotate: maxDataLength > letterMaxLength ? -20 : 0
      }
    },
    yAxis,
    series: series.map((s: any) => ({
      type: "bar",
      ...s,
    })),
  };
  return option;
};

export default optionHandler;
