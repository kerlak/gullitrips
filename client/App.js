import React, { Component } from 'react';
import Home from './container/Home'
import CityPaths from './container/CityPaths'
import MapThumb from './paths/MapThumb'

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 1,
      city: null,
      paths: []
    }

    this.selectCity = this.selectCity.bind(this)
  }


  selectCity(city){
    const view = 1
    if(city != null || city == this.state.city) {
      view = 2
    }
    Meteor.call('getCityPaths', city, (error, city_paths)=>{
      console.log('citytpaaath',city_paths)
      if(!error) this.setState({city, view, city_paths})
    })


  }

  render() {
    switch(this.state.view){
      case 1:
        return <Home selectCity={this.selectCity}/>
      case 2:
        return <CityPaths city_paths={this.state.city_paths}/>
      default:
        return
    }
  }

}

export default App
