import React from 'react'
import Gif from './Gif'
import {Button, Container, TextField} from '@material-ui/core'
import { apiQuery } from '../api/ApiRequest'
import { requestApiData, recieveApiData } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'  
import { makeStyles } from '@material-ui/core'
import ReactLoading from 'react-loading';

// convert to redux for state changes
// use saga to handle async state updates
// look up best practices and most current practices 

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
    width: '70%',
    height: '100vh',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap'
  },
  loader: {
    margin: 'auto'
  }
})

export default function Results() {
  const [text, setText] = React.useState("")
  const results = useSelector(state => state.results)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  const classes = useStyles()


  const handleSubmit = async (e) => {
    e.preventDefault()
    // const results = await apiQuery(text)
    // dispatch(recieveApiData(results))
    dispatch(requestApiData(text))
  }

  return (
    <React.Fragment>
      <form className={classes.formField} noValidate autoComplete="off">
        <TextField className={classes.textFeild} id="standard-basic" label="lets find a gif" onChange={e => setText(e.target.value)} />
        <Button disableElevation variant="contained" color="secondary" onClick={(e) => handleSubmit(e)}>🔍</Button>
      </form>
      <div className={classes.resultsContainer}>
      {loading ? 
          <ReactLoading className={classes.loader} color="#FFBA60" height={667} width={375} /> :
        results.map(gif => (
          <Gif key={gif.id} result={gif} />
        ))
      }
      </div>
    </React.Fragment>
  )
}