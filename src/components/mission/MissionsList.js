import React, { Component } from 'react'

import {connect} from 'react-redux'

import { Card, CardContent } from '@material-ui/core';
 
class MissionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        console.log(props.mission)
    }

    

    render() {
        return (
            <Card>
                <CardContent>
                    
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps(state){
    return {
        mission: state
    }
}

export default connect(mapStateToProps)(MissionsList);