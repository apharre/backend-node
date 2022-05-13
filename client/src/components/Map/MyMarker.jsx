import React from "react";

import { Marker, InfoWindow } from "@react-google-maps/api";

export default class MapMarker extends React.Component {
  // state = {
  //   mapMarker: null,
  //   showingInfoWindow: false
  // };
  constructor(props) {
    super(props)
    this.state = {
      mapMarker = null,
      showingInfoWindow = false,
    }
  }

  onMarkerClick = (props) => {
    this.setState({
      showingInfoWindow: true
    });
  };

  onInfoWindowClose = () =>
    this.setState({
      showingInfoWindow: false
    });

  onLoad = (mapMarker) => {
    this.setState({
      mapMarker
    });
  };

  render() {
    const { clusterer, markerData } = this.props;

    return (
      <Marker
        clusterer={clusterer}
        onLoad={this.onLoad}
        position={{
          lat: markerData.lat,
          lng: markerData.lng
        }}
        clickable
        onClick={this.onMarkerClick}
      >
        {this.state.showingInfoWindow === true && (
          <InfoWindow
            position={{
              lat: markerData.lat,
              lng: markerData.lng
            }}
            onCloseClick={this.onInfoWindowClose}
          >
            <div>
              <p>hello</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}