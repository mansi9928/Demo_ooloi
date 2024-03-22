import EChartsReact from "echarts-for-react";

function DistributionLineChart({ data }) {
  return (
    <>
      <EChartsReact
        option={{
          legend: {},
          grid: {
            left: "3%",
            right: "4%",
            bottom: "40%",
            top: "40%",
            containLabel: true,
          },
          xAxis: {
            show: false, //hide axis line
            axisLine: {
              show: false,
              onZero: false,
            },
          },
          yAxis: {
            data: ["data"],
            show: false, //hide axis line
            axisLine: {
              show: false,
              onZero: false,
            },
          },
          series: data.map((ele) => {
            return {
              name: ele.name,
              data: [ele.value],
              type: "bar",
              largeThreshold: 50,
              emphasis: {
                focus: "series",
              },
              stack: "total", // for getting all data in single line
              label: {
                show: false, // show label in chart
              },
            };
          }),
          legend: {
            center: "center", //indicator
            bottom: "bottom",
            itemWidth: 12, // color-indicator icon width
            itemHeight: 12, // color-indicator icon height
          },
          textStyle: {
            fontSize: 10, // indicator text size
          },
        }}
      />
    </>
  );
}

export default DistributionLineChart;
