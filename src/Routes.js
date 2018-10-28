import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Page1 from './RoutingExamples/Page1/Page1';
import Page2 from './RoutingExamples/Page2/Page2';
import PrivatePage from './RoutingExamples/PrivatePage/PrivatePage';
import LoginFailed from './RoutingExamples/LoginFailed/LoginFailed';
import PrivateRoute from './Example/PrivateRoute';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            component={Page1}
            path='/page1'
          />
          <Route
            component={Page2}
            path='/page2'
          />
          <PrivateRoute
            exact
            path='/private'
            render={() => <PrivatePage />}
          />
          <Route
            component={LoginFailed}
            path='/loginFailed'
          />
          <Route
            path='/'
            render={() => <Page2 test='HOME PAGE' />}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
