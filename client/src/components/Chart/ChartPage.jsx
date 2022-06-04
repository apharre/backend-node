/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Grid } from "@mantine/core";
import { useLocation } from "react-router-dom";

import ChartForm from "./chartForm/ChartForm";
import LineChart from "./LineChart/LineChart";
import { GET } from "../../constants/actionTypes";
import newQuery from "./chartForm/chartQuery/chartQueryClass";

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
  const [chartFilters, setChartFilters] = useState({});

  // eslint-disable-next-line no-unused-vars
  const [urlQuery, setUrlQuery] = useState("");

  // create an effect for updating the urlQuery object when the ChartFilters object changes
  // useEffect()

  // effects for when the API is called
  useEffect(() => {
    // https://hmos.dev/en/how-to-cancel-at-axios
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    setLoading(true);
    const fetchData = async () => {
      // setUrlQuery(chartQueryCreator(chartFilters));
      console.log("FROM CHART PAGE", chartFilters);
      // const chartQuery2 = new ChartQuery(chartFilters);
      // console.log("NEW QUERY", chartQuery2.newQuery());
      const newQString = newQuery(chartFilters);
      setUrlQuery(newQString);
      console.log("new Query", urlQuery);
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
          // cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setVehicleData(data.data);
        console.log(urlQuery);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error, "error");
        }
        console.log(error);
      }
    };
    fetchData();

    // return () => cancel();
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
        <ChartForm setChartFilters={setChartFilters} />
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
