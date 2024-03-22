import { Card, CardBody, Col, Row } from "reactstrap";
import Chart from "../../common_component/charts";

function Dashboard() {
  const data = [
    { value: 1048, name: "Flexi Cap Fund 32.19%", color: "#75d6ff" },
    { value: 735, name: "Small Cap Fund 26.40%", color: "#75ffff" },
    { value: 580, name: "Sectoral Fund 26.40%", color: "#aa75ff" },
    { value: 484, name: "ELSS 26.04%", color: "#ff7bf2" },
    { value: 300, name: "Large & Mid Cap Fund 12.03%", color: "#ffd875" },
    { value: 300, name: "Index Fund 12.03%", color: "#ffc46a" },
  ];
  const data1 = [
    [
      {
        name: "Flexi Cap Fund 32.19%",
        value: 30,
        itemStyle: {
          color: "#75d6ff",
        },
      },
      {
        name: "Small Cap Fund 26.40%",
        value: 50,
        itemStyle: {
          color: "#aa75ff",
        },
      },
      {
        name: "Sectoral Fund 26.40%",
        value: 80,
        itemStyle: {
          color: "#ff7bf2",
        },
      },
    ],
    [
      {
        name: "ELSS 26.04%",
        value: 70,
        itemStyle: {
          color: "#75ffff",
        },
      },
      {
        name: "Large & Mid Cap Fund 12.03%",
        value: 50,
        itemStyle: {
          color: "#fc8c5c",
        },
      },
      {
        name: "Index Fund 12.03%",
        value: 20,
        itemStyle: {
          color: "#ffc46a",
        },
      },
    ],
  ];
  return (
    <>
      <Card className="mt-4 mx-4">
        <CardBody>
          <Row>
            <Col md="4" sm="12" className="mb-4">
              <Chart
                chartName="CategoryPieChart"
                title="Sub-Category"
                description="The assets are distributed between equity and cash & equivalents."
                data={data}
              />
            </Col>
            <Col md="4" sm="12" className="mb-4">
              <Chart
                chartName="DistributionLineChart"
                title="Fund Distribution"
                description="A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."
                data={data}
              />
            </Col>
            <Col md="4" sm="12" className="">
              <Chart
                chartName="SectorTreeChart"
                title="Top Sectors"
                description="The assets are distributed between equity and cash & equivalents."
                data={data1}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default Dashboard;
