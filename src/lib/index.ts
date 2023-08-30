import bar from "./echarts/bar";
const { paint, ...barArgs } = bar;
interface IComponents {
  [propName: string]: any[]
}
export const components: IComponents = {
  echarts: [barArgs],
};
export const others = {
  bar: barArgs
}
