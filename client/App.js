import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import {Cities} from '../imports/Cities'

// App component - represents the whole app
class App extends Component {
  render() {

    const cities = this.props.cities
    console.log(cities)
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {cities.map((city,idx)=><li key={idx}>{city.name} ({city.country})</li>)}
        </ul>
      </div>
    );
  }
}


export default withTracker(() => {

  return {
    cities: Cities.find().fetch(),
  };
})(App);
