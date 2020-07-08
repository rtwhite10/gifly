import React from 'react';
import theme from './components/ui/theme'
import Results from './components/ui/Results'
import Header from './components/ui/Header'
import { ThemeProvider } from '@material-ui/core'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Results />
    </ThemeProvider>
  );
}

export default App;
