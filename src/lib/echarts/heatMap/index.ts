import dataHandler from './dataHandler';
import optionHandler from './optionHandler';
export default {
  category: 'echarts',
  label: 'heatMap',
  dimensionLimit: 0,
  measureLimit: 3,
  paint: (content: any, dataSetting: any) => {
    const newData = dataHandler(content, dataSetting);
    return optionHandler(content, newData);
  }
}