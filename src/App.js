import React from 'react';
import theme from './components/ui/theme'
import { ThemeProvider } from '@material-ui/core'



function App() {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

export default App;
