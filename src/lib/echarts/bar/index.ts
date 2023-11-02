import dataHandler from './dataHandler';
import optionHandler from './optionHandler';
export default {
  category: 'echarts',
  label: 'bar',
  dimensionLimit: 1,
  measureLimit: 1,
  paint: (content: any, dataSetting: any, echartsInstance: any) => {
    const newData = dataHandler(content, dataSetting);
    return optionHandler(content, newData, echartsInstance);
  }
}