import React, {
  ReactElement,
  useLayoutEffect,
  useImperativeHandle,
  useRef,
  forwardRef,
  useEffect,
  useState,
  lazy,
} from 'react';
import * as echarts from 'echarts';
import { throttle } from 'lodash';
import useDidMount from '@/hooks/useDidmount';
import { optionHandler } from '@/lib/echarts';
// import { Loader } from "@googlemaps/js-api-loader";
// const registerMap = (echartsInstance: any) => {
//   var googleMap = echartsInstance
//     .getModel()
//     .getComponent('gmap')
//     .getGoogleMap();
//   console.log('googleMap', googleMap)
// }
interface Props {
  id: string;
  item: any;
  style?: React.CSSProperties;
}
export interface RefInstance {
  setOption: (option: echarts.EChartsOption) => void;
  resize: () => void
}

function Echarts(props: Props, ref: React.Ref<RefInstance>): ReactElement {
  const [isMapApiLoaded, setIsMapApiLoaded] = useState(false);
  const { id, item, style = { width: '100%', height: '100%' } } = props;
  const instance = useRef<echarts.ECharts>();
  const newOption = (instance: any): echarts.EChartsOption => {
    return optionHandler(item, instance)
  }

  // useEffect(() => {
  //   if (isMapApiLoaded) return;
  //   const loader = new Loader({
  //     apiKey: process.env.API_KEY!,
  //     libraries: ['places']
  //   })
  //   loader.load().then(() => setIsMapApiLoaded(true))
  // }, [isMapApiLoaded])
  useImperativeHandle(ref, () => {
    return {
      setOption(opt: echarts.EChartsOption) {
        if (instance.current) {
          instance.current.setOption(opt);
        }
      },
      resize() {
        console.log('echarts, resize')
        if (!instance) return;
        const func = throttle(() => {
          if (instance.current) {
            console.log('resize--->imm')
            instance.current.resize();
          }
        }, 300);
        func();
      }
    };
  });
  useLayoutEffect(() => {
    const el = document.getElementById(id);

    if (el) {
      instance.current = echarts.init(document.getElementById(id) as HTMLDivElement, undefined, {
        renderer: 'svg',
      });
      // if (isMapApiLoaded) {
      instance.current.setOption(newOption(instance.current));
      // if (['heatMap'].includes(item.type)) {
      //   registerMap(instance.current);
      // }
      // }
    }
  }, [id, newOption]);

  useDidMount(() => {
    const func = throttle(() => {
      if (instance.current) {
        instance.current.resize();
      }
    }, 300);

    window.addEventListener('resize', func);

    return () => {
      window.removeEventListener('resize', func);
    };
  });

  return <div id={id} style={style} />;
}

export default forwardRef(Echarts)
