import React, { Component } from 'react';

class Avatar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: null
    }

    this.getRandomUser = this.getRandomUser.bind(this)
  }

  componentDidMount(){
    this.getRandomUser()
  }

  getRandomUser() {
    return fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((responseJson) => {
        const photo = responseJson.results[0].picture.large
        this.setState({photo})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {stars} = this.props
    return (
      <div className="avatar">
        {
          this.state.photo != null ?
            <img src={this.state.photo}/>
          :
            null
        }
      </div>
    )
  }
}

export default Avatar
