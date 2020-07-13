import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  error: {
    margin: 'auto',
    fontWeight: 100,
    fontFamily: "Arial, Helvetica, sans-serif"
  }
}));


export default function Gif({ error }) {
  const classes = useStyles()
    return (
      <React.Fragment>
        <h2 className={classes.error}>Opps there was an issue... try again</h2>
      </React.Fragment>
    )
}