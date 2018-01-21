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
    Meteor.call('getCityPaths', city, (error, paths)=>{
      console.log(paths)
      if(!error) this.setState({city, view, paths})
    })

    Meteor.call('getCityPhoto', city, (error, paths)=>{
      console.log(paths)
    })

  }

  render() {
    switch(this.state.view){
      case 1:
        return <Home selectCity={this.selectCity}/>
      case 2:
        return <CityPaths paths={this.state.paths}/>
      default:
        return
    }
  }

}

export default App
