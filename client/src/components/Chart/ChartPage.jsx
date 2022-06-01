/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Grid } from "@mantine/core";
import { useLocation } from "react-router-dom";

import ChartForm from "./chartForm/ChartForm";
import LineChart from "./LineChart/LineChart";
import { GET } from "../../constants/actionTypes";

// eslint-disable-next-line no-unused-vars
function ChartPage({ currentCamera, setCurrentCamera }) {
  const location = useLocation();
  // const history = useHistory();

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

  // eslint-disable-next-line no-unused-vars
  const [urlQuery, setUrlQuery] = useState("");

  // effects for when the API is called
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

  return (
    <Grid
      justify="space-around"
      gutter="xs"
      px="10px"
      py="10px"
      size="max-width"
    >
      <Grid.Col md={2.5} lg={2.5}>
        <ChartForm />
        {/* <ChartForm
              chartFilters={chartFilters}
              setChartFilters={setChartFilters}
              loading={loading}
              urlQuery={urlQuery}
              setUrlQuery={setUrlQuery}
              navigate={navigate}
              currentCamera={currentCamera}
              setCurrentCamera={setCurrentCamera}
            /> */}
      </Grid.Col>
      <Grid.Col md={9.5} lg={9.5}>
        <LineChart
          // vehicleData={vehicleData}
          // currentCamera={currentCamera}
          // chartFilters={chartFilters}
          isLoading={loading}
        />
      </Grid.Col>
    </Grid>
  );
}

export default ChartPage;
// https://yarnpkg.com/package/react-charts#readme
