 import bar from './bar'
 interface IPaint {
    [propName: string]: any
 }
 const paint: IPaint = {
    bar: bar.paint
 }
export default paint;