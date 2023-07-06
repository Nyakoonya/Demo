import { Layout, Responsive, WidthProvider } from 'react-grid-layout'
import GridItem from './GridItem';
import './index.css'
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export interface IWidget {
    x: number,
    y: number,
    w: number,
    h: number,
    i: string
}
function GridLayout() {
    const testWidgets: IWidget[] = [
        {
            x: 3 % 12,
            y: Infinity, // puts it at the bottom
            w: 1,
            h: 2,
            i: new Date().getTime().toString(),
        }
    ];
    // const getLayouts: any = () => {
    //     return testWidgets.map(item => item.layout)
    // }

    const generateDom =  (widgets: IWidget[]) => {
        return widgets.map((item, i) => (
            <div key={item.i} data-grid={item}>
            <GridItem widget={item}/>
            {/* <div style={{width: '100%', height: '100%'}}>WIDGET</div> */}
          </div>
        ))
    }

    const onRemoveWidget = (widget: IWidget) => {

    }
    const onLayoutChange = (layouts: any) => {
        console.log('layouts--change layout', layouts)
    }

    const onBreakpointChange = (newBreakPoint: string, newCols: number) => {
        console.log('newCols--change breakpoint', newCols);
    }



    return (
        <div>
            <ResponsiveReactGridLayout
                layouts={{}}
                className='layout'
                onLayoutChange={onLayoutChange}
                onBreakpointChange={onBreakpointChange}
            >
                {generateDom(testWidgets)}
            </ResponsiveReactGridLayout></div>

    )
}

export default GridLayout;