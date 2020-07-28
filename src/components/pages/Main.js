import React from 'react'
import Header from '../ui/Header'
import Results from '../ui/Results'
import {Paper, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  Paper: {
    height: '100vh'
  }
}))

export default function Main() {
  const classes = useStyles()

  return (
    <Paper className={classes.Paper} style={{overflow: 'hidden'}} elevation={0}>
      <Header />
      <Results />
    </Paper>
  )
}