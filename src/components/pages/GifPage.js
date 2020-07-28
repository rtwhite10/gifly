import React from 'react'
import Header from '../ui/Header'
import { useSelector, useDispatch } from 'react-redux'  
import { useLocation } from 'react-router-dom'
import {Paper, Button, Container, TextField, Grid, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  MainGif: {
    margin: "2em 1em",
    [theme.breakpoints.down("md")]: {
      margin: "2em 0"
    }
  },
  RelatedGif: {
    margin: "0 1em"
  },
  RelatedGifContainer: {
    margin: '2em 0',
    [theme.breakpoints.down("md")]: {
      display: 'none'
    }

  },
  PaperContainer: {
    height: '100vh',
    
  }
}))

export default function GifPage() {
  const classes = useStyles()
  const location = useLocation()
  const results = useSelector(state => state.results)
  const id = location.pathname.substring(1);
  const gif = results.find(gif => gif.id === id) 

  React.useEffect(() => {
    console.log(gif)
  },[])

  return(
    <Paper className={classes.PaperContainer}>
      <Header />
      <Grid className={classes.MainGif} container justify="center">
        <Grid item>
          <img src={gif.images.original.url} alt={gif.title} />
        </Grid>
        <Grid className={classes.RelatedGifContainer} container justify="center" >
          {results.map((gif, index) => {
            if (index <= 4) {
              return (
              <Grid item className={classes.RelatedGif}>
                <img src={gif.images.fixed_height.url} alt={gif.title}/>
              </Grid>)
            }
            return
          })}
        </Grid>
      </Grid>
    </Paper>
  )
}