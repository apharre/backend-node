import React, { useEffect } from "react";
import {
  GoogleMap,
  // MarkerClusterer,
  useLoadScript,
  // Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";

import { CircularProgress } from "@material-ui/core";

import CustomMarker from "./InfoWindow/CustomMarker";
import mapStyles from "./mapStyles";
// import cameraIconBlack from "./Icons/camera_icon_black.png";
// import cameraIconOrange from "./Icons/camera_icon_orange.png";
// import cameraIconRed from "./Icons/camera_icon_red.png";

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

  // eslint-disable-next-line no-unused-vars
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
      >
        {cameras.map((camera) => (
          <CustomMarker
            key={camera._id}
            camera={camera}
            setSelected={setSelected}
          />
        ))}
        {selected ? (
          <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}>
            <div>
              <p>{selected.name}</p>
              <p>WB Traffic flow is {selected.status}</p>
              <p>EB Traffic flow is {selected.status}</p>
              <p>WB Avg Speed past 30 minutes: 63</p>
              <p>EB Avg Speed past 30 minutes: 62</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default Map;
