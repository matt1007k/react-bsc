import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles';

import {  
  Grid, Card, CardContent, Button, Tooltip
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

import Title from '../../components/Title';
import MissionsList from '../../components/mission/MissionsList';
import MissionForm from '../../components/mission/MissionForm';

import * as actions from '../../actions/missionActions';

import * as Authactions from '../../actions/authActions';

//dialog 
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


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
  absolute: {
    position: 'fixed',
    margin: theme.spacing.unit * 2,
    bottom: '1em',
    right: '1em',
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  formNew: {
    justifyContent:"center",
    marginTop: '15px'
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class MisionPage extends React.Component{
  state = {    
    title: 'Misión que realiza la organización',
    subtitle: 'Administrar la misión de la organización.',  
    open: false
  };

  componentDidMount(){
    this.props.loadMissions();
  }

  
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submit = (data) => {
    const message = "La misión se guardó correctamente";
    this.props.createMission(data);
    this.props.loadMessage(message);
    this.setState({ open: false })
    
  }

  
   
  render(){
    const { classes, missions } = this.props;
    const { title, subtitle, open } = this.state;
    return (
      <div style={{height: '100%', width: '100%'}} >
        <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Title title={title} subtitle={subtitle}/>

                </CardContent>
             </Card>
            </Grid>
            <Grid item xs={12} md={12}>              
              <MissionsList missionsItems={missions} deleteItem={this.deleteMission}/>                
            </Grid>
        </Grid>


        <Tooltip title="Agregar Missión" >
          <Button onClick={this.handleClickOpen} variant="fab" color="primary" aria-label="Agregar Missión" className={classes.absolute} >
            <AddIcon />
          </Button>
        </Tooltip>

        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Nueva misión
              </Typography>              
            </Toolbar>
          </AppBar>
          <Grid container spacing={0} className={classes.formNew}>
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <MissionForm  submit={this.submit}/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

MisionPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state){
  return {
      missions: state.missions.missions,
      user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    loadMissions: actions.loadAll,
    createMission: actions.addMission,
    loadMessage: Authactions.loadMessage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MisionPage));