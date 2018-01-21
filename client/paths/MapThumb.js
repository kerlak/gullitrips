import React, { Component } from 'react';
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";

//key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg
export default MapThumb = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?&key=AIzaSyD7aaeSGh3oTwLZVqEotPTwylgYtwfUYZ4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      let checkpoints = this.props.path.checkpoints
      console.log(checkpoints)
      if(checkpoints.length < 2)return
      let originCp = checkpoints[0]
      let origin = new google.maps.LatLng(originCp.lat, originCp.lon)
      let destinationCp = checkpoints[ checkpoints.length - 1 ]
      let destination = new google.maps.LatLng(destinationCp.lat, destinationCp.lon)
      let waypoints = []
      console.log(originCp,destinationCp)
      for( let i = 1; i < checkpoints.length - 1; i++ ){
        let cp = checkpoints[i]
        console.log(cp)
        waypoints.push({
          location: new google.maps.LatLng(cp.lat, cp.lon),
          stopover: true
        })
      }
      let travelMode = google.maps.TravelMode.WALKING
      DirectionsService.route({origin, destination, travelMode, waypoints}, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error('error fetching directions',result, status);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultOptions={{
      scrollwheel: false,
      draggable: false,
      disableDefaultUI: true
    }}
    defaultZoom={10}
    defaultCenter={new google.maps.LatLng(40.4299878,-3.6960338)}
    disableDefaultUI={true}
    draggable={false}
  >
    {props.directions && <DirectionsRenderer
      defaultOptions={{
        suppressMarkers: true,
        preserveViewport: false,
        disableDefaultUI: true
      }}
      directions={props.directions} />}
  </GoogleMap>
)
