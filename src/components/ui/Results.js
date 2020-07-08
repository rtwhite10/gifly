import React from 'react'
import {Button, Container, TextField} from '@material-ui/core'
import {apiQuery} from '../api/ApiRequest'

export default function Results() {
  const [search, setSearch] = React.useState('cats')
  const [results, setResults] = React.useState([])

  React.useEffect(() => {
    setResults(apiQuery(search))
  },[setSearch])
   
  return (
    <React.Fragment>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="lets find a gif" onChange={e => setSearch(e.target.value)} />
        <Button variant="contained" color="primary">🔍</Button>
      </form>
    </React.Fragment>
  )
}