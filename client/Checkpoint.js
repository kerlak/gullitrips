import React, { Component } from 'react';

// App component - represents the whole app
class Checkpoint extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: null,
      price: null
    }

  }

  componentDidMount(){
    Meteor.call('getHotels', this.props.checkpoint.lat, this.props.checkpoint.lon, (error, hotelsNear)=>{
      console.log(error, hotelsNear)
      console.log("Link" + hotelsNear[0].href)
      console.log("Precio: "+hotelsNear[0].lowestRate + "€")
      console.log(hotelsNear[0].key)
      this.setState({
        url:'https://www.hotelscombined.es/Hotel/' + hotelsNear[0].key.split(":")[1] + '.htm',
        price: hotelsNear[0].lowestRate
      })
    })
  }

  drawCheckpointCard(checkpoint) {
    const {price, url} = this.state
    return (
      <div className="path_card checkpoint_card">
        <div className="checkpoint">
          <div className="horizontal_checkpoint">
            <div className="point"></div>
            <div className="data">
              <div className="element">{checkpoint.name}</div>
              <div className="element description">{checkpoint.description}</div>
              <div className="element rating">
                {checkpoint.rating} <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              {
                price != null && url != null ?

                  <a className="hotels" target="_blank" href={url}>
                    <div className="cost">
                      {price} €
                    </div>
                    <i class="hotel_left fa fa-bed" aria-hidden="true"></i>
                  </a>

                :

                  null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { checkpoint } = this.props
    return (
      this.drawCheckpointCard(checkpoint)
    );
  }
}

export default Checkpoint
