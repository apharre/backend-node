/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from "react";

import { Marker } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import cameraIconBlack from "../Icons/camera_icon_green.png";
import cameraIconOrange from "../Icons/camera_icon_orange.png";
import cameraIconRed from "../Icons/camera_icon_red.png";

function CustomMarker({ key, camera, setCurrentCamera }) {
  /**
   * The custom marker used in the google map for displaying information
   * @param {!key} str The unique key for each camera marker on the map
   * @param {!camera} obj The camera information from the api call
   * @param {!setCurrentCamera} func Sets the current camera object from the list retrieved in the API call
   * @returns {ReactObject} The elements that make up a custom marker
   */
  // allows for navigation from current (map) page to the chart page
  const navigate = useNavigate();

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
        scaledSize: new window.google.maps.Size(22, 22),
        // eslint-disable-next-line no-undef
        origin: new window.google.maps.Point(0, 0),
        // eslint-disable-next-line no-undef
        anchor: new window.google.maps.Point(12, 12),
      }}
      onMouseOver={() => {
        setCurrentCamera(camera);
      }}
      onMouseOut={() => {
        setCurrentCamera(null);
      }}
      onClick={() => {
        setCurrentCamera(camera);
        navigate("/chart");
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
