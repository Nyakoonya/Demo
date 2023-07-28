const optionHandler = (content: any, data: any) => {
  const { xAxis, yAxis, series, legend } = data;
  const option = {
    legend,
    tooltip: {
      trigger: "axis",
      axisPointer: "shadow",
    },
    grid: {
      left: "10%",
      bottom: "10%",
    },
    xAxis,
    yAxis,
    series: series.map((s: any) => ({
      type: "bar",
      ...s,
    })),
  };
  return option;
};

export default optionHandler;
