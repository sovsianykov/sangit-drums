
import * as React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box,Typography} from "@material-ui/core";

const useStyles = makeStyles({
    albumroot: {
        width: '100%',
        overflow: 'hidden',
        background : "transparent",
        height : "450",
        display:"flex",
        flexDirection: "column",
        alignItems : "center"


    },
    media: {
        height: 200,
        width: 200,
        overflow: 'hidden'
    },
    title: {

        color : '#243941'
    },
    image : {
        display : 'block',
        width: "100%"
    }


});

const Album =({album}) => {
    const classes = useStyles();

    return (
        <Box  className={classes.albumroot}  >
            <a href={album.src}>
                <div className={classes.media} >
                    <img src={album.image} alt={album.title} className={classes.image}/>
                </div>
            </a>
                <Typography variant='subtitle1' >
                    {album.title}
                </Typography>
                <Typography variant='h5' className={classes.title} >
                    {album.artist}
                </Typography>



        </Box>
    );
};
export default Album