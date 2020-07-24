import React from 'react';
import theme from './components/ui/theme'
import Results from './components/ui/Results'
import Header from './components/ui/Header'
import { ThemeProvider,createMuiTheme, Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';

const blue = "#0B72B9"
const orange = "#FFBA60"

function App() {
  
  const themeMode = useSelector(state => state.theme)

 
  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: blueGrey[500]
      },
      secondary: {
        main: blueGrey[100]
      },
    },
  })
  
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
       main: cyan[100]
      },
      secondary: {
        main: cyan[100]
      },
    },
  })
  
  return (
    <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
      <Paper style={{overflow: 'hidden'}} elevation={0}>
        <Header />
        <Results />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
