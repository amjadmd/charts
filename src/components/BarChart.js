import { Bar } from "react-chartjs-2";
import "../App.css";

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h4 className="chart-header">Bar Chart</h4>
      <div className="chart-subContainer">
        <div className="chart-yAxis"> Malic Acid</div>
        <div className="chart-width">
          <Bar
            data={chartData}
            options={{
              // for more plugins to check: https://www.npmjs.com/search?q=chartjs-plugin
              plugins: {
                title: {
                  display: true,
                  text: "Alcohol Category",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
