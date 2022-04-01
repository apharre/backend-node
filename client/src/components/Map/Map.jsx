import React, { useEffect } from "react";
import {
  GoogleMap,
  // MarkerClusterer,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";

import { CircularProgress } from "@material-ui/core";

import mapStyles from "./mapStyles";
import cameraIcon from "./Icons/camera_icon.png";

// import { getAllCameras } from "../../actions";
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

/** The map element that is rendered on the map page
 * Calls the getAllCameras function to retrieve the cameras and display them
 */

function Map() {
  const cameras = useSelector((state) => state.cameras);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCameras());
  }, [dispatch]);

  const [selected, setSelected] = React.useState(null);

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
        // onClick={(event) => {
        //   setCameras((current) => [
        //     ...current,
        //     {
        //       lat: event.latLng.lat(),
        //       lng: event.latLng.lng(),
        //       time: new Date(),
        //     },
        //   ]);
        // }}
      >
        {cameras.map((camera) => (
          <Marker
            key={camera._id}
            position={{ lat: camera.lat, lng: camera.lng }}
            icon={{
              url: cameraIcon,
              // eslint-disable-next-line no-undef
              scaledSize: new window.google.maps.Size(25, 25),
              // eslint-disable-next-line no-undef
              origin: new window.google.maps.Point(0, 0),
              // eslint-disable-next-line no-undef
              anchor: new window.google.maps.Point(12, 12),
            }}
            onClick={() => {
              setSelected(camera);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <p>{selected.name}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default Map;
