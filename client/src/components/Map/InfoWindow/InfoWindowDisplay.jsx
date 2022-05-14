/* eslint-disable react/prop-types */
import React from "react";
// import Math from ;
import { InfoWindow } from "@react-google-maps/api";
import { Table } from "@mantine/core";
// import { fontWeight } from "@mui/system";

// eslint-disable-next-line react/prop-types
function InfoWindowDisplay({ key, selected }) {
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
            <td>{selected.status}</td>
          </tr>
          <tr>
            <td>{directionOne} Avg Speed Last 30 min</td>
            <td>{speedOne}</td>
          </tr>
          <tr>
            <td>{directionTwo} Avg Speed Last 30 min</td>
            <td>{speedTwo}</td>
          </tr>
        </tbody>
      </Table>
    </InfoWindow>
  );
}

export default InfoWindowDisplay;
