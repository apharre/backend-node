/* eslint-disable react/prop-types */
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

import {
  // convertUSTtoHourMinSec,
  // breakArrayIntoTenTicks,
  chartFormattingOptions,
  // convertUSTtoHourMinSec,
  convertUSTtoDateTime,
} from "./chartFunctions";

import useStyles from "../styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// eslint-disable-next-line no-unused-vars, react/prop-types
function LineChart({ vehicleData, currentCamera }) {
  const classes = useStyles();

  // all Commuter vehicle types
  const vehicledatatype = [];
  vehicleData.forEach((vehicle) => vehicledatatype.push(vehicle.type));
  // console.log(vehicledatatype);

  const vehicleSpeed = [];
  vehicleData.forEach((vehicle) => vehicleSpeed.push(vehicle.speed));
  for (let i = 0; i < 100; i += 1) {
    vehicleSpeed.push(77 + Math.floor(Math.random() * 15));
  }
  // console.log(vehicleSpeed);

  // all timestamps
  const vehicleTime = [];
  vehicleData.forEach((vehicle) => vehicleTime.push(vehicle.date));
  for (let i = 0; i < 100; i += 1) {
    vehicleTime.push(1648271727 + Math.floor(Math.random() * 15000));
  }
  // console.log(vehicleTime);

  const chartData = {
    // TODO: date vs time for the true variable
    // labels: convertUSTtoHourMinSec(
    //   //   1648271727
    //   breakArrayIntoTenTicks(vehicleTime)
    // ),
    labels: convertUSTtoDateTime(vehicleTime),
    datasets: [
      {
        label: "First Car Plot",
        // data: vehicleTime.map(() => vehicleSpeed),
        data: vehicleSpeed,
        borderColor: "rgb(53, 162, 235)",
      },
    ],
  };
  // console.log(chartData);

  const options = chartFormattingOptions(vehicleSpeed, currentCamera.name);

  return (
    <Line className={classes.lineChart} options={options} data={chartData} />
  );
}

export default LineChart;
// https://uber.github.io/react-vis/documentation/getting-started/your-first-chart
