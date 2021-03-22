// import React, { useState, useEffect } from "react";
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import {Box, Button, Typography} from "@material-ui/core";
import {deepOrange,} from '@material-ui/core/colors';
// import {audio1} from '../../Projects'
import {tracks} from "../../../../assets/albums";
import StopIcon from '@material-ui/icons/Stop';
const ColorButton = withStyles(() => ({
    root: {
        color: "white",
         width: '360px',
        backgroundColor: deepOrange[600],
        '&:hover': {
            backgroundColor: deepOrange[700],
        },
    },
}))(Button);
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));


//
// const useAudio = url => {
//     const [audio] = useState(new Audio(url));
//     const [playing, setPlaying] = useState(false);
//
//     const toggle = () => setPlaying(!playing);
//
//     useEffect(() => {
//             audio1.pause()
//             playing ? audio.play() : audio.pause();
//         },
//         [audio, playing]
//     );
//
//     useEffect(() => {
//         audio.addEventListener('ended', () => setPlaying(false));
//         return () => {
//             audio.removeEventListener('ended', () => setPlaying(false));
//         };
//     }, [audio]);
//
//     return [playing, toggle];
// };
let aud = []
 aud[0] = new Audio(tracks[0].src)
 aud[1] = new Audio(tracks[1].src)
 aud[2] = new Audio(tracks[2].src)
 aud[3] = new Audio(tracks[3].src)
 aud[4] = new Audio(tracks[4].src)
 aud[5] = new Audio(tracks[5].src)
 aud[6] = new Audio(tracks[6].src)
 aud[7] = new Audio(tracks[7].src)
 aud[8] = new Audio(tracks[8].src)

const Player = ({track}) => {
    const classes = useStyles()
    aud.forEach(el => {
        el.pause()
    })

    const stop = () => {

        aud.forEach((el,i) => {
            el.pause()
            tracks[i].isPlaying = 'false'
        })
    }
    const buttonHandler = () => {
       stop()
      aud[track.id].play()
          track.isPlaying ='true'
    }
    // const [playing, toggle] = useAudio(track.src);


    return (
        <Box>
            <div style={{display:"inline-block"}}>

                <ColorButton variant='contained' className={classes.margin} color='primary'  onClick={buttonHandler}>{ track.title}</ColorButton>
                <Button onClick={stop} variant='outlined' color='default' >
                    <StopIcon/>
                </Button>
                <Typography variant='body2' color='textPrimary'>
                    {track.description}
                </Typography>
            </div>


        </Box>
    );
};

export default Player;