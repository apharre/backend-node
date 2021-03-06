/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";
import { Loader, Grid, Center, Container } from "@mantine/core";

import CustomMarker from "./Marker/CustomMarker";
import InfoWindowDisplay from "./Marker/InfoWindowDisplay";
import SpeedChangeTable from "./SpeedChangeTable/SpeedChangeTable";
import mapStyles from "./mapStyles";
import { getAllCameras } from "../../actions";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
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

// eslint-disable-next-line no-unused-vars
function MapPage({ currentCamera, setCurrentCamera }) {
  /**
   * The map element and auxiliaries that are rendered on the map page
   * Calls the getAllCameras function to retrieve the camera info and display them
   * @param {!currentCamera} obj The current camera that appears in the info box and the charts page
   * @param {!setCurrentCamera} hook A function hook that sets and resets the current camera object
   * @return {ReactObject} The elements that make up the maps page
   */
  const cameras = useSelector((state) => state.cameras);
  const dispatch = useDispatch();

  const [hoverCamera, setHoverCamera] = useState();

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
    <Container>
      <Center>
        <Loader />
      </Center>
    </Container>
  ) : (
    <Grid
      justify="space-around"
      gutter="xs"
      px="10px"
      py="10px"
      size="max-width"
    >
      <Grid.Col md={3} lg={3} height="90vh">
        <SpeedChangeTable />
      </Grid.Col>
      <Grid.Col md={9} lg={9}>
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
              setHoverCamera={setHoverCamera}
              setCurrentCamera={setCurrentCamera}
            />
          ))}
          {hoverCamera ? (
            <InfoWindowDisplay key={hoverCamera._id} selected={hoverCamera} />
          ) : null}
        </GoogleMap>
      </Grid.Col>
    </Grid>
  );
}

export default MapPage;
