const dataHandler = (content: any, dataSetting: any) => {
  console.log("content", content);
  console.log("dataSetting", dataSetting);
  const { dimensions, measures, data = [] } = dataSetting;
  // 3 measure
  const series = data
  return {
    series,
  };
};

export default dataHandler;
