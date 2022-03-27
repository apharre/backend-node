import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "@googlemaps/react-wrapper";
import {
  GoogleMap,
  // MarkerClusterer,
  useLoadScript,
  Marker,
  // InfoWindow,
} from "@react-google-maps/api";
// import Container from "@mui/material/Container";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import mapStyles from "./mapStyles";
import cameraIcon from "./Icons/camera_icon.png";

// import { getAllCameras } from "../../actions"; //               UNCOMMENT

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

function Map() {
  // const dispatch = useDispatch();
  // const cameraInfo = dispatch(getAllCameras());
  // console.log(cameraInfo);

  const cameras = useSelector((state) => state.cameras);
  console.log(cameras);

  // const [cameras, setCameras] = React.useState([]);

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
        zoom={12}
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
        {cameras.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: cameraIcon,
              // eslint-disable-next-line no-undef
              scaledSize: new window.google.maps.Size(25, 25),
              // eslint-disable-next-line no-undef
              origin: new window.google.maps.Point(0, 0),
              // eslint-disable-next-line no-undef
              anchor: new window.google.maps.Point(12, 12),
            }}

            // icon={{ url: `client/public/camera_icon.png` }}
            // client/src/components/Map/Map.jsx
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;
