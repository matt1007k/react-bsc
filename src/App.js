import './App.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

import Appbar from './components/navigation/Appbar'


const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#2979ff',
    },
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 430,
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
  },
  'content-left': {
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  }
});



class App extends Component {
  state = {
    open: false
  };

  DrawerOpenNew = (newOpen) =>{
    this.setState({open: newOpen})
  }
    
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        
        <div className={classes.root}>
        
        <div className={classes.appFrame}>
          <Appbar />
          <main
            className={classNames(classes.content, classes[`content-left`], {
              [classes.contentShift]: open,
              [classes[`contentShift-left`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            {this.props.children}
          </main>
         
        </div>
      </div>
          
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
