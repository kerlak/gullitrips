import React, { Component } from 'react';
import Home from './container/Home'
import MapThumb from './paths/MapThumb'

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 1,
      city: null
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

  }

  render() {
    switch(this.state.view){
      case 1:
       return <Home selectCity={this.selectCity}/>
      default:
        return <div>{React.createElement(MapThumb, {path:this.state.paths[0]})}</div>
    }
  }

}

export default App
