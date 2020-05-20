import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';

const Auth = () => {
  return (
    <Router>
      <Switch>
          <Route exact={true} path="/" component={Login}/>
      </Switch>
    </Router>
  )
}

export default Auth;