import React, { Component } from 'react';
//import { withTracker } from 'meteor/react-meteor-data';
//mport {Hotels} from '../imports/Hotels'

class HotelsCombinedCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hotelsNear: [],
      href:null,
      lowestRate:50
    }
    const {lat, lon} = this.props

    this.getHotelsNear(lat, lon)
  }

  getHotelsNear(lat, lon) {
    console.log('llamando hoteles')
    Meteor.call('getHotels', lat, lon, (error, hotelsNear)=>{
      console.log(error, hotelsNear)
      console.log("Link" + hotelsNear[0].href)
      console.log("Precio: "+hotelsNear[0].lowestRate + "€")
      this.setState({
        href:hotelsNear[0].href,
        lowestRate: hotelsNear[0].lowestRate
      })
    })


  }
  render() {
    const {cityPath, cityName} = this.props


    return (
      <div>
        {this.props.hotelsNear}
        <a href={this.props.href}>Enlase aqui</a>
        <span className="price">{this.props.lowestRate}</span>
      </div>
    )
  }
}

export default HotelsCombinedCard
