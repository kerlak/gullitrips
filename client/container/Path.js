import React, { Component } from 'react';
import CityFinder from '../cities/CityFinder'
import TopNav from '../TopNav'
import MapWithADirectionsRenderer from '../MyMapComponent'

// App component - represents the whole app
class Path extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="home_header">
          <TopNav goHome={this.props.goHome}/>
        </div>
        {this.props.cityPath}
      </div>
    );
  }
}

export default Path
