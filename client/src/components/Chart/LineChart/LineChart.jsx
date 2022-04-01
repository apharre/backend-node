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
// import axios from "axios";

// import { CircularProgress, Container } from "@material-ui/core";
// import useStyles from "./styles";
// import ChartForm from "./chartForm/ChartForm";
// import { GET } from "../../constants/actionTypes";

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

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Apharre Line Chart",
//     },
//   },
//   scales: {
//     y: {
//       suggestedMin: 40,
//       suggestedMax: 100,
//       stepSize: 5,
//     },
//     x: {
//       suggestedMin: 164500000, // ,
//       suggestedMax: 165000000, // 1648271727,
//       stepSize: 0.5,
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];
// export const chartFormattingdata = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };
// console.log(chartFormattingdata);

// eslint-disable-next-line no-unused-vars, react/prop-types
function LineChart({ vehicleData }) {
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

  const options = chartFormattingOptions(vehicleSpeed, vehicleTime);

  return (
    <Line className={classes.lineChart} options={options} data={chartData} />
  );
}

export default LineChart;
// https://uber.github.io/react-vis/documentation/getting-started/your-first-chart
