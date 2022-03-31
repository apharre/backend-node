// import React from "react";
import React, { useState } from "react";

import {
  // TextField,
  Button,
  Typography,
  Paper,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import useStyles from "./styles";

// class FormComponent extends Component {
//   constructor() {
//     super();

//     this.state = { selection: 1 };
//     this.handleChange = this.handleChange.bind(this);
//   }
// }

// eslint-disable-next-line no-unused-vars
const timeOptions = ["Past Hour", "Past Day", "Past Week", "Past Month"];
const vehicleOptions = [
  "All",
  "Commuter",
  "Tractor Trailer",
  "Bus",
  "Emergency",
];
const laneOptions = ["All", "1", "2", "3", "4"];
const speedOptions = ["All", "0-50", "50-60", "60-70", "70+"];
// const count = null;
// eslint-disable-next-line no-unused-vars
const tempOptions = ["All", "0-32", "32-50", "50-60", "60-70", "70-80", "80+"];

function handleSubmit() {
  return null;
}

function ChartForm() {
  const classes = useStyles();

  // const [chartOptions, setChartOptions] = useState({});

  const [timeframe, setTimeframe] = useState("Past Hour");
  const [vehicleType, setVehicleType] = useState("All");
  const [lane, setLane] = useState("All");
  const [speed, setSpeed] = useState("All");
  const [temp, setTemp] = useState("All");

  // type, lane, speed, count, temp, date

  return (
    <Paper className={classes.paper}>
      <FormControl
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className={classes.formControl}
      >
        {/* <form autoComplete="off" noValidate onSubmit={handleSubmit}> */}
        <Typography className={classes.menuTitle} variant="h6">
          {/* TODO: get camera name here */}
          Camera Name
        </Typography>

        <InputLabel className={classes.inputLabel}>Timeframe</InputLabel>
        <Select
          id="timeframe-select"
          value={timeframe}
          className={classes.dropdownMenu}
          onChange={(event) => {
            setTimeframe(event.target.value);
          }}
        >
          {timeOptions.map((timeOption) => (
            <MenuItem value={timeOption} key={timeOption}>
              {timeOption}
            </MenuItem>
          ))}
        </Select>

        <InputLabel className={classes.inputLabel}>Vehicle Type</InputLabel>
        <Select
          id="vechicle-select"
          value={vehicleType}
          className={classes.dropdownMenu}
          onChange={(event) => {
            setVehicleType(event.target.value);
          }}
        >
          {vehicleOptions.map((vehicleOption) => (
            <MenuItem value={vehicleOption} key={vehicleOption}>
              {vehicleOption}
            </MenuItem>
          ))}
        </Select>
        <br />

        <InputLabel className={classes.inputLabel}>Lane</InputLabel>
        <Select
          id="lane-select"
          value={lane}
          className={classes.dropdownMenu}
          onChange={(event) => {
            setLane(event.target.value);
          }}
        >
          {laneOptions.map((laneOption) => (
            <MenuItem value={laneOption} key={laneOption}>
              {laneOption}
            </MenuItem>
          ))}
        </Select>
        <br />

        <InputLabel className={classes.inputLabel}>Speed</InputLabel>
        <Select
          id="speed-select"
          value={speed}
          className={classes.dropdownMenu}
          onChange={(event) => {
            setSpeed(event.target.value);
          }}
        >
          {speedOptions.map((speedOption) => (
            <MenuItem value={speedOption} key={speedOption}>
              {speedOption}
            </MenuItem>
          ))}
        </Select>
        <br />

        <InputLabel className={classes.inputLabel}>Temperature</InputLabel>
        <Select
          id="temp-select"
          value={temp}
          onChange={(event) => {
            setTemp(event.target.value);
          }}
          className={classes.dropdownMenu}
        >
          {tempOptions.map((tempOption) => (
            <MenuItem value={tempOption} key={tempOption}>
              {tempOption}
            </MenuItem>
          ))}
        </Select>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="medium"
          type="submit"
        >
          Submit
          {/* src/api/index.js is where the action is executed */}
          {/* src/actions/posts.js is where the action is created */}
        </Button>
        {/* </form> */}
      </FormControl>
    </Paper>
  );
}

export default ChartForm;
