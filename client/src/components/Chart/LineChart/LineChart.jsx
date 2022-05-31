import React from "react";
import { Chart } from "react-charts";

function LineChart() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          // [0, 1],
          [1, 2],
          [2, 4],
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
          [2, 5],
          [3, 6],
          [4, 4],
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
    <div
      style={{
        height: "90vh",
        backgroundColor: "white",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}

export default LineChart;
