import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        Width: "300px",
        Height: "300px"
    }
}));


export default function Gif({ result }) {
    const classes = useStyles()
    const { id, images, title } = result
    const { fixed_height } = images
    return (
        <div key={id}>
            <img className={classes.imageContainer} src={fixed_height.url} alt={title} />
        </div>
    )
}