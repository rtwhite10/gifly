import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        width: '200px',
        margin: '.5rem',
    },
}));

export default function Gif({ result, index }) {
    const classes = useStyles()
    const { id, images, title } = result
    const { fixed_width } = images
    const {width, url} = fixed_width

    return (
        <Grid item className={classes.imageContainer} >
            <img className={classes.image} src={url} alt={title} />
        </Grid>
    )
}