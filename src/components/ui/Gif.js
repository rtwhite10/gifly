import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        width: '200px',
        margin: '.2rem 0',
    },
    // image: {
    //     objectFit: 'cover'
    // }
}));


export default function Gif({ result, index }) {
    const [grow, setGrow] = React.useState(1)
    const widthRef = React.useRef(null)
    const classes = useStyles()
    const { id, images, title } = result
    const { fixed_width } = images
    const {width, url} = fixed_width

    // if (width > )

    return (
        <Grid item className={classes.imageContainer} >
            <img className={classes.image} src={url} alt={title} />
        </Grid>
            
       
    )
}