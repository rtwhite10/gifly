import React from 'react'
import GifGallery from './GifGallery'
import Error from './Error'
import {Button, Container, TextField, Grid} from '@material-ui/core'
import { requestApiData, recieveApiData, requestAditionalData } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'  
import { makeStyles } from '@material-ui/core'
import ReactLoading from 'react-loading';

const useStyles = makeStyles(theme =>  ({
  formField: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em'
  },
  textFeild: {
    width: '350px',
    [theme.breakpoints.down("md")]: {
      width: '300px',
    },
    [theme.breakpoints.down("sm")]: {
      width: '225px'
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1000px',
    flexWrap: 'wrap',
    flexDirection: 'column',
    [theme.breakpoints.up("lg")]: {
      height: '220vh'
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: '1000px',
      height: '400vh'
    },
    [theme.breakpoints.up("sm")]: {
      width: '500px',
      height: '900vh',
    },
    [theme.breakpoints.down("sm")]: {
      width: '500px',
    },
  },
  loader: {
    margin: 'auto'
  },
  button: {
    backgroundColor: theme.palette.primary.secondary
  }
}))

export default function Results() {
  const [text, setText] = React.useState("")
  const [windowWidth, setWindowWidth] = React.useState(null)
  const results = useSelector(state => state.results)
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)
  const dispatch = useDispatch()
  const classes = useStyles()

  React.useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
  })
 


  // Need to troubleshoot why when the bottom of the page is reached, results become null, causing our map to display gifs fail. 

  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // },[])

  // const handleScroll = () => {
  //   if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
  //   dispatch(requestAditionalData(text))
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(requestApiData(text))
  }

  if(error !== '') {
    return (
      <Grid container className={classes.container}>
        <h1>{windowWidth}</h1>
        <form className={classes.formField} noValidate autoComplete="off">
          <TextField className={classes.textFeild} id="standard-basic" label="lets find a gif" onChange={e => setText(e.target.value)} />
          <Button disableElevation variant="contained" onClick={(e) => handleSubmit(e)}>🔍</Button>
        </form>
        <Grid container className={classes.resultsContainer}>
          <Error error={error} />
        </Grid>
    </Grid>
    )
  }

  return (
    <Grid container className={classes.container}>
      <form className={classes.formField} noValidate autoComplete="off">
        <TextField className={classes.textFeild} id="standard-basic" label="lets find a gif" onChange={e => setText(e.target.value)} />
        <Button className={classes.button} disableElevation variant="contained" color="secondary" onClick={(e) => handleSubmit(e)}>🔍</Button>
      </form>
      <Grid container className={classes.resultsContainer}>
        {loading ? 
          <ReactLoading className={classes.loader} color="#FFBA60" height={300} width={375} /> :
          <GifGallery results={results} />
        }
      </Grid>
    </Grid>
  )
}