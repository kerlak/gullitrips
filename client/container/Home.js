import React, { Component } from 'react';
import CityFinder from '../cities/CityFinder'

// App component - represents the whole app
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <header></header>
        <CityFinder selectCity={this.props.selectCity}/>
      </div>
    );
  }
}

export default Home
