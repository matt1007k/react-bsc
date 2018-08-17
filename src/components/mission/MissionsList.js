import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { Card, CardContent, IconButton, Tooltip, Button, 
    Dialog, DialogTitle,DialogActions,DialogContent,DialogContentText } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons'

import { withStyles } from '@material-ui/core/styles';

import {red} from '@material-ui/core/colors'

import TextField from '@material-ui/core/TextField';

import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


import * as actions from '../../actions/missionActions';

import * as Authactions from '../../actions/authActions';

const style = theme => ({
    btnMargin: {
        margin: theme.spacing.unit,
    },
    between: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    danger: {
        color: red[700]
    }
})

 
class MissionsList extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
   
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    

    destroyItem = () => {
        const message = "La misión se eliminó correctamente";
        
        const id = document.getElementById("idDelete").value;

        this.props.destroyMission(id);
        this.props.loadMessage(message)
       
        this.setState({ open: false });
       
    }

    getAll(){
        const { classes, fullScreen } = this.props;
        
        return this.props.missionsItems.map(mission => {
            return(
                <List key={mission.id}>
                   
                    <ListItem>
                        <ListItemText primary={mission.content} secondary={mission.created_at} />
                            
                        <ListItemSecondaryAction>
                            <Tooltip title="Editar">
                            <IconButton  color="primary" component={Link} to={"/dashboard/mision/"+ mission.id+"/edit"}>
                                <Edit/>
                            </IconButton>
                            </Tooltip>
                            <Tooltip title="Eliminar">
                                <IconButton color="inherit" className={classes.danger} onClick={this.handleClickOpen}>
                                    <Delete/>
                                </IconButton>
                            </Tooltip>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    
                    <TextField type="hidden" id="idDelete" value={mission.id}/>
                    <Dialog
                        fullScreen={fullScreen}
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="responsive-dialog-title"
                        >
                        <DialogTitle id="responsive-dialog-title">{"Estás seguro de eliminar la misión?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                No podrás revertir está operación. 
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                            Cancelar
                            </Button>
                            <Button onClick={this.destroyItem} className={classes.danger} >
                            Eliminar
                            </Button>
                        </DialogActions>
                        </Dialog>
                </List>
            );
        })
    }    

    render() {
       
        return (
            <Card>
                <CardContent >
                    {this.getAll()}
                </CardContent>
            </Card>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        destroyMission: actions.destroyMission,
        loadMessage: Authactions.loadMessage
    },dispatch)
}


export default connect(null, mapDispatchToProps)(withStyles(style)(MissionsList));