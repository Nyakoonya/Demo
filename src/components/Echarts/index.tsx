import React, {
    ReactElement,
    useLayoutEffect,
    useImperativeHandle,
    useRef,
    forwardRef,
} from 'react';
import * as echarts from 'echarts';
import { throttle } from 'lodash';
import useDidMount from '@/hooks/useDidmount';
import { optionHandler } from '@/lib/echarts';

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
    const { id, item, style = { width: '100%', height: '100%' } } = props;
    const newOption: echarts.EChartsOption = optionHandler(item);
    const instance = useRef<echarts.ECharts>();

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
            instance.current.setOption(newOption);
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
