import React, { useState } from "react";

import {
  Button,
  Collapse,
  MultiSelect,
  Paper,
  RangeSlider,
  Switch,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import TrafficDatePicker from "./chartFormElements/dateRangePicker";
import TimeInputSelector from "./chartFormElements/timeInput";

const speedMarkers = [
  { value: 0, label: "0" },
  { value: 25, label: "25" },
  { value: 50, label: "50" },
  { value: 75, label: "75" },
  { value: 100, label: "100+" },
];

const tempMarkers = [
  { value: 0, label: "0" },
  { value: 25, label: "25" },
  { value: 50, label: "50" },
  { value: 75, label: "75" },
  { value: 100, label: "100" },
];

function ChartForm() {
  const [dateValue, setDateValue] = useState([
    new Date(Date.now() - 86400000), // number of milliseconds in 24 hours
    new Date(),
  ]);
  const [allVehicles, setAllVehicles] = useState(true);
  const [allSpeeds, setAllSpeeds] = useState(true);
  const [allTemps, setAllTemps] = useState(true);

  const form = useForm({
    initialValues: {
      allVehicleFormBool: { allVehicles },
      allSpeedFormBool: { allSpeeds },
      allTempFormBool: { allTemps },
    },
  });
  console.log(form.allVehicleFormBool);
  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        "&:hover": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
    >
      {/* TODO: <useForm /> from mantine */}
      <div>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TrafficDatePicker
            dateValue={dateValue}
            setDateValue={setDateValue}
          />
          <TimeInputSelector dateValue={dateValue} isFirstDate={0} />
          <TimeInputSelector dateValue={dateValue} isFirstDate={1} />

          <Switch
            color="teal"
            checked={allVehicles}
            label={allVehicles ? "All Vehicle Types" : "Select Vehicle Type"}
            onLabel="All"
            offLabel="Select"
            onChange={(event) => setAllVehicles(event.currentTarget.checked)}
            pt="1rem"
            px="1rem"
          />
          <Collapse in={!allVehicles}>
            <MultiSelect
              data={["Commuter", "Truck", "Bus", "Motorcycle"]}
              label="Vehicle Type"
              placeholder="Vehicle Types to Include"
              defaultValue={["Commuter", "Truck", "Bus", "Motorcycle"]}
              clearButtonLabel="Clear selection"
              clearable
              py="1rem"
              px="1rem"
            />
          </Collapse>

          <Switch
            color="teal"
            checked={allSpeeds}
            label={allSpeeds ? "All Speeds" : "Select Speed Range"}
            onLabel="All"
            offLabel="Select"
            onChange={(event) => setAllSpeeds(event.currentTarget.checked)}
            pt="1rem"
            px="1rem"
          />

          <Collapse in={!allSpeeds}>
            <RangeSlider
              defaultValue={[25, 75]}
              marks={speedMarkers}
              label={(value) => `${value} mph`}
              py="1rem"
              px="1rem"
            />
          </Collapse>

          <Switch
            color="teal"
            checked={allTemps}
            label={allTemps ? "All Temperatures" : "Select Temperature Range"}
            onLabel="All"
            offLabel="Select"
            onChange={(event) => {
              setAllTemps(event.currentTarget.checked);
            }}
            py="1rem"
            px="1rem"
          />

          <Collapse in={!allTemps}>
            <RangeSlider
              min={-20}
              max={120}
              defaultValue={[25, 75]}
              marks={tempMarkers}
              label={(value) => `${value} °F`}
              pb="2rem"
              px="1rem"
            />
          </Collapse>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Paper>
  );
}

export default ChartForm;
