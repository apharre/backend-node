import React from "react";

function cameraMarker() {
  return (
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
  );
}
