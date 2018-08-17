import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {connect} from 'react-redux'


import { withStyles } from '@material-ui/core/styles';

import {
  Input, InputLabel, FormHelperText, FormControl, InputAdornment, Button
} from '@material-ui/core';

import SpeakerNotes from '@material-ui/icons/SpeakerNotes';

//import validator from 'validator';


import ErrorMessage from '../messaje/ErrorMessage';



const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  actionsBtn: {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  textField: {
    flexBasis: 200,
    display: 'block',
    margin: '20px 0',
    width: '100%'
  }
});

class MissionForm extends React.Component{
  
  state = {    
    data: {content: ''},
    formErrors: {},
    btnDisable: true,
    loading: false
  };
    

  

  handleChange = prop => event => {
    let value = event.target.value;
    let btnDisabled = value ? false : true;
    this.setState({ 
      data: {...this.state.data, [prop]: value},
      btnDisable: btnDisabled
    });
    
  };


  onSubmit = event => {
    event.preventDefault();
    const {data} = this.state;
    const errors = this.validateField(data);
    this.setState({formErrors: errors})
    
    if (Object.keys(errors).length === 0){
      
      this.props.submit(data);
    }
  }

     
  

  validateField = (data) => {
    const errors = {};
   
    if (!data.content) errors.content = "La misión es obligatoria";
    if (data.content.length < 10) errors.content = "La misión es demasiado corta";

    return errors;
  }

  render(){
    const { classes } = this.props;
    const { formErrors, } = this.state; 
    
    return (
      <div>
      {formErrors.api && <ErrorMessage errors={formErrors.api}/>}
            
      <form onSubmit={this.onSubmit}>               
        <FormControl className={classNames(classes.margin, classes.textField)} error={!!formErrors.content} >
          <InputLabel htmlFor="adornment-content">Misión</InputLabel>
            <Input
              style={{width: '100%', height: '50px'}}
              id="adornment-content"
              type="text"
              multiline={true}
              value={this.state.data.content}
              onChange={this.handleChange('content')}    
              endAdornment={
                <InputAdornment position="end">
                  <SpeakerNotes />
                </InputAdornment>
              }                      
            />
            
            <FormHelperText>{formErrors.content}</FormHelperText>
        </FormControl>

        <div className={classes.actionsBtn}>
          <Button type="submit" variant="contained" color="secondary" disabled={this.state.btnDisable}>Guardar</Button>
          
        </div>
      
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
      mission: state.missions.missions,
      user: state.user
  }
}

MissionForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps) (withStyles(styles)(MissionForm));