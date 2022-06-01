import React, { useState } from "react";
import { Button, Paper, Center } from "@mantine/core";
import { useForm } from "@mantine/form";

import TrafficDatePicker from "./chartFormElements/dateRangePicker";
import TimeInputSelector from "./chartFormElements/timeInput";
import ChartSwitchButton from "./chartFormElements/switchButton";
import ChartRangeSlider from "./chartFormElements/rangeSlider";
import ChartVehicleSelector from "./chartFormElements/vehicleSelector";
import ChartLaneSelector from "./chartFormElements/laneSelector";

function ChartForm() {
  const [dateValue, setDateValue] = useState([
    new Date(Date.now() - 86400000), // number of milliseconds in 24 hours
    new Date(),
  ]);
  const [allVehicles, setAllVehicles] = useState(true);
  const [allSpeeds, setAllSpeeds] = useState(true);
  const [allTemps, setAllTemps] = useState(true);
  const [allLanes, setAllLanes] = useState(true);
  const [laneNumbers, setLaneNumbers] = useState([1, 2, 3, 4]);
  const [selectedVehicles, setSelectedVehicles] = useState([
    "Commuter",
    "Truck",
    "Bus",
    "Motorcycle",
  ]);

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
          console.log(values, selectedVehicles)
        )}
      >
        <TrafficDatePicker dateValue={dateValue} setDateValue={setDateValue} />
        <TimeInputSelector dateValue={dateValue} isFirstDate={0} />
        <TimeInputSelector dateValue={dateValue} isFirstDate={1} />

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
        <ChartRangeSlider allStateObject={allSpeeds} markerType="speed" />

        <ChartSwitchButton
          allStateObject={allTemps}
          setAllStateObject={setAllTemps}
          trueMessage="All Temperatures"
          falseMessage="Select Temperature Range"
        />
        <ChartRangeSlider allStateObject={allTemps} markerType="temp" />

        <ChartSwitchButton
          allStateObject={allLanes}
          setAllStateObject={setAllLanes}
          trueMessage="All Lanes"
          falseMessage="Select Lanes"
        />
        <ChartLaneSelector
          allStateObject={allLanes}
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
