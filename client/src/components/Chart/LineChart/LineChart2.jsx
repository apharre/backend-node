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

// EXAMPLE HERE FOR MORE OF WHAT WE WANT
// https://codesandbox.io/s/zl8u4?file=/src/components/Line.tsx:816-926

import {
  // convertUSTtoHourMinSec,
  // breakArrayIntoTenTicks,
  chartFormattingOptions,
  // convertUSTtoHourMinSec,
  convertUSTtoDateTime,
} from "./chartFunctions";

// import useStyles from "../styles";

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
function LineChart({ vehicleData, currentCamera, chartFilters }) {
  // const classes = useStyles();

  // all Commuter vehicle types
  const vehicledatatype = [];
  vehicleData.forEach((vehicle) => vehicledatatype.push(vehicle.type));
  // console.log(vehicledatatype);

  const vehicleSpeed = [];
  vehicleData.forEach((vehicle) => vehicleSpeed.push(vehicle.speed));
  // for (let i = 0; i < 100; i += 1) {
  //   vehicleSpeed.push(77 + Math.floor(Math.random() * 15));
  // }

  const commuterSpeed = [];
  const truckSpeed = [];
  const busSpeed = [];
  const motorcycleSpeed = [];

  // all timestamps
  const vehicleTime = [];
  let myDataset = [];
  vehicleData.forEach((vehicle) => vehicleTime.push(vehicle.date));
  // for (let i = 0; i < 100; i += 1) {
  //   vehicleTime.push(1648271727 + Math.floor(Math.random() * 15000));
  // }
  // console.log(vehicleTime);

  if (chartFilters.vehicleType === "All") {
    vehicleData.forEach((vehicle) => {
      if (vehicle.type === "commuter") {
        commuterSpeed.push(vehicle.speed);
      } else if (vehicle.type === "truck") {
        truckSpeed.push(vehicle.speed);
      } else if (vehicle.type === "bus") {
        busSpeed.push(vehicle.speed);
      } else if (vehicle.type === "motorcycle") {
        motorcycleSpeed.push(vehicle.speed);
      } else {
        commuterSpeed.push(vehicle.speed);
      }
    });

    myDataset = [
      {
        label: "Commuter",
        data: commuterSpeed,
        borderColor: "rgb(53, 162, 235)",
      },
      {
        label: "Truck",
        data: truckSpeed,
        // backgroundColor: "#35fc03",
        borderColor: "rgb(53, 252, 3)",
      },
      {
        label: "Bus",
        data: busSpeed,
        borderColor: "rgb(173, 113, 134)",
      },
      {
        label: "Motorcycle",
        data: motorcycleSpeed,
        borderColor: "rgb(252, 186, 3)",
      },
    ];
  } else {
    myDataset = [
      {
        label: "First Car Plot",
        data: vehicleSpeed,
        borderColor: "rgb(53, 162, 235)",
      },
    ];
  }

  const chartData = {
    labels: convertUSTtoDateTime(vehicleTime),
    datasets: myDataset,
  };
  const options = chartFormattingOptions(vehicleSpeed, currentCamera.name);

  return <Line options={options} data={chartData} />;
}

export default LineChart;
// https://uber.github.io/react-vis/documentation/getting-started/your-first-chart
