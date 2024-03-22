import EChartsReact from "echarts-for-react";

function CategoryPieChart({ data }) {
  return (
    <>
      <EChartsReact
        option={{
          legend: {
            center: "center", //indicator
            bottom: "bottom",
            itemWidth: 12, // color-indicator icon width
            itemHeight: 12, // color-indicator icon height
          },
          textStyle: {
            fontSize: 10, // indicator text size
          },
          tooltip: {
            trigger: "item", // trigger tooltip on item hover
          },
          series: [
            {
              type: "pie", // chart type
              radius: "60%", // chart-radius
              data,
              labelLine: { show: false }, // show label in chart
              label: { show: false }, // show label in chart
            },
          ],
        }}
      />
    </>
  );
}

export default CategoryPieChart;
