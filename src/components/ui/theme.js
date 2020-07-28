import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';

const blue = "#0B72B9"
const orange = "#FFBA60"

export const lightTheme = createMuiTheme({
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
export const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
       main: cyan[100]
      },
      secondary: {
        main: cyan[100]
      },
    },
    props: {
      MuiPaper: {
        minHeight: '100vh'
      }
    }
  })
  