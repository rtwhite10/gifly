import React from 'react';
import theme from './components/ui/theme'
import Results from './components/ui/Results'
import { ThemeProvider } from '@material-ui/core'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Results />
    </ThemeProvider>
  );
}

export default App;
