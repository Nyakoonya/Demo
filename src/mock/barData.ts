import { sid } from "@/utils/common";

const id = sid();
const content = {
  layout: {
    x: (0 * 4.5) % 12,
    y: Infinity, // puts it at the bottom
    w: 4,
    h: 3,
    i: id,
  },
  style: {},
  options: {},
};
const dataSetting = {
  dimensions: [
    {
      fieldName: "WeekName",
      dataSource: "abc",
      index: 0
    },
  ],
  measures: [
    {
      fieldName: "Value",
      dataSource: "abc",
      index: 1
    },
  ],
  data: [
    ["Mon", 120],
    ["Tue", 200],
    ["Wed", 150],
    ["Thu", 80],
    ["Fri", 70],
    ["Sat", 110],
    ["Sun", 130],
  ],
};

const bar = {
    id,
    name: 'testBar',
    category: 'echarts',
    type: 'bar',
    content,
    dataSetting
}
export {
    bar
} 
