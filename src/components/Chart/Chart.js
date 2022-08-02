import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map(({ value, maxValue, label }) => (
        <ChartBar key={label} value={value} maxValue={null} label={label} />
      ))}
    </div>
  );
};

export default Chart;
