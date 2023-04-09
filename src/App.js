import { useState } from "react";

// from Charts packages
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

// data values
import { wineData } from "./utils/wineData";

// charts components used
import { BarChart } from "./components/BarChart";
import { ScatterCharts } from "./components/ScatterChart";
import "./App.css";

Chart.register(CategoryScale);

export default function App() {
  const [barChartData, setBarChartData] = useState({
    labels: wineData.map((data, index) => `Alcohol ${index + 1}`),
    datasets: [
      {
        label: "Malic Acid Content ",
        data: wineData.map((data) => data.MalicAcid),
        backgroundColor: ["#2a71d0"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [scatterChartData, setScatterChartData] = useState({
    labels: wineData.map((data) => data.ColorIntensity),
    datasets: [
      {
        label: "Color Intensity",
        data: wineData.map((data) => data.Hue),
        backgroundColor: ["#2a71d0"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <BarChart chartData={barChartData} />
      <ScatterCharts chartData={scatterChartData} />
    </div>
  );
}
