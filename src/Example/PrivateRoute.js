import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
  isUserLoggedIn: true,
});

class PrivateRoute extends Component {
  render() {
    const { isUserLoggedIn, ...props } = this.props;
    return isUserLoggedIn
      ? <Route {...props} />
      : <Redirect to='/login' />;
  }
}

export default connect(mapStateToProps)(PrivateRoute);
