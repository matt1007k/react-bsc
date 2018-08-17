import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import {  
  Grid, Card, CardContent, 
} from '@material-ui/core';


import Title from '../../components/Title';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getAll, postMision, updateMision, deleteMision} from '../../actions/visionActions';

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

  componentDidMount(){
    this.props.getAll()
    
  }

  submit = () => {
    this.props.postMision()
  }

  submitUpdate = () => {
    this.props.updateMision()
  }

  submitDelete = () => {
    this.props.deleteMision()
  }
  
  render(){
    const { classes } = this.props;
    const { title, subtitle } = this.state;
    console.log("estado de vision", this.props.visions);
    return (
      <div>
        <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Title title={title} subtitle={subtitle}/>

                  <button onClick={this.submit}>Add Vision</button>
                  <button onClick={this.submitUpdate}>Update Vision</button>
                  <button onClick={this.submitDelete}>Delete Vision</button>
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
  return{
    visions: state.visions.visions
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getAll, postMision, updateMision, deleteMision
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(MisionPage));