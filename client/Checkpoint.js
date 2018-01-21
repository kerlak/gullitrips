import React, { Component } from 'react';

// App component - represents the whole app
class Checkpoint extends Component {
  constructor(props) {
    super(props)
  }

  drawCheckpointCard(checkpoint) {
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
              <div className="hotels">
                <div className="cost">
                  134 €
                </div>
                <i class="hotel_left fa fa-bed" aria-hidden="true"></i>
              </div>
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
