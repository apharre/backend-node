import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Grid } from "@mui/material";
import faker from "faker";
import axios from "axios";

import { CircularProgress, Container } from "@material-ui/core";
import useStyles from "./styles";
import ChartForm from "./chartForm/ChartForm";
import { GET } from "../../constants/actionTypes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Apharre Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const chartFormattingdata = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function LineChart() {
  const classes = useStyles();

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
              <Line
                className={classes.lineChart}
                options={options}
                data={chartFormattingdata}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default LineChart;
