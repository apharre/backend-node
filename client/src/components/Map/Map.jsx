/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";

import { CircularProgress } from "@material-ui/core";

import CustomMarker from "./Marker/CustomMarker";
import InfoWindowDisplay from "./Marker/InfoWindowDisplay";
import mapStyles from "./mapStyles";
import { getAllCameras } from "../../actions";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "90vh",
};
const center = {
  lat: 39.739235,
  lng: -104.99025,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map({ currentCamera, setCurrentCamera }) {
  /**
   * The map element that is rendered on the map page
   * Calls the getAllCameras function to retrieve the camera info and display them
   *
   * @param {!currentCamera} obj the current camera that appears in the info box and the charts page
   * @param {!setCurrentCamera} func a function that sets and resets the current camera object
   *
   * @return {!GoogleMap} ReactObject the elements that make up the maps page
   */
  const cameras = useSelector((state) => state.cameras);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCameras());
  }, [dispatch]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAiRGEqlNf4ACBA6RfhVKdgkb5c_DUhbQY", // process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return !cameras.length ? (
    <CircularProgress />
  ) : (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
      >
        {cameras.map((camera) => (
          <CustomMarker
            key={camera._id}
            camera={camera}
            setCurrentCamera={setCurrentCamera}
          />
        ))}
        {currentCamera ? (
          <InfoWindowDisplay key={currentCamera._id} selected={currentCamera} />
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default Map;
