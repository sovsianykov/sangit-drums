import React from "react";
import { YoutubePlayer } from "reactjs-media";
import {Grid} from "@material-ui/core";

const VideoPlayer = ({video}) => {
    return (
        <Grid container justify='center'>
            {/*<Typography variant='h6'>*/}
            {/*    {video.title}*/}
            {/*</Typography>*/}
            <YoutubePlayer
                src={video.src}
                poster="https://www.example.com/poster.png"
                primaryColor="red"
                allowFullScreen
                height={300}
                width= {400}
                // other props
            />
        </Grid>
    );
};

export default VideoPlayer