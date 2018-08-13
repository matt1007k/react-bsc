import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import {
  Input, InputLabel, FormHelperText, FormControl, InputAdornment,
  Grid, Card, CardContent, Button, IconButton
} from '@material-ui/core';

import {
  Visibility, VisibilityOff, Email
} from '@material-ui/icons';

import validator from 'validator';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Title from '../components/Title';
import ErrorMessage from '../components/messaje/ErrorMessage';

import {sign_up} from '../request/api';

import * as actions from '../actions/authActions';
import { push } from 'react-router-redux';

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
  imgStyle: {
    backgroundImage: 'url(https://cdne.diariocorreo.pe/thumbs/uploads/articles/images/ministerio-publico-preside-com-jpg_604x0.jpg)',
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    backgroundSize: 'cover',
    width: '100%', 
    height: '100%'
  }
});

class SignUp extends React.Component{
  state = {    
    title: 'Crear una cuenta',
    subtitle: 'Registrate para poder comunicarnos contigo.',
    data: {email: '', password: ''},
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

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  signUpSubmit = event => {
    event.preventDefault();
    const {data} = this.state;
    const errors = this.validateField(data);
    this.setState({formErrors: errors})
    
    if (Object.keys(errors).length === 0){
      const errors = {};

      sign_up(data)
      .then(res => {
        const token = {
          'access-token': res.headers['access-token'],
          client : res.headers['client'],
          uid: res.headers['uid']
        }
        const message = 'Has iniciado sesión correctamente';
        // convertir un (objeto o json) a string JSON.stringfy
        // convertir un string a (objeto o json) JSON.parse 
        this.props.dispatch(actions.login(JSON.stringify(token)))
        this.props.dispatch(push('/dashboard'));
        this.props.dispatch(actions.loadMessage(message));
      }).catch(error => {
        console.log(error)
        errors.api = '';
        this.setState({formErrors: errors});
      })
    }
  }

  validateField = (data) => {
    const errors = {};
    if (!validator.isEmail(data.email)) errors.email = "El correo electrónico es inválido";
    if (!data.password) errors.password = "La contraseña es requerida";
    if (data.password.length < 9) errors.password = "La contraseña es demasiado corta";

    return errors;
  }

  render(){
    const { classes } = this.props;
    const { title, subtitle, formErrors, data } = this.state;

    return (
      <div>
        <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Title title={title} subtitle={subtitle}/>
                  {formErrors.api && <ErrorMessage errors={formErrors.api}/>}

                  <form onSubmit={this.signUpSubmit}>  
                    <FormControl className={classNames(classes.margin, classes.textField)} error={!!formErrors.email} >
                      <InputLabel htmlFor="adornment-email">Correo electrónico</InputLabel>
                        <Input
                          style={{width: '100%'}}
                          id="adornment-email"
                          type="text"
                          value={data.email}
                          onChange={this.handleChange('email')}    
                          endAdornment={
                            <InputAdornment position="end">
                              <Email />
                            </InputAdornment>
                          }                      
                        />
                        <FormHelperText>{formErrors.email}</FormHelperText>
                    </FormControl>

                    <FormControl className={classNames(classes.margin, classes.textField)} error={!!formErrors.password}>
                      <InputLabel htmlFor="adornment-password">Contraseña</InputLabel>
                        <Input
                          id="adornment-password"
                          style={{width: '100%'}}
                          type={this.state.showPassword ? 'text' : 'password'}
                          value={data.password}
                          onChange={this.handleChange('password')}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                              >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                        <FormHelperText>{formErrors.password}</FormHelperText>
                      </FormControl>

                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Button type="submit" variant="contained" color="secondary" disabled={this.state.btnDisable}>Registrarse</Button>
                        <Link to="/login">Ya tengo cuenta</Link>
                      </div>
                    </form>
                </CardContent>
             </Card>
            </Grid>
            <Grid item xs={12} md={8}>
               <div className={classes.imgStyle}>
               </div>       
            </Grid>         
        </Grid>
        
      </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(withStyles(styles)(SignUp));