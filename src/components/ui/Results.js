import React from 'react'
import Gif from './Gif'
import {Button, Container, TextField} from '@material-ui/core'
import {apiQuery} from '../api/ApiRequest'
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
    width: '70%',
    height: '100vh',
    margin: 'auto'
  }
})

export default function Results() {
  const [search, setSearch] = React.useState('cats')
  const [loading, setLoading] = React.useState(true)
  const [results, setResults] = React.useState([])
  const classes = useStyles()

  React.useEffect(() => {
    apiQuery(search, setResults)
    console.log(results)
  },[setSearch])

  const handleSubmit = () => {
    
   
  }

  return (
    <React.Fragment>
      <form className={classes.formField} noValidate autoComplete="off">
        <TextField className={classes.textFeild} id="standard-basic" label="lets find a gif" onChange={e => setSearch(e.target.value)} />
        <Button variant="contained" color="secondary" onClick={() => handleSubmit()}>🔍</Button>
      </form>
      
        
        <div className={classes.resultsContainer}>
        {loading ? 
          <ReactLoading color="primary" height={667} width={375} /> :
          results.map(gif => (
            <Gif key={gif.id} result={gif} />
          ))
        }
        </div>
      
      
    </React.Fragment>
  )
}