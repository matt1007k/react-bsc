import React, { Component } from 'react'

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Drawer from './Drawer';

const drawerWidth = 240;

const styles = theme => ({  
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
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
});


class Appbar extends Component {
    state = {
        open: false,
        titleTemp: 'BSC'
    };
    
    render() {
    const { classes } = this.props;
    const { open, titleTemp } = this.state;

    return (
        <div>
            <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-left`]]: open,
              })}
            >
              <Toolbar disableGutters={!open}>
                <Drawer />
                <Typography variant="title" color="inherit" noWrap>
                  {titleTemp}
                </Typography>
              </Toolbar>
            </AppBar>
            
          
        </div>
      )
  
    
  }
}

Appbar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Appbar);