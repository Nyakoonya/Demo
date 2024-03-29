import 'echarts-extension-gmap';
const optionHandler = (content: any, data: any) => {
  const { series, center, zoomLevel } = data;
  const option = {
    gmap: {
      center,
      zoom: zoomLevel,
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
    series: [
      {
        type: "heatmap",
        coordinateSystem: 'gmap',
        data: series,
        pointSize: 7,
        blurSize: 10
      }
    ],
  };
  console.log('option--->final', option)
  return option;
};

export default optionHandler;
