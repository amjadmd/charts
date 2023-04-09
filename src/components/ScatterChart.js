import { Scatter } from "react-chartjs-2";

export const ScatterCharts = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h4 className="chart-header">Scatter Chart</h4>
      <div className="chart-subContainer">
        <div className="chart-yAxis"> Hue </div>
        <div className="chart-width">
          <Scatter
            data={chartData}
            options={{
              // for more plugins to check: https://www.npmjs.com/search?q=chartjs-plugin
              plugins: {
                title: {
                  display: true,
                  text: "Color Intensity",
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
