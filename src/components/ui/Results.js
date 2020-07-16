import React from 'react'
import GifGallery from './GifGallery'
import Error from './Error'
import {Button, Container, TextField} from '@material-ui/core'
import { requestApiData, recieveApiData } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'  
import { makeStyles } from '@material-ui/core'
import ReactLoading from 'react-loading';

const useStyles = makeStyles({
  formField: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem'
  },
  textFeild: {
    width: '350px'
  },
  resultsContainer: {
    width: '45%',
    height: '100vh',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
    // justifyContent: 'space-between',
  },
  loader: {
    margin: 'auto'
  }
})

export default function Results() {
  const [text, setText] = React.useState("")
  const results = useSelector(state => state.results)
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)
  const dispatch = useDispatch()
  const classes = useStyles()


  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(requestApiData(text))
  }

  if(error !== '') {
    return (
      <React.Fragment>
      <form className={classes.formField} noValidate autoComplete="off">
        <TextField className={classes.textFeild} id="standard-basic" label="lets find a gif" onChange={e => setText(e.target.value)} />
        <Button disableElevation variant="contained" color="secondary" onClick={(e) => handleSubmit(e)}>🔍</Button>
      </form>
      <div className={classes.resultsContainer}>
        <Error error={error} />
      </div>
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <form className={classes.formField} noValidate autoComplete="off">
        <TextField className={classes.textFeild} id="standard-basic" label="lets find a gif" onChange={e => setText(e.target.value)} />
        <Button disableElevation variant="contained" color="secondary" onClick={(e) => handleSubmit(e)}>🔍</Button>
      </form>
      <div className={classes.resultsContainer}>
        {loading ? 
          <ReactLoading className={classes.loader} color="#FFBA60" height={300} width={375} /> :
          <GifGallery results={results} />
        }
      </div>
    </React.Fragment>
  )
}