// import React, { Component } from 'react'

// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
// } from "react-google-maps";
//
//
//
// export const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={15}
//     defaultCenter={{ lat: 40.4484188, lng: -3.7033593 }}
//   >
//     <Marker
//       position={{ lat: 40.4484188, lng: -3.7033593 }}
//     />
//   </GoogleMap>
// ));


import React, { Component } from 'react';
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";

//key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg
export default MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD7aaeSGh3oTwLZVqEotPTwylgYtwfUYZ4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(41.8507300, -87.6512600),
        destination: new google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={4}
    defaultOptions={{
      scrollwheel: false,
      draggable: false,
      disableDefaultUI: true
    }}
    defaultCenter={new google.maps.LatLng(51.405515, 8.5779502)}
  />
)
