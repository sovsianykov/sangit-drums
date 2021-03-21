import React, { useState, useEffect } from "react";
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import {Box, Button, Typography} from "@material-ui/core";
import { blueGrey} from '@material-ui/core/colors';
import {audio1} from '../../Projects'

const ColorButton = withStyles(() => ({
    root: {
        color: "white",
         width: '360px',
        backgroundColor: blueGrey[600],
        '&:hover': {
            backgroundColor: blueGrey[700],
        },
    },
}))(Button);
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));



const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            audio1.pause()
            playing ? audio.play() : audio.pause();
        },
        [audio, playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return [playing, toggle];
};

const Player = ({track}) => {
    const classes = useStyles()

    const [playing, toggle] = useAudio(track.src);

    return (
        <Box>
            <div style={{display:"block"}}>
                <ColorButton variant='contained' className={classes.margin} color='primary'  onClick={toggle}>{playing ? "Pause" :  track.title}</ColorButton>

                {/*<Typography variant='h5'>*/}
                {/*    {track.title}*/}
                {/*</Typography >*/}
                <Typography variant='body2' color='textPrimary'>
                    {track.description}
                </Typography>
            </div>

        </Box>
    );
};

export default Player;