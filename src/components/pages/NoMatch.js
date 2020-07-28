import React from 'react'
import Header from '../ui/Header'
import { Paper , makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  Paper: {
    height: '100vh'
  }
}))

export default function NoMatch() {
  const classes = useStyles()

  return (
    <Paper className={classes.Paper}>
      <Header />
    </Paper>
  )
}