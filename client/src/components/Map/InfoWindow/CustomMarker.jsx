/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from "react";

import { Marker } from "@react-google-maps/api";
import cameraIconBlack from "../Icons/camera_icon_green.png";
import cameraIconOrange from "../Icons/camera_icon_orange.png";
import cameraIconRed from "../Icons/camera_icon_red.png";

// eslint-disable-next-line no-unused-vars
function CustomMarker({ key, camera, setSelected }) {
  let iconColor;

  if (camera.status === "reduced") {
    iconColor = cameraIconOrange;
  } else if (camera.status === "heavy") {
    iconColor = cameraIconRed;
  } else {
    iconColor = cameraIconBlack;
  }

  return (
    <Marker
      key={key}
      position={{ lat: camera.lat, lng: camera.lng }}
      icon={{
        url: iconColor,
        // eslint-disable-next-line no-undef
        scaledSize: new window.google.maps.Size(25, 25),
        // eslint-disable-next-line no-undef
        origin: new window.google.maps.Point(0, 0),
        // eslint-disable-next-line no-undef
        anchor: new window.google.maps.Point(12, 12),
      }}
      onMouseOver={() => {
        setSelected(camera);
      }}
      onMouseOut={() => {
        setSelected(null);
      }}
    />
  );
}

export default CustomMarker;

// Marker.propTypes = {
//   camera: PropTypes.object.isRequired,
//   _id: PropTypes.string.isRequired,
//   lat: PropTypes.number.isRequired,
//   lng: PropTypes.number.isRequired,
// };
