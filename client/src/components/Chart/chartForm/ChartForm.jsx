import React, { useState } from "react";
import { Button, Paper, Center } from "@mantine/core";
import { useForm } from "@mantine/form";

import TrafficDatePicker from "./chartFormElements/dateRangePicker";
import TimeInputSelector from "./chartFormElements/timeInput";
import ChartSwitchButton from "./chartFormElements/switchButton";
import ChartRangeSlider from "./chartFormElements/rangeSlider";
import ChartVehicleSelector from "./chartFormElements/vehicleSelector";
import ChartLaneSelector from "./chartFormElements/laneSelector";

const oneDayAgo = new Date(Date.now() - 86400000);
const todayNow = new Date();

function ChartForm() {
  const [dateValue, setDateValue] = useState([
    oneDayAgo, // number of milliseconds in 24 hours
    todayNow,
  ]);
  const [firstDayTime, setFirstDayTime] = useState(oneDayAgo);
  // https://stackoverflow.com/questions/16597853/combine-date-and-time-string-into-single-date-with-javascript
  const [secondDayTime, setSecondDayTime] = useState(todayNow);
  const [speedRange, setSpeedRange] = useState([25, 75]);
  const [tempRange, setTempRange] = useState([0, 100]);
  // eslint-disable-next-line no-unused-vars
  const [defaultLaneNumbers, setDefaultLaneNumbers] = useState([1, 2, 3, 4]);
  const [laneNumbers, setLaneNumbers] = useState([1, 2, 3, 4]);
  const [selectedVehicles, setSelectedVehicles] = useState([
    "Commuter",
    "Truck",
    "Bus",
    "Motorcycle",
  ]);

  const [allVehicles, setAllVehicles] = useState(true);
  const [allSpeeds, setAllSpeeds] = useState(true);
  const [allTemps, setAllTemps] = useState(true);
  const [allLanes, setAllLanes] = useState(true);

  const form = useForm({
    initialValues: {
      allVehicles,
      allSpeeds,
      allTemps,
    },
  });

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        "&:hover": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
    >
      <form
        onSubmit={form.onSubmit((values) =>
          console.log(
            values,
            selectedVehicles,
            "|||",
            dateValue,
            firstDayTime, // combine it with dateValue[1 and 2] to block off time. see line 22 comment
            secondDayTime,
            speedRange,
            tempRange,
            laneNumbers
          )
        )}
      >
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
