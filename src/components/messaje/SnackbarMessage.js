import React from 'react'
import ComponentMessage from './ComponentMessage';
import {Snackbar} from '@material-ui/core';

import {connect} from 'react-redux'
import * as actions from '../../actions/authActions'

class SnackbarMessage extends React.Component { 
    state = {
        open: false
    }
    handleOpen = () => {
        if(this.props.openMessage)
            this.setState({open: this.props.openMessage})
    }
    handleClose = ( event , reason ) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.dispatch(actions.closeMessage());
        this.setState({ open: false });
    }

    render(){
        const {message} = this.props;
        return(
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={this.props.openMessage}
                autoHideDuration={this.props.duration}
                onClose={this.handleClose}
            >
            <ComponentMessage
                onClose={this.handleClose}
                variant="success"
                message={message}
                iconClose={true}
            />
            </Snackbar>

        )
    }
}

function mapStateToProps(state){
    return {
        errors: state.missions.errors
    }
}
  

export default connect(mapStateToProps)(SnackbarMessage);