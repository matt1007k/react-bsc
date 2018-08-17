import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Drawer from './Drawer';
import LoginButton from './LoginButton';
import MenuAccount from './MenuAccount';

import SnackbarMessage from '../messaje/SnackbarMessage';

import { connect } from 'react-redux';

const drawerWidth = 240;

const styles = theme => ({  
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  flex: {
    flexGrow: 1,
  }
});




class Appbar extends Component {
    state = {
        titleTemp: 'BSC',
    };

    
    render() {
    const { classes, user, message } = this.props;
    const { titleTemp} = this.state;
    
    return (        
        <AppBar position="static"
          className={classes.appBar}
        >
          <Toolbar>
            <Drawer />
            <Typography variant="title" color="inherit" className={classes.flex}>
              {titleTemp}
            </Typography>

            {user.token ? <MenuAccount /> : <LoginButton />  }
          </Toolbar>

          {message && <SnackbarMessage openMessage={message ? true : false} message={message} duration={4000}/>}
        </AppBar>        
      )
  
    
  }
}

Appbar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

function mapStateToProps(state){
  return{
    user: state.user,
    message: state.utils.message
  }
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Appbar));