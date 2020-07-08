import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        margin: '2rem'
    },
}));

export default function Header() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <AppBar position="static">
                <Typography variant="h3" className={classes.title}>Gifly</Typography>
            </AppBar>
        </React.Fragment>
    )
}