import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
// import faker from "faker";
import axios from "axios";

import { CircularProgress, Container } from "@material-ui/core";
// import useStyles from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import ChartForm from "./chartForm/ChartForm";
import { GET } from "../../constants/actionTypes";
import LineChart from "./LineChart/LineChart";

function ChartPage() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.search);

  const params = location.search ? location.search : null;

  /* *************** Component State *************** */
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [vehicleData, setVehicleData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [chartFilters, setChartFilters] = useState({
    // [filters, setFilters]
    vehicleType: "All",
    lane: "All",
    speed: "All",
    // count: "",
    temp: "All",
    date: "Past Hour",
  });
  // eslint-disable-next-line no-unused-vars
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
    <Container>
      <Grid container alignItems="stretch">
        {loading ? (
          <div>
            {" "}
            <CircularProgress size="3rem" thickness={5} />{" "}
          </div>
        ) : (
          <>
            <Grid item xs={2} md={2}>
              <ChartForm
                chartFilters={chartFilters}
                setChartFilters={setChartFilters}
                loading={loading}
                urlQuery={urlQuery}
                setUrlQuery={setUrlQuery}
                navigate={navigate}
              />
            </Grid>
            <Grid item xs={9} md={9}>
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
