import React, { Component } from 'react';
import RoutesForProducts from './Routes';
import Navigation from './features/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <RoutesForProducts />
      </div>
    );
  }
}

export default App;
