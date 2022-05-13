/* eslint-disable react/prop-types */
import React from "react";
import { InfoWindow } from "@react-google-maps/api";

// eslint-disable-next-line react/prop-types
function InfoWindowDisplay({ selected }) {
  return (
    <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}>
      <div>
        <p>{selected.name}</p>
        <p>WB Traffic flow is {selected.status}</p>
        <p>EB Traffic flow is {selected.status}</p>
        <p>WB Avg Speed past 30 minutes: 63</p>
        <p>EB Avg Speed past 30 minutes: 62</p>
      </div>
    </InfoWindow>
  );
}

export default InfoWindowDisplay;
