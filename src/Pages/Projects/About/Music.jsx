
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from './styles';
import Album from './Album';
import {albums, tracks} from '../../../assets/albums';
import Player from './Player/Player';



const Music = () => {
    const classes = useStyles()
    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" className={classes.title}>
                                Участие в альбомах
                            </Typography>
                            <Grid container spacing={4}>
                                {albums.map((album, i)=> (
                                    <Grid item xs={12} sm={6} md={4} key={i}>
                                        <Album album={album}/>
                                    </Grid>
                                    ))}
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" className={classes.title}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h4" className={classes.title}>
                                        Авторская музыка
                                    </Typography>
                                    <Grid container spacing={4}>
                                        {tracks.map((track) => (
                                            <Grid item xs={12} sm={6} key={track.id}>
                                                <Player track = {track}/>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Paper>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        </Box>
    );
};
export default Music;