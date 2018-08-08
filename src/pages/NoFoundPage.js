import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import {
  Button,  
} from '@material-ui/core';

import {Link} from 'react-router-dom';

import Title from '../components/Title';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class NotFoundPage extends React.Component{
  state = {    
    title: 'Página no encontrada',
    subtitle: 'La página no existe.',
  };


  render(){
    //const { classes } = this.props;
    const { title, subtitle} = this.state;

    return (
      <div>
        <Title title={title} subtitle={subtitle} />
        <h2>Error 404</h2>
        <Button component={Link} to="/">
            Inicio
        </Button>
      </div>
    );
  }
}

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFoundPage);