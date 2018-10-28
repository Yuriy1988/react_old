import React, { Component } from 'react';
import withUserPermission from './withUserPermission';

class Example extends Component {
  render() {
    return (
      <div>Private Data</div>
    );
  }
}

export default withUserPermission(Example);
