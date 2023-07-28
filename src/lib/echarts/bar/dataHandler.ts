const dataHandler = (content: any, dataSetting: any) => {
  console.log("content", content);
  console.log("dataSetting", dataSetting);
  const { dimensions, measures, data } = dataSetting;
  // 1 dim 1 measure
  let xAxis;
  const xData = dimensions[0] && data.map((d: any[]) => d[dimensions[0].index]);
  xAxis = {
    type: "category",
    data: xData,
  };
  let series = [];
  let legend = {};
  series = measures.map((m: { fieldName: string; index: number }) => {
    return {
      name: m.fieldName,
      data: data.map((d: any) => d[m.index]),
    };
  });
  return {
    xAxis,
    yAxis: {
      type: "value",
    },
    legend,
    series,
  };
};

export default dataHandler;
