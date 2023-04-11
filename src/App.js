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

  // Getting distinct types of Alcohol
  const distinctWine = wineData
    ?.map((item) => item.Alcohol)
    .filter((value, index, self) => self.indexOf(value) === index);
    
  // Creating distinct array with average of Malic acid in it
  const distinctWineArray = distinctWine.map((item) => {
    const wineDat = wineData?.filter((e) => e.Alcohol === item);
    const wineDatAvgMalic =
      wineDat?.reduce((sum, item) => sum + item?.MalicAcid, 0) /
      wineDat?.length;
    return { Alcohol: item, AvgMalicAcid: wineDatAvgMalic };
  });

  const [barChartData, setBarChartData] = useState({
    labels: distinctWineArray.map((data) => `Alcohol ${data?.Alcohol}`),
    datasets: [
      {
        label: "Malic Acid Content ",
        data: distinctWineArray.map((data) => data.AvgMalicAcid),
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
