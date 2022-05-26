/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Table, Text, ScrollArea } from "@mantine/core";
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

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let cancel;

    const fetchMetricData = async () => {
      try {
        const { data } = await axios({
          method: GET,
          url: `/metrics`,
          // eslint-disable-next-line no-return-assign
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setMetricData(data.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchMetricData();
    return () => cancel();
  }, []);

  const rows = metricData.map((camera) => (
    <tr key={camera[0]}>
      <td>{camera.name}</td>
      <td align="center">
        <Text align="center">{camera.nsew}</Text>
      </td>
      {camera.percent_speed_change < 1 ? (
        <td align="right">
          <Text size="sm" color="red">
            {camera.percent_speed_change}%
          </Text>
        </td>
      ) : (
        <td align="right">
          <Text size="sm">{camera.percent_speed_change}%</Text>
        </td>
      )}
    </tr>
  ));

  return (
    <ScrollArea style={{ height: "90vh" }}>
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
              <Text align="left">Location</Text>
            </th>
            <th>
              <Text align="center">Direction</Text>
            </th>
            <th>
              <Text align="center">10 Min Speed Change</Text>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default SpeedChangeTable;
