/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Button, Paper, Center } from "@mantine/core";
import { useForm } from "@mantine/form";

import ChartLaneSelector from "./chartFormElements/laneSelector";
import ChartRangeSlider from "./chartFormElements/rangeSlider";
import ChartSwitchButton from "./chartFormElements/switchButton";
import ChartVehicleSelector from "./chartFormElements/vehicleSelector";
import TimeInputSelector from "./chartFormElements/timeInput";
import TrafficDatePicker from "./chartFormElements/dateRangePicker";

import combineDateAndTimes from "./chartFormFunctions/chartFormFunctions";

const oneDayAgo = new Date(Date.now() - 86400000); // number of miliseconds in 24 hours
const todayNow = new Date();

function ChartForm({ setChartFilters }) {
  /* ____________________ Hook Instantiation ____________________ */
  // const [firstLoading, setFirstLoading] = useState(true);

  const [dateValue, setDateValue] = useState([oneDayAgo, todayNow]);
  const [firstDayTime, setFirstDayTime] = useState(oneDayAgo);
  const [laneNumbers, setLaneNumbers] = useState([1, 2, 3, 4]);
  const [secondDayTime, setSecondDayTime] = useState(todayNow);
  const [selectedVehicles, setSelectedVehicles] = useState([
    "Commuter",
    "Truck",
    "Bus",
    "Motorcycle",
  ]);
  const [speedRange, setSpeedRange] = useState([25, 75]);
  const [tempRange, setTempRange] = useState([0, 100]);

  const [allVehicles, setAllVehicles] = useState(true);
  const [allSpeeds, setAllSpeeds] = useState(true);
  const [allTemps, setAllTemps] = useState(true);
  const [allLanes, setAllLanes] = useState(true);

  const form = useForm({
    // initialValues: {
    //   combinedDates: dateValue,
    //   boolAllSpeeds: allSpeeds,
    //   querySpeedRange: speedRange,
    //   boolAllTemps: allTemps,
    //   queryTempRange: tempRange,
    //   boolAllLanes: allLanes,
    //   queryLaneNumbers: laneNumbers,
    //   boolAllVehicles: allVehicles,
    //   querySelectedVehicles: selectedVehicles,
    // },
  });

  function handleSubmit() {
    setChartFilters({
      combinedDates: combineDateAndTimes(
        dateValue,
        firstDayTime,
        secondDayTime
      ),
      boolAllSpeeds: allSpeeds,
      querySpeedRange: speedRange,
      boolAllTemps: allTemps,
      queryTempRange: tempRange,
      boolAllLanes: allLanes,
      queryLaneNumbers: laneNumbers,
      boolAllVehicles: allVehicles,
      querySelectedVehicles: selectedVehicles,
    });
    // setChartFilters(form.values);
    // console.log("chartFILTERS", chartFilters);
  }

  // run handle submit when page loads to ensure the chart is populated when first loading
  useEffect(() => {
    handleSubmit();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [defaultLaneNumbers, setDefaultLaneNumbers] = useState([1, 2, 3, 4]); // use this later to pull info from database

  /* ____________________ Page Element ____________________ */
  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        "&:hover": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TrafficDatePicker dateValue={dateValue} setDateValue={setDateValue} />
        <TimeInputSelector
          yearComparison={dateValue}
          dateValue={firstDayTime}
          setDateValue={setFirstDayTime}
          isFirstDate={0}
        />
        <TimeInputSelector
          yearComparison={dateValue}
          dateValue={secondDayTime}
          setDateValue={setSecondDayTime}
          isFirstDate={1}
        />

        <ChartSwitchButton
          allStateObject={allVehicles}
          setAllStateObject={setAllVehicles}
          trueMessage="All Vehicle Types"
          falseMessage="Select Vehicle Type"
        />
        <ChartVehicleSelector
          allVehicles={allVehicles}
          selectedVehicles={selectedVehicles}
          setSelectedVehicles={setSelectedVehicles}
        />

        <ChartSwitchButton
          allStateObject={allSpeeds}
          setAllStateObject={setAllSpeeds}
          trueMessage="All Speeds"
          falseMessage="Select Speed Range"
        />
        <ChartRangeSlider
          allStateObject={allSpeeds}
          sliderValue={speedRange}
          setSliderValue={setSpeedRange}
          markerType="speed"
        />

        <ChartSwitchButton
          allStateObject={allTemps}
          setAllStateObject={setAllTemps}
          trueMessage="All Temperatures"
          falseMessage="Select Temperature Range"
        />
        <ChartRangeSlider
          allStateObject={allTemps}
          sliderValue={tempRange}
          setSliderValue={setTempRange}
          markerType="temp"
        />

        <ChartSwitchButton
          allStateObject={allLanes}
          setAllStateObject={setAllLanes}
          trueMessage="All Lanes"
          falseMessage="Select Lanes"
        />
        <ChartLaneSelector
          allStateObject={allLanes}
          defaultLaneNumbers={defaultLaneNumbers}
          laneNumbers={laneNumbers}
          setLaneNumbers={setLaneNumbers}
        />

        <Center py="1rem">
          <Button type="submit">Submit</Button>
        </Center>
      </form>
    </Paper>
  );
}

export default ChartForm;
