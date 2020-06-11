import React from 'react';
import './App.css';
import Home from '../src/components/home';
// MATERIAL-UI is a React components for faster and easier web development. 
//You can Build your own design system, or start with Material Design thats why i use it in my previus homework like the MyUd and in the react portfolio.
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      
      main: '#E91E63',
    },
    secondary: {
      main: '#009688',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
     
    </ThemeProvider>
   
  );
}

export default App;
