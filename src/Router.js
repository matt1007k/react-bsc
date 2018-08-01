import React, { Component } from 'react'

import {
    BrowserRouter as ReactRouter,
    Route
} from 'react-router-dom';

import App from './App';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export class Router extends Component {
  render() {
    return (
      <ReactRouter>
            <App>
                <Route  path="/" exact component={Home} />
                <Route  path="/login" component={Login} />
                <Route  path="/register" component={SignUp} />
            </App>
      </ReactRouter>
    )
  }
}

export default Router;
