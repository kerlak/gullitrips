import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import {Cities} from '../imports/Cities'
import {Paths} from '../imports/Paths'
import {Checkpoints} from '../imports/Checkpoints'


// App component - represents the whole app
class Test extends Component {
  constructor(props){
    super(props)
    this.getCityPaths = this.getCityPaths.bind(this)

    this.state = {paths: []}

  }
  getCityPaths(city_id){
    Meteor.call('getCityPaths', city_id, (error, paths)=>{
      if(!error) this.setState({paths})
      console.log(paths)
    })
  }
  render() {
    const cities = this.props.cities
    // console.log(this.props.checkpoints)
    // console.log(this.props.paths)
    // console.log(cities)
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        {React.createElement(MapWithADirectionsRenderer, {})}
        
        <ul>
          {cities.map((city,idx)=>
            <li key={idx}>
              {city.name} ({city.country})
              <button onClick={()=>this.getCityPaths(city._id)}>View paths</button>
            </li>
          )}
        </ul>
        Paths
        <ul>
          {this.state.paths.map((path,idx)=><li key={idx}>
            {path.name} - {path.description} - Checkpoints:
            <ul>
              {path.checkpoints.map((cp,idx2)=><li key={idx2}>
                {cp.name} - {cp.description}
              </li>)}
            </ul>
          </li>)}
        </ul>
      </div>
    );
  }
}


export default withTracker(() => {

  return {
    cities: Cities.find().fetch(),
    checkpoints: Checkpoints.find().fetch(),
    paths: Paths.find().fetch()
  };
})(Test);
