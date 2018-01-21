import React, { Component } from 'react';
import Home from './container/Home'

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
    console.log("mierda")
    const view = 1
    if(city != null || city == this.state.city) {
      view = 2
    }
    this.setState({city, view})

  }

  render() {
    switch(this.state.view){
      case 1:
       return <Home selectCity={this.selectCity}/>
      default:
        return <div>{this.state.city}</div>
    }
  }

}

export default App
