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
      city_id: null,
      city_name: null,
      city_paths: []
    }

    this.selectCity = this.selectCity.bind(this)
    this.goHome = this.goHome.bind(this)
  }


  selectCity(city_id, city_name){
    const view = 1
    if(city_id != null || city_id == this.state.city_id) {
      view = 2
    }
    Meteor.call('getCityPaths', city_id, (error, city_paths)=>{
      if(!error) this.setState({city_id, view, city_name, city_paths})
    })
  }

  goHome(){
    this.setState({view: 1, city_id: null, city_paths: []})
  }

  render() {
    switch(this.state.view){
      case 1:
        return <Home selectCity={this.selectCity} goHome={this.goHome}/>
      case 2:
        return <CityPaths cityPaths={this.state.city_paths} cityName={this.state.city_name} goHome={this.goHome}/>
      default:
        return
    }
  }

}

export default App
