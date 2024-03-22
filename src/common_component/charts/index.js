import { Card, CardBody, CardHeader, CardTitle, Row } from "reactstrap";
import CategoryPieChart from "./CategoryPieChart";
import DistributionLineChart from "./DistributionLineChart";
import SectorTreeChart from "./SectorTreeChart";

function Chart({ chartName, title, description, data }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody className="card-heght-400">
          <p className="fs-14">{description}</p>
          <Row>
            {chartName === "CategoryPieChart" ? (
              <>
                <CategoryPieChart data={data} />
              </>
            ) : chartName === "DistributionLineChart" ? (
              <>
                <DistributionLineChart data={data} />
              </>
            ) : chartName === "SectorTreeChart" ? (
              <>
                <SectorTreeChart data={data} />
              </>
            ) : (
              ""
            )}
            <chartName
              title={title}
              description={description}
              data={data}
            ></chartName>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default Chart;
