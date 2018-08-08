import React from 'react';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom'

const style = {
  linkWhite: {
    textDecoration: 'none',
    color: '#fff',
  }
}

const LoginButton = (props) => { 
    return(
        <div>
            <Link to="/login" className={props.classes.linkWhite}>
                <Button color="inherit">Login</Button>
            </Link>
            <Link to="/register" className={props.classes.linkWhite}>
                <Button color="inherit">Crear cuenta</Button>
            </Link>
        </div>
    )
};
       

export default withStyles(style)(LoginButton);