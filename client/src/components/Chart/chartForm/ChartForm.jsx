import React, { useState } from "react";
// import { TimeInput } from "@mantine/dates";
import {
  MultiSelect,
  Paper,
  Switch,
  RangeSlider,
  Collapse,
} from "@mantine/core";

import TrafficDatePicker from "./chartFormElements/dateRangePicker";
import TimeInputSelector from "./chartFormElements/timeInput";

const speedMarkers = [
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

// function ChartForm({ currentCamera }) {
function ChartForm() {
  const [dateValue, setDateValue] = useState([
    new Date(Date.now() - 86400000), // number of milliseconds in 24 hours
    new Date(),
  ]);

  const [allVehicles, setAllVehicles] = useState(true);
  const [allSpeeds, setAllSpeeds] = useState(true);
  const [allTemps, setAllTemps] = useState(true);

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        "&:hover": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
    >
      <div>
        <TrafficDatePicker dateValue={dateValue} setDateValue={setDateValue} />
        <TimeInputSelector dateValue={dateValue} isFirstDate={0} />
        <TimeInputSelector dateValue={dateValue} isFirstDate={1} />

        {/* switch for all or selected vehicle types */}
        <Switch
          color="teal"
          checked={allVehicles}
          label="All Vehicle Types"
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

        {/* Switch for all or selected speeds */}
        <Switch
          color="teal"
          checked={allSpeeds}
          label="All Speeds"
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

        {/* switch for all or selected temperatures */}
        <Switch
          color="teal"
          checked={allTemps}
          label="All Temperatures"
          onLabel="All"
          offLabel="Select"
          onChange={(event) => {
            setAllTemps(event.currentTarget.checked);
          }}
          py="1rem"
          px="1rem"
        />
      </div>
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
    </Paper>
  );
}

export default ChartForm;
