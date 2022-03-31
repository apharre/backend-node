import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
// import faker from "faker";
import axios from "axios";

import { CircularProgress, Container } from "@material-ui/core";
// import useStyles from "./styles";
import ChartForm from "./chartForm/ChartForm";
import { GET } from "../../constants/actionTypes";
import LineChart from "./LineChart";

function ChartPage() {
  // const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [vehicleData, setVehicleData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [chartFilters, setChartFilters] = useState({
    type: "all",
    lane: "all",
    speed: "all",
    // count: "",
    temp: "all",
    date: "all",
  });

  // effects
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: GET,
          url: `/vehicles`,
          // eslint-disable-next-line no-undef, no-return-assign
          // cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setVehicleData(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);
  console.log(vehicleData);

  return (
    <Container>
      <Grid container alignItems="stretch">
        {loading ? (
          <div>
            {" "}
            <CircularProgress size="3rem" thickness={5} />{" "}
          </div>
        ) : (
          <>
            <Grid xs={2} md={2}>
              <ChartForm
                chartFilters={chartFilters}
                setChartFilters={setChartFilters}
              />
            </Grid>
            <Grid xs={9} md={9}>
              {/* <Line
                className={classes.lineChart}
                options={options}
                data={chartFormattingdata}
              /> */}
              <LineChart vehicleData={vehicleData} />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default ChartPage;
