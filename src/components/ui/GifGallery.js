import React from 'react'
import Gif from '../ui/Gif'
import GifPage from '../pages/GifPage'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom'

export default function GifGallery({ results }) {

  return (
    <React.Fragment>
      {    
        results.map((gif, index) => (
          <Link to={`/${gif.id}`}>
            <Gif key={gif.id} result={gif} />
          </Link>      
        ))
      }

      
    </React.Fragment>
  )
}