
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from './styles'
import VideoPlayer from "./VideoPlayer/VideoPlayer";


const videos2 = [
    { id:  1, src : 'https://www.youtube.com/watch?v=yl5qnhh1A3A', title : 'Сергей Табунщик - барабанщик'  },
    { id: 2 , src : 'https://www.youtube.com/watch?v=eyZ_CqetVg0&t=3s', title : 'Развитие рук. Постановка. Полный удар | Сергей Табунщик | Уроки на барабанах'  },

]

const Video = () => {
    const classes = useStyles()


    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" className={classes.title}>
                                Видеоуроки
                            </Typography>
                                <Grid container spacing={1} justify='center' className={classes.videos}>
                                    {videos2.map((video) => (
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