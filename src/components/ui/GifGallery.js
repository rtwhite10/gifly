import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Gif from '../ui/Gif'

export default function GifGallery({ results }) {
    return (
        <React.Fragment>
        {    
          results.map((gif, index) => (
            <Gif key={gif.id} result={gif} />
          ))
        }
        </React.Fragment>
    )
}