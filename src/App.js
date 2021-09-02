import React from 'react'
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Spotify from './spotify';
import theme from './theme'
import Home from './Pages/Home' 


function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Reset />
      <Home />
      </ThemeProvider>
  );
}

export default App;
