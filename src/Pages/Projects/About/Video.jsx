
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from './styles'
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import {audio1} from '../Projects'
import {useEffect} from "react";


const videos = [
    { id: 1 , src : 'https://www.youtube.com/watch?v=sK_xsfi-tCo', title : 'Сергей Табунщик - барабанщик'  },
    { id: 2 , src : 'https://www.youtube.com/watch?v=gBk_C79H9WQ', title : 'Сергей Табунщик - преподаватель на ударных'  }
]

const Video = () => {
    const classes = useStyles()
    useEffect(()=>{

        audio1.pause()

    })

    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" className={classes.title}>
                                Видео
                            </Typography>
                            <Grid container spacing={4} justify='center'>
                                {videos.map((video) => (
                                    <Grid item xs={12} sm={6} key={video.id}>
                                      <VideoPlayer video = {video}/>
                                   </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            </main>
        </Box>
    );
};
export default Video;