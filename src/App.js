import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

import Appbar from './components/navigation/Appbar'

import { withRouter } from 'react-router-dom';

import './App.css'



const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#651fff',
    },
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }
});

class App extends Component {
  state = {
    open: false
  };

  DrawerOpenNew = (newOpen) =>{
    this.setState({open: newOpen})
  }

  goHome = () => {

  }
    
  render() {
    const { classes } = this.props;
    console.log(this.props)
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.appFrame}>
          <Appbar />
          <main
            className={classNames(classes.content)}
          >
            <div className={classes.drawerHeader} />
            {this.props.children}
          </main>
         
        </div>
      
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(App));
