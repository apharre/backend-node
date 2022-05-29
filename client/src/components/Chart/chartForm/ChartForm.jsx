/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { DateRangePicker, TimeInput } from "@mantine/dates";
import {
  MultiSelect,
  Paper,
  Switch,
  RangeSlider,
  // Transition,
  Collapse,
} from "@mantine/core";
// import { useClickOutside } from "@mantine/hooks";
// import { Switch } from "@material-ui/core";

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

const scaleY = {
  in: { opacity: 1, transform: "scaleY(1)" },
  out: { opacity: 0, transform: "scaleY(0)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

// function ChartForm({ currentCamera }) {
function ChartForm() {
  // Create a date valuue for the date range with the first being 24 hours ago and the second being the current time
  const [dateValue, setDateValue] = useState([
    [new Date(new Date().getTime() - 24 * 60 * 60 * 1000), new Date()],
  ]);
  const [allVehicles, setAllVehicles] = useState(true);
  const [allSpeeds, setAllSpeeds] = useState(true);
  const [allTemps, setAllTemps] = useState(true);
  // const [tempSliderVisible, setTempSliderVisible] = useState(false);

  // const clickOutsideRef = useClickOutside(() => setTempSliderVisible(false));
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
        <Collapse in={!allVehicles}>
          <MultiSelect
            data={["Commuter", "Truck", "Bus", "Motorcycle"]}
            label="Vehicle Type"
            placeholder="Pick all that you like"
            defaultValue={["Commuter", "Truck", "Bus", "Motorcycle"]}
            clearButtonLabel="Clear selection"
            clearable
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
        />

        <Collapse in={!allSpeeds}>
          <RangeSlider
            defaultValue={[25, 75]}
            marks={speedMarkers}
            label={(value) => `${value} mph`}
          />
        </Collapse>

        {/* {allSpeeds ? (
          <div />
        ) : (
          <RangeSlider
            defaultValue={[25, 75]}
            marks={speedMarkers}
            label={(value) => `${value} mph`}
          />
        )} */}

        {/* switch for all or selected temperatures */}
        <Switch
          color="teal"
          checked={allTemps}
          label="All Temperatures"
          onLabel="All"
          offLabel="Select"
          onChange={(event) => {
            // const inverseEventBool = !event.currentTarget.checked;
            setAllTemps(event.currentTarget.checked);
            // setTempSliderVisible(inverseEventBool);
          }}
        />
      </div>
      <Collapse in={!allTemps}>
        <RangeSlider
          min={-20}
          max={120}
          defaultValue={[25, 75]}
          marks={tempMarkers}
          label={(value) => `${value} °F`}
        />
      </Collapse>
      {/* <Transition
        mounted={tempSliderVisible}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
      > */}
      {/* {(styles) => (
          <Paper
            shadow="md"
            style={{
              ...styles,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 120,
            }}
            ref={clickOutsideRef}
          >
            Dropdown
          </Paper>
        )} */}
      {/* <RangeSlider
          min={-20}
          max={120}
          defaultValue={[25, 75]}
          marks={tempMarkers}
          label={(value) => `${value} °F`}
        /> */}
      {/* </Transition> */}
    </Paper>
  );
}

export default ChartForm;
