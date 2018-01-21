import React, { Component } from 'react';
import Home from './container/Home'
import CityPaths from './container/CityPaths'
import Path from './container/Path'
import MapThumb from './paths/MapThumb'

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 1,
      city_id: null,
      city_name: null,
      city_paths: [],
      city_path: null
    }

    this.selectCity = this.selectCity.bind(this)
    this.goHome = this.goHome.bind(this)
    this.selectPath = this.selectPath.bind(this)
  }


  selectCity(city_id, city_name){
    const view = 1
    if(city_id != null || city_id == this.state.city_id) {
      view = 2
    }
    Meteor.call('getCityPaths', city_id, (error, city_paths)=>{
      console.log(city_paths)
      if(!error) this.setState({city_id, view, city_name, city_paths})
    })
  }

  selectPath(path){
    console.log(path)
    this.setState({view: 3, city_path: path})
  }

  goHome(){
    this.setState({view: 1, city_id: null, city_paths: [], city_path: null})
  }

  render() {
    switch(this.state.view){
      case 1:
        return <Home selectCity={this.selectCity} goHome={this.goHome}/>
      case 2:
        return <CityPaths
                    cityPaths={this.state.city_paths}
                    cityName={this.state.city_name}
                    selectPath={this.selectPath}
                    goHome={this.goHome}
                />
      case 3:
        return <Path cityPath={this.state.city_path} cityName={this.state.city_name} goHome={this.goHome}/>
      default:
        return
    }
  }

}

export default App
