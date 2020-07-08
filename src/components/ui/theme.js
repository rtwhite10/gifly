import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';

const blue = "#0B72B9"
const orange = "#FFBA60"

export default createMuiTheme({
    palette: {
        common: {
            blue: `${blue}`,
            orange: `${orange}`
        },
        primary: {
            main: `${blue}`
        },
        secondary: {
            main: `${orange}`
        }
    }
})