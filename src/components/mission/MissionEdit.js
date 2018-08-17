import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid } from '@material-ui/core';
import {
  Input, InputLabel, FormHelperText, FormControl, InputAdornment, Button
} from '@material-ui/core';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Title from '../Title';


import { push } from 'react-router-redux';

import ErrorMessage from '../messaje/ErrorMessage';

import * as request from '../../request/mission';
import * as actions from '../../actions/missionActions';
import * as authActions from '../../actions/authActions';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  card: {
    maxWidth: '100%',  
  },
  center: {
    justifyContent:"center"
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


class MissionEdit extends React.Component {
    state = {    
      title: 'Editar misión',
      subtitle: 'Editar la misión que desea realizar la organización.',
      data: {content: ''},
      id: '',
      formErrors: {},
      btnDisable: true,
      loading: false
    };
    
    componentDidMount = () => {
      let id = this.props.match.params.id;
      this.getData(id);
  
    }
  
    getData(id){
      const user = this.props.user;
      request.show(id, user.token)
      .then(response => {
        console.log(response.id)
        this.setState({data: {content: response.content}, id: id})
      });
    }
   
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
      const {data, id} = this.state;
      const errors = this.validateField(data);
      this.setState({formErrors: errors})
      
      if (Object.keys(errors).length === 0){
        const message = 'Se ha editado la misión correctamente';
        
        this.props.editMission(id, data);
        this.props.loadMessage(message)
        this.props.push('/dashboard/mision')
      }
    }
  
       
    
  
    validateField = (data) => {
      const errors = {};
     
      if (!data.content) errors.content = "La misión es obligatoria";
      if (data.content.length < 10) errors.content = "La misión es demasiado corta";
  
      return errors;
    }

    render() {
      const { classes } = this.props;
      const { title, subtitle, formErrors } = this.state; 
      return (
        <div>
          <Grid container spacing={0}  className={classes.center}>
              <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                  <CardContent>
                    <Title title={title} subtitle={subtitle}/>
                   
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
                        <Button type="submit" variant="contained" color="secondary" disabled={this.state.btnDisable}>Editar</Button>
                        <Link to="/dashboard/mision">Regresar</Link>
                      </div>
                          
                      </form>
                  </CardContent>
              </Card>
              </Grid>
                    
          </Grid>
          
        </div>
      )
    }
}


function mapStateToProps(state){
    return{
        mission: state.missions.missions,
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    editMission: actions.EditMission,
    loadMessage: authActions.loadMessage,
    push: push
  }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MissionEdit));