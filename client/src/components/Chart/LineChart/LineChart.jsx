/* eslint-disable react/prop-types */
import React from "react";
import { Chart } from "react-charts";
import { Center, Loader } from "@mantine/core";
// import useChartConfig from "./chartConfig";

// eslint-disable-next-line no-unused-vars
function LineChart({ vehicleData, isLoading }) {
  // const data = React.useMemo(
  //   () => [
  //     {
  //       label: "Series 1",
  //       data: [
  //         // [0, 1],
  //         [1, 2],
  //         [2.5, 4],
  //         [3, 2],
  //         [4, 7],
  //         [5, 2],
  //       ],
  //     },
  //     {
  //       label: "Series 2",
  //       data: [
  //         // [0, 3],
  //         [1, 1],
  //         [2.3, 5],
  //         [3, 6],
  //         [4.68, 4],
  //         [5, 9],
  //       ],
  //     },
  //   ],
  //   []
  // );

  const data = React.useMemo(() => vehicleData);
  // const data = useChartConfig;
  // const getDatums = React.useCallback((series) => series.data, []);
  // const getPrimary = React.useCallback(
  //   (datum, i, series, seriesIndex, data) => originalData.axis[i],
  //   []
  // );

  // // Use data.lines[n].data[n].value as each datums secondary value
  // const getSecondary = React.useCallback((datum) => datum.value, []);
  // const getLabel = React.useCallback((series) => series.label, []);

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left", id: "speed" },
    ],
    []
  );

  const primaryCursor = { showLine: true, snap: true };

  const getLabel = React.useCallback((series) => series.seriesLabel, []);

  const series = React.useMemo(
    () => ({
      showPoints: false,
    }),
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
          <Chart
            data={data}
            axes={axes}
            getLabel={getLabel}
            series={series}
            primaryCursor={primaryCursor}
          />
        </div>
      )}
    </div>
  );
}

export default LineChart;
