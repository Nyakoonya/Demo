import bar from "./echarts/bar";
import heatMap from './echarts/heatMap';
const { paint: barPaint, ...barArgs } = bar;
const { paint: heatMapPaint, ...heatMapArgs } = heatMap;
interface IComponents {
  [propName: string]: any[]
}
export const components: IComponents = {
  echarts: [barArgs, heatMapArgs],
};
export const others = {
  bar: barArgs,
  heatMap: heatMapArgs
}
