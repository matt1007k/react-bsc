import React, { Component } from 'react'

import {
    BrowserRouter as ReactRouter,
    Route,
    Switch
} from 'react-router-dom';

import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './App';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import NoFoundPage from './pages/NoFoundPage';
import Dashboard from './pages/Dashboard';

import MisionPage from './pages/admin/MisionPage';
import VisionPage from './pages/admin/VisionPage';


import MissionEdit from './components/mission/MissionEdit';


class Router extends Component {

  render() {
    if(this.props.user.token){ 
      return (
        <ConnectedRouter history={this.props.history}>
          <App>
              <Switch>
                  <Route path="/dashboard" exact component={Dashboard} />
                  <Route path="/dashboard/mision" exact component={MisionPage}/>
                  <Route path="/dashboard/mision/:id/edit" component={MissionEdit}/>
                  <Route path="/dashboard/vision" component={VisionPage}/>
                  <Route component={NoFoundPage} />
              </Switch>
          </App>
        </ConnectedRouter>
      )
    }else{ 
      return (
        <ConnectedRouter history={this.props.history}>
          <App>
              <Switch>
                <Route  path="/" exact component={Home} />              
                <Route  path="/login"  component={Login} />
                <Route  path="/register" component={SignUp} />                 
                <Route component={NoFoundPage} />
              </Switch>
          </App>
        </ConnectedRouter>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Router);
