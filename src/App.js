import './App.css'

import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#2979ff',
    },
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header />  
            <h1>Inicio</h1>   
          <Footer /> 
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
