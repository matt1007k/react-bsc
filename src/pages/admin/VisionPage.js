import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import {  
  Grid, Card, CardContent, 
} from '@material-ui/core';


import Title from '../../components/Title';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  card: {
    maxWidth: '100%',  
  },
  textField: {
    flexBasis: 200,
    display: 'block',
    margin: '20px 0',
    width: '100%'
  },
});

class MisionPage extends React.Component{
  state = {    
    title: 'Vision',
    subtitle: 'Administrar la visión de la organización.',    
  };

  
  render(){
    const { classes } = this.props;
    const { title, subtitle } = this.state;

    return (
      <div>
        <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Title title={title} subtitle={subtitle}/>

                  
                </CardContent>
             </Card>
            </Grid>
        </Grid>
        
      </div>
    );
  }
}

MisionPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MisionPage);