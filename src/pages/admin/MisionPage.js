import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';

import {  
  Grid, Card, CardContent, 
} from '@material-ui/core';

import Title from '../../components/Title';
import MissionsList from '../../components/mission/MissionsList';

import * as actions from '../../actions/missionActions';

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
    title: 'Mision',
    subtitle: 'Administrar la misión de la organización.',  
  };

  componentWillMount(){
    this.loadMissions();
  }

  loadMissions = () => {
      this.props.dispatch(actions.loadAll())
  }
  
  render(){
    const { classes, missions } = this.props;
    const { title, subtitle } = this.state;
    return (
      <div>
        <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Title title={title} subtitle={subtitle}/>

                  <MissionsList missions={missions} />
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

function mapStateToProps(state){
  return {
      missions: state.missions,
      user: state.user
  }
}

export default connect(mapStateToProps)(withStyles(styles)(MisionPage));