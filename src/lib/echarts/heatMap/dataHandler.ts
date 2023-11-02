import { max, min } from "lodash";

const dataHandler = (content: any, dataSetting: any) => {
  console.log("content", content);
  console.log("dataSetting", dataSetting);
  const { dimensions, measures, data = [] } = dataSetting;
  // 3 measure
  const series = data
  console.log('data', data)
  const longtitudes = data.map((d: any) => d[0]);
  const latitudes = data.map((d: any) => d[1]);
  const maxLongitude = Number(max(longtitudes));
  const minLongitude = Number(min(longtitudes));
  const maxLatitude = Number(max(latitudes));
  const minLatitude = Number(min(latitudes));
  const maxDeviation = Math.max(maxLongitude-minLongitude, maxLongitude-minLongitude);
  let zoomLevel = 11;
  if(maxDeviation<0.015)
  {
    zoomLevel = 17
  }else if(maxDeviation<0.02)
  {
    zoomLevel = 16
  }else if(maxDeviation<0.03)
  {
    zoomLevel = 15
  }else if(maxDeviation<0.058)
  {
    zoomLevel = 14
  }else if(maxDeviation<0.14)
  {
    zoomLevel = 13
  }else if(maxDeviation<0.47)
  {
    zoomLevel = 12
  }else if(maxDeviation<0.65)
  {
    zoomLevel = 11
  }else if(maxDeviation<1.2)
  {
    zoomLevel = 10
  }else if(maxDeviation<2.6)
  {
    zoomLevel = 9
  }else if(maxDeviation<4.8)
  {
    zoomLevel = 8
  }else if(maxDeviation<9.6)
  {
    zoomLevel = 7
  }else if(maxDeviation<20)
  {
    zoomLevel = 6
  }else if(maxDeviation<43)
  {
    zoomLevel = 5
  }else if(maxDeviation<75)
  {
    zoomLevel = 4
  }else
  {
    zoomLevel = 2
  }
  const centerLongitude = (maxLongitude + minLongitude) / 2;
  const centerLatitude = (maxLatitude + minLatitude) / 2;
  const center = [centerLongitude, centerLatitude];
  console.log('center--->>>', center)
  return {
    series,
    center,
    zoomLevel,
  };
};

export default dataHandler;
