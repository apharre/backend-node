import React from "react";
import { AxisOptions, Chart } from "react-charts";
// import ResizableBox from "../ResizableBox";
// import useDemoConfig from "../useDemoConfig";

// eslint-disable-next-line react/prop-types
function LineChart({ vehicleData }) {
  // const { data, randomizeData } = useDemoConfig({
  //   series: 10,
  //   dataType: "time",
  // });
  console.log(vehicleData);
  const data = vehicleData;

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum: { primary: string }) => datum.date,
    }),
    []
  );
  // React.useMemo <
  // AxisOptions >
  // (() => ({
  //   // getValue: (datum) => datum.primary as unknown as Date,
  //   getValue: (datum) => datum.date,
  // }),
  // []);

  const secondaryAxes =
    React.useMemo <
    AxisOptions >
    (() => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []);

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
    />
  );
}

export default LineChart;
