/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
// import faker from "faker";
import axios from "axios";

import { Loader, Grid } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
// import useStyles from "../../mantine/globalStyles";

import ChartForm from "./chartForm/ChartForm";
import { GET } from "../../constants/actionTypes";
import LineChart from "./LineChart/LineChart";

function ChartPage({ currentCamera, setCurrentCamera }) {
  const navigate = useNavigate();
  const location = useLocation();
  // const { classes } = useStyles();

  const params = location.search ? location.search : null;

  /* *************** Component State *************** */
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [vehicleData, setVehicleData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [chartFilters, setChartFilters] = useState({
    vehicleType: "All",
    lane: "All",
    speed: "All",
    temp: "All",
    date: "Past Hour",
  });
  const [urlQuery, setUrlQuery] = useState("");

  // effects
  useEffect(() => {
    let cancel;
    setLoading(true);
    const fetchData = async () => {
      try {
        let query;
        if (params && !urlQuery) {
          query = params;
        } else {
          query = urlQuery;
        }
        const { data } = await axios({
          method: GET,
          url: `/vehicles${query}`,
          // eslint-disable-next-line no-undef, no-return-assign
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setVehicleData(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();

    return () => cancel();
    // When chartFilters changes, call the API again
  }, [chartFilters, params]);
  // console.log(vehicleData);

  return (
    <Grid
      justify="space-around"
      gutter="xs"
      px="10px"
      py="10px"
      size="max-width"
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid.Col md={2} lg={2}>
            <ChartForm
              chartFilters={chartFilters}
              setChartFilters={setChartFilters}
              loading={loading}
              urlQuery={urlQuery}
              setUrlQuery={setUrlQuery}
              navigate={navigate}
              currentCamera={currentCamera}
              setCurrentCamera={setCurrentCamera}
            />
          </Grid.Col>
          <Grid.Col md={10} lg={10}>
            <LineChart
              vehicleData={vehicleData}
              currentCamera={currentCamera}
              chartFilters={chartFilters}
            />
          </Grid.Col>
        </>
      )}
    </Grid>
  );
}

export default ChartPage;
// https://yarnpkg.com/package/react-charts#readme
