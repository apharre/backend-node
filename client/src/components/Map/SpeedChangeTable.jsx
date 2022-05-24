/* eslint-disable react/prop-types */
import React from "react";
import { Table, Text } from "@mantine/core";
// import { element } from "prop-types";

// eslint-disable-next-line react/prop-types
function SpeedChangeTable({ sortedCameras }) {
  /**
   * Creates the speed change data table for the maps page
   *
   * @param {!sortedCameras}
   */
  const rows = sortedCameras.map((camera) => (
    <tr key={camera[0]}>
      <td>{camera[0]}</td>
      <td align="center">{camera[1]}</td>
    </tr>
  ));

  return (
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
  );
}

export default SpeedChangeTable;
