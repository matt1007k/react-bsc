import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { connect } from 'react-redux';

import * as actions from '../../actions/authActions';
import { push } from 'react-router-redux';

class MenuAccount extends React.Component {

    constructor(){
      super();
      this.state = {
        anchorEl: null,
      }
    }
  
    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    handleLogOut = () => {
      this.props.dispatch(actions.logout());
      this.props.dispatch(push('/'));
    }
  
    render(){
      const {anchorEl} = this.state;
      const open = Boolean(anchorEl);
      return(
        <div>
          <IconButton
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
            <MenuItem onClick={this.handleLogOut}>Cerrar sesión</MenuItem>
          </Menu>
        </div>
      )
    }
  }

  function mapStateToProps(state){
    return{
      user: state.user
    }
  }


  export default connect(mapStateToProps)(MenuAccount);