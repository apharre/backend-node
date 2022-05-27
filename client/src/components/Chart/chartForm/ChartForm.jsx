/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { DateRangePicker, TimeInput } from "@mantine/dates";
import { MultiSelect, Paper, Switch, RangeSlider } from "@mantine/core";
// import { Switch } from "@material-ui/core";

const speedMarkers = [
  { value: 25, label: "25" },
  { value: 50, label: "50" },
  { value: 75, label: "75" },
  { value: 100, label: "100+" },
];

// function ChartForm({ currentCamera }) {
function ChartForm() {
  const [dateValue, setDateValue] = useState([[new Date(), new Date()]]);
  const [allVehicles, setAllVehicles] = useState(true);
  const [allSpeeds, setAllSpeeds] = useState(true);
  const [allTemps, setAllTemps] = useState(true);
  // const dateValue = new Date(2022, 5);
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
        <DateRangePicker
          label="Start and End Dates"
          placeholder="Set date range"
          value={dateValue}
          onChange={setDateValue}
        />
        <TimeInput
          defaultValue={new Date()}
          label="Time on Start Date"
          variant="filled"
          radius="md"
          format="12"
          clearable
        />
        <TimeInput
          defaultValue={new Date()}
          label="Time on End Date"
          variant="filled"
          radius="md"
          format="12"
          clearable
        />
        {/* switch for all or selected vehicle types */}
        <Switch
          color="teal"
          checked={allVehicles}
          label="All Vehicle Types"
          onLabel="All"
          offLabel="Select"
          onChange={(event) => setAllVehicles(event.currentTarget.checked)}
        />
        {/* Type of Vehicle */}
        {allVehicles ? (
          <div />
        ) : (
          <MultiSelect
            data={["Commuter", "Truck", "Bus", "Motorcycle"]}
            label="Vehicle Type"
            placeholder="Pick all that you like"
            defaultValue={["Commuter", "Truck", "Bus", "Motorcycle"]}
            clearButtonLabel="Clear selection"
            clearable
          />
        )}

        {/* Switch for all or selected speeds */}
        <Switch
          color="teal"
          checked={allSpeeds}
          label="All Speeds"
          onLabel="All"
          offLabel="Select"
          onChange={(event) => setAllSpeeds(event.currentTarget.checked)}
        />
        {allSpeeds ? (
          <div />
        ) : (
          <RangeSlider
            defaultValue={[25, 75]}
            marks={speedMarkers}
            label={(value) => `${value} mph`}
          />
        )}

        {/* switch for all or selected temperatures */}
        <Switch
          color="teal"
          checked={allTemps}
          label="All Temperatures"
          onLabel="All"
          offLabel="Select"
          onChange={(event) => setAllTemps(event.currentTarget.checked)}
        />
        {allTemps ? (
          <div />
        ) : (
          <RangeSlider
            min="-20"
            max="120"
            defaultValue={[25, 75]}
            marks={speedMarkers}
            label={(value) => `${value} °F`}
          />
        )}
      </div>
    </Paper>
  );
}

export default ChartForm;
