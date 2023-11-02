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
  const centerLongitude = (Number(max(longtitudes)) + Number(min(longtitudes))) / 2;
  const centerLatitude = (Number(max(latitudes)) + Number(min(latitudes))) / 2;
  const center = [centerLongitude, centerLatitude];
  console.log('center--->>>', center)
  return {
    series,
    center,
  };
};

export default dataHandler;
