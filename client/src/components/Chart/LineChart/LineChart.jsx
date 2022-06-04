/* eslint-disable react/prop-types */
import React from "react";
import { Chart } from "react-charts";
import { Center, Loader } from "@mantine/core";

// function LineChart({ vehicleData, currentCamera, chartFilters, loading }) {
function LineChart({ isLoading }) {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          // [0, 1],
          [1, 2],
          [2.5, 4],
          [3, 2],
          [4, 7],
          [5, 2],
        ],
      },
      {
        label: "Series 2",
        data: [
          // [0, 3],
          [1, 1],
          [2.3, 5],
          [3, 6],
          [4.68, 4],
          [5, 9],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div>
      {isLoading ? (
        <Center style={{ height: "80vh" }}>
          <Loader />
        </Center>
      ) : (
        <div
          style={{
            height: "90vh",
            backgroundColor: "white",
          }}
        >
          <Chart data={data} axes={axes} />
        </div>
      )}
    </div>
  );
}

export default LineChart;
