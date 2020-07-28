import React from 'react'
import Gif from '../ui/Gif'
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom'

export default function GifGallery({ results }) {
  return (
    <React.Fragment>
      {    
        results.map((gif) => (
          <Link to={`/${gif.id}`} activeClassName="active">
            <Gif key={gif.id} result={gif} />
          </Link>      
        ))
      }

      
    </React.Fragment>
  )
}