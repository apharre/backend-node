/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Table, Text, Loader, Container, Center } from "@mantine/core";
import axios from "axios";

import { GET } from "../../../constants/actionTypes";

// eslint-disable-next-line react/prop-types
function SpeedChangeTable() {
  /**
   * Creates the speed change data table for the maps page
   *
   * @param {!sortedCameras}
   */

  const [metricData, setMetricData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let cancel;

    const fetchMetricData = async () => {
      setLoading(true);
      try {
        const { data } = await axios({
          method: GET,
          url: `/metrics`,
          // eslint-disable-next-line no-return-assign
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setMetricData(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchMetricData();

    // return () => cancel();
  }, []);

  // const rows = sortedCameras.map((camera) => (
  //   <tr key={camera[0]}>
  //     <td>{camera[0]}</td>
  //     <td align="center">{camera[1]}</td>
  //   </tr>
  // ));
  const rows = metricData.map((camera) => (
    <tr key={camera[0]}>
      <td>{camera[0]}</td>
      <td align="center">{camera[1]}</td>
    </tr>
  ));

  return (
    <Container>
      {loading ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <Table
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[0],
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <thead>
            <tr>
              <th>
                <Text align="center">Location</Text>
              </th>
              <th>
                <Text align="center">% Speed Change Last 10 Min</Text>
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
    </Container>
  );
}

export default SpeedChangeTable;
