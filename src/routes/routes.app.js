import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import { ContextAuth } from '../contexts/auth';

import Dashboard from '../pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Dashboard}/>
      </Switch>
    </Router>
  )
}

export default App;