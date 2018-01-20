import React, { Component } from 'react';

import Login from './Login'
import CheckpointMaker from './CheckpointMaker'
import {MapWithADirectionsRenderer} from './MyMapComponent'

// App component - represents the whole app
export default class App extends Component {
  render() {

    const cities = this.props.cities
    console.log(cities)

        // {React.createElement(MapWithAMarker, {
        //   googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places,direction",
        //   loadingElement: <div style={{ height: `100%` }} >Loadiiiing</div>,
        //   containerElement: <div style={{ height: `400px`, border: '2px solid red' }} />,
        //   mapElement: <div style={{ height: `100%`, border: '3px solid green' }} />,
        // })}
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <Login/>
        <CheckpointMaker/>
        {React.createElement(MapWithADirectionsRenderer,{})}
      </div>
    );
  }
}
