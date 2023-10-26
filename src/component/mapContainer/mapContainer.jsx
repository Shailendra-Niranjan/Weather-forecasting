import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-map-react';

class MapContainer extends Component {
  onMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
  };

  render() {
    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClick}
        initialCenter={{ lat: 0, lng: 0 }}
        zoom={10}
      >
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWDd9GkfbtYVuTZ2J2kS3uLMo15z8NzOY',
})(MapContainer);