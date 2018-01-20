import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import {Cities} from '../../imports/Cities'
import City from './City'

class CityFinder extends Component {

  constructor(props) {
    super(props)

    this.state = {
      similarCities: []
    }

    this.getSimilarCities = this.getSimilarCities.bind(this)
  }

  areSimilarCities(city_1, city_2) {
    return city_1.toLowerCase().includes(city_2.toLowerCase())
  }

  getSimilarCities(name) {
    let that = this
    const similarCities = this.props.cities.filter(
      // function(city){ return city.name.toLowerCase().includes(name.toLowerCase()) }
      function(city){ return that.areSimilarCities(city.name, name) }
    )
    this.setState({similarCities: similarCities})
  }

  renderCity(city) {
    console.log(city)
    return <City key={city._id} name={city.name} country={city.country}/>
  }

  render() {
    const cities = this.state.similarCities
    return (
      <div>
        <input type="text" onChange={(e) => this.getSimilarCities(e.target.value)}/>
        <ul>
          {
            cities.length > 0 ?
              cities.map(this.renderCity)
            :
              null
          }
        </ul>
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    cities: Cities.find().fetch(),
  };
})(CityFinder);
