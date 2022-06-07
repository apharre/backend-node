/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Grid, Container, Paper } from "@mantine/core";
import { useLocation } from "react-router-dom";

import ChartForm from "./chartForm/ChartForm";
import LineChart from "./LineChart/LineChart";
import { GET } from "../../constants/actionTypes";
import newQuery from "./chartForm/chartQuery/chartQueryFunctions";

// eslint-disable-next-line no-unused-vars
function ChartPage({ currentCamera, setCurrentCamera }) {
  const location = useLocation();
  const params = location.search ? location.search : null;

  /* ____________________ Component State ____________________ */
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [vehicleData, setVehicleData] = useState([]);
  const [chartFilters, setChartFilters] = useState({});
  const [urlQuery, setUrlQuery] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("currentCamera", JSON.stringify(currentCamera));
  // }, [currentCamera]);

  useEffect(() => {
    /**
     * Sets the UrlQuery when the chartFilters object changes, which only changes when the "submit" button on the charts page is clicked
     */
    if (
      chartFilters.combinedDates != null &&
      chartFilters.combinedDates !== undefined &&
      chartFilters.querySelectedVehicles != null &&
      chartFilters.querySelectedVehicles !== undefined
      // chartFilters.combinedDates &&
      // chartFilters.querySelectedVehicles
    ) {
      setUrlQuery(newQuery(chartFilters));
    }
  }, [chartFilters]);

  useEffect(() => {
    /**
     * Makes the API call to the Backend and returns the data for the chart when urlQuery is changed
     */
    // https://hmos.dev/en/how-to-cancel-at-axios
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    setLoading(true);
    const fetchData = async () => {
      console.log("new Query", currentCamera, urlQuery);
      try {
        let query;
        if (params && !urlQuery) {
          query = params;
        } else {
          query = urlQuery;
        }
        const { data } = await axios({
          method: GET,
          url: `/vehicles?${query}`,
          cancelToken: source.token,
        });
        setVehicleData(data.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error, "error");
        }
        console.log(error);
      }
    };
    fetchData();
  }, [urlQuery]);

  return (
    <div>
      <Container>
        <Paper>{currentCamera.name}</Paper>
      </Container>
      <Grid
        justify="space-around"
        gutter="xs"
        px="10px"
        py="10px"
        size="max-width"
      >
        <Grid.Col md={2.5} lg={2.5}>
          <ChartForm
            currentCamera={currentCamera}
            setChartFilters={setChartFilters}
          />
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
    </div>
  );
}

export default ChartPage;
