import React, { Component } from 'react';


import Footer from '../components/Footer'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                    <h1>Inicio</h1>   
                <Footer /> 
            </div>
        );
    }
}

export default Home;