import React, { Component } from 'react';
import CityFinder from './cities/CityFinder'

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <div className="container">
        <header>

        </header>
        
        <ul>
          <CityFinder />
        </ul>
      </div>
    );
  }
}

export default App
