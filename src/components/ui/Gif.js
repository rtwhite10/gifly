import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        maxWidth: "250px",
        maxHeight: "250px"
    }
}));


export default function Gif({ result }) {
    const classes = useStyles()
    const { id, images, title } = result
    const { downsized } = images
    return (
        <div className={classes.imageContainer} key={id}>
            <img src={downsized.url} alt={title} />
        </div>
    )
}