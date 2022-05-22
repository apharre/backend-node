/* eslint-disable react/prop-types */
import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import { Table } from "@mantine/core";

function InfoWindowDisplay({ key, selected }) {
  /**
   * The information window that is diplayed when a camera icon is hovered on the map page
   *
   * @param {!key} string the unique identifier for the different cameras on the map page
   * @param {!selected} obj the information for the current camera
   *
   *@return {!InfoWindow} ReactObject the info window that is displayed for the current camera on the maps page
   */

  /** TEMPORARY DIRECTION INFORMATION UNTIL BACKEND IS FIGURED OUT */
  // Flickering due to content being created as it is being loaded into infowindow
  let directionOne;
  let directionTwo;
  let speedOne;
  let speedTwo;

  if (selected.direction === "EW") {
    directionOne = "EB";
    directionTwo = "WB";
  } else {
    directionOne = "NB";
    directionTwo = "SB";
  }
  const randomSpeed = Math.floor(Math.random() * 9);
  const randomSpeed2 = Math.floor(Math.random() * 8);

  if (selected.status === "normal") {
    speedOne = 65 + randomSpeed;
    speedTwo = 64 + randomSpeed2;
  } else if (selected.status === "reduced") {
    speedOne = 42 + randomSpeed;
    speedTwo = 41 + randomSpeed2;
  } else {
    speedOne = 20 + randomSpeed;
    speedTwo = 20 + randomSpeed2;
  }

  return (
    <InfoWindow key={key} position={{ lat: selected.lat, lng: selected.lng }}>
      <Table striped captionSide="top" horizontalSpacing="lg">
        <caption style={{ color: "black", fontWeight: "bold" }}>
          {selected.name}
        </caption>
        <tbody>
          <tr>
            <td>Traffic Status</td>
            <td align="right">{selected.status}</td>
          </tr>
          <tr>
            <td>{directionOne} Avg Speed Last 30 min</td>
            <td align="right">{speedOne}</td>
          </tr>
          <tr>
            <td>{directionTwo} Avg Speed Last 30 min</td>
            <td align="right">{speedTwo}</td>
          </tr>
        </tbody>
      </Table>
    </InfoWindow>
  );
}

export default InfoWindowDisplay;
