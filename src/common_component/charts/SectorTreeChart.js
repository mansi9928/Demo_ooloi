import EChartsReact from "echarts-for-react";

function SectorTreeChart({ data }) {
  return (
    <>
      <EChartsReact
        option={{
          tooltip: {
            axisPointer: {
              type: false,
            },
          },
          legend: {
            center: "center", //indicator
            bottom: "bottom",
            itemWidth: 12, // color-indicator icon width
            itemHeight: 12, // color-indicator icon height
          },
          textStyle: {
            fontSize: 10, // indicator text size
          },
          toolbox: {
            show: false,
          },
          itemStyle: {
            gapWidth: 0,
          },
          xAxis: {
            show: false,
          },
          yAxis: {
            type: "category",
            inverse: true,
            show: false,
          },
          series: data.map((ele, index) => {
            return {
              type: "bar",
              name: ele[0].name,
              barWidth: "100%",
              stack: "total",
              data: ele,
            };
          }),
        }}
      />
    </>
  );
}

export default SectorTreeChart;
