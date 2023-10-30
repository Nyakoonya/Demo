import bar from './bar'
import heatMap from './heatMap'
interface IPaint {
  [propName: string]: any
}
const paint: IPaint = {
  bar: bar.paint,
  heatMap: heatMap.paint
}

export default paint;