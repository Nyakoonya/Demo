import 'echarts-extension-gmap';
const optionHandler = (content: any, data: any) => {
  const { series } = data;
  const points = series.map((s: any) => s.concat([1]))
  const option = {
    gmap: {
      center: [10.7389, 59.9133],
      zoom: 14,
      renderOnMoving: true,
      echartsLayerZIndex: 2019,
      roam: true
    },
    animation: false,
    visualMap: {
      show: false,
      top: 'top',
      min: 0,
      max: 5,
      seriesIndex: 0,
      calculable: true,
      inRange: {
        color: ['blue', 'blue', 'green', 'yellow', 'red']
      }
    },
    series: [{
      type: "heatmap",
      coordinateSystem: 'gmap',
      data: points,
      pointSize: 10,
      blurSize: 1
    }],
  };
  console.log('option--->final', option)
  return option;
};

export default optionHandler;
