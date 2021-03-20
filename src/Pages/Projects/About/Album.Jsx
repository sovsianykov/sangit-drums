
import * as React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflow: 'hidden',
        background : "transparent",
        height : "450"


    },
    media: {
        height: 140,
    },

});

const Album =() => {
    const classes = useStyles();

    return (
        <Box>
            <iframe
                    src="https://embed.music.apple.com/ru/album/o-vesna-vesna/1090377015"></iframe>
        </Box>
    );
};
export default Album