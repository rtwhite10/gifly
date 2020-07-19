import React from 'react'
import { AppBar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'  
import { toggleTheme } from '../redux/actions'

const useStyles = makeStyles((theme) => ({
    title: {
      margin: '2rem',
      color: 'white'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: theme.palette.primary
    },
    button: {
      // color: theme.palette.secondary,
      fontSize: '2rem'
    }
}));

export default function Header() {
    const currentTheme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleThemeChange = () => {
      let theme = currentTheme ? false : true
      dispatch(toggleTheme(theme))
    }

    return (
      <AppBar className={classes.header} position="static">
        <Typography variant="h3" className={classes.title}>Gifly</Typography>
        <Typography variant="h3" className={classes.title}>
          <Button disableRipple onClick={()=> handleThemeChange()} className={classes.button}>
            {currentTheme ? '🔦' : '💡'}
          </Button>
        </Typography>
      </AppBar> 
    )
}