import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

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
    const classes = useStyles()
    const { id, images, title } = result
    const { fixed_width } = images

    return (
        <div className={classes.imageContainer}>
            <img className={classes.image} src={fixed_width.url} alt={title} />
        </div>
            
       
    )
}