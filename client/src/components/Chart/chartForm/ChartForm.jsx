/* eslint-disable react/prop-types */
// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  // TextField,
  Button,
  Typography,
  Paper,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  // InputBase,
} from "@material-ui/core";
import useStyles from "./styles";

import {
  timeOptions,
  vehicleOptions,
  laneOptions,
  speedOptions,
  tempOptions,
} from "./chartVariables";
import chartQueryBuilder from "./chartQueryBuilder";

// class FormComponent extends Component {
//   constructor() {
//     super();

//     this.state = { selection: 1 };
//     this.handleChange = this.handleChange.bind(this);
//   }
// }

// eslint-disable-next-line react/prop-types, no-unused-vars
function ChartForm({
  // eslint-disable-next-line no-unused-vars
  chartFilters,
  // eslint-disable-next-line no-unused-vars
  setChartFilters,
  loading,
  // eslint-disable-next-line no-unused-vars
  urlQuery,
  setUrlQuery,
  // eslint-disable-next-line no-unused-vars
  currentCamera,
}) {
  const classes = useStyles();
  const navigate = useNavigate();

  // Might not need this
  const [date, setDate] = useState("Past Hour");
  const [vehicleType, setVehicleType] = useState("All");
  const [lane, setLane] = useState("All");
  const [speed, setSpeed] = useState("All");
  const [temp, setTemp] = useState("All");

  // when the submit button is clicked, make the API call again in ChartPage.jsx
  // const handleSubmit = (event, date, vehicleType, lane, speed, temp) => {
  //   buildParamFilter(date, vehicleType, lane, speed, temp)
  // };

  // // eslint-disable-next-line no-shadow, no-unused-vars
  // const handleSubmit = (event) => {
  //   const urlFilter = chartQueryBuilder(date, vehicleType, lane, speed, temp);
  //   console.log(urlFilter);
  //   setUrlQuery(urlFilter);
  //   navigate(urlFilter);
  // };

  // TODO: HARDCODING THE CAMERAS, SO CHANGE THIS LATER
  // eslint-disable-next-line no-shadow, no-unused-vars
  const handleSubmit = (event) => {
    const urlFilter = chartQueryBuilder(
      currentCamera.vehicle_collection,
      date,
      vehicleType,
      lane,
      speed,
      temp
    );
    console.log(urlFilter);
    setUrlQuery(urlFilter);
    navigate(urlFilter);
  };

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <FormControl
          autoComplete="off"
          noValidate
          // onSubmit={(event, newValue) => handleSubmit(newValue)}
          className={classes.formControl}
        >
          {/* <form autoComplete="off" noValidate onSubmit={handleSubmit}> */}
          <Typography className={classes.menuTitle} variant="h6">
            {/* TODO: get camera name here */}
            {currentCamera.name}
          </Typography>
          <InputLabel className={classes.inputLabel}>Timeframe</InputLabel>
          <Select
            id="date-select"
            value={date}
            className={classes.dropdownMenu}
            disabled={loading}
            onChange={(event) => {
              setDate(event.target.value);
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
            disabled={loading}
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

          <InputLabel className={classes.inputLabel}>Lane</InputLabel>
          <Select
            id="lane-select"
            value={lane}
            className={classes.dropdownMenu}
            disabled={loading}
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

          <InputLabel className={classes.inputLabel}>Speed</InputLabel>
          <Select
            id="speed-select"
            value={speed}
            className={classes.dropdownMenu}
            disabled={loading}
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

          <InputLabel className={classes.inputLabel}>Temperature</InputLabel>
          <Select
            id="temp-select"
            value={temp}
            className={classes.dropdownMenu}
            disabled={loading}
            onChange={(event) => {
              setTemp(event.target.value);
            }}
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
            // onClick={(event, newValue) => handleSubmit(newValue)}
          >
            Submit
            {/* the URL tutorial is 1:57:00 */}
            {/* src/api/index.js is where the action is executed */}
            {/* src/actions/posts.js is where the action is created */}
          </Button>
          {/* </form> */}
        </FormControl>
      </form>
    </Paper>
  );
}

export default ChartForm;
