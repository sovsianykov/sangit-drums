
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from './styles'
import Album from "./Album";

const albums = [
    { artist : 'Mlada', title : "O Vesna Vesna ",
        image : 'https://is2-ssl.mzstatic.com/image/thumb/Music69/v4/a6/e4/7e/a6e47e17-7465-0e1e-c0c4-8065e6f3a325/190394304218.jpg/1000x1000bb.webp',
    src: 'https://music.apple.com/ru/album/o-vesna-vesna/1090377015'
    },
    { artist : 'Igor Zakus  ', title : "Zakus Was Here",
        image : 'https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/da/15/2d/da152d5e-2b41-bdc5-9e2b-73feb5f9a423/cover_10160056.jpg/1000x1000bb.webp',
        src: 'https://music.apple.com/ru/album/zakus-was-here/1482920848'
    },
    { artist : 'Serhiy Ovsyanikov Trio ', title : "The Bride ",
        image : 'https://is1-ssl.mzstatic.com/image/thumb/Music/9b/fd/0e/mzi.dkxdwvgp.tif/1000x1000bb.webp',
        src: 'https://music.apple.com/ru/album/the-bride/208427858'
    },
    { artist : 'Igor Zakus ', title : "Dedication ",
        image : 'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/27/50/6c/27506c59-9ad2-1c55-0a20-71b5bccac1e2/cover_10160065.jpg/1000x1000bb.webp',
        src: 'https://music.apple.com/ru/album/dedication/1482920104'
    },
    { artist : 'Oleg Pashkovsky Ouartet ', title : "+1 ",
        image : 'https://is2-ssl.mzstatic.com/image/thumb/Music69/v4/a6/e4/7e/a6e47e17-7465-0e1e-c0c4-8065e6f3a325/190394304218.jpg/1000x1000bb.webp',
        src: 'https://music.apple.com/ru/album/o-vesna-vesna/1090377015'
    },
    { artist : 'Serhiy Ovsyanikov Group', title : "Wind of Nagual",
        image : 'https://is3-ssl.mzstatic.com/image/thumb/Music19/v4/22/39/a6/2239a68b-7924-95bd-7ce9-456bfb8656e6/649558963629.jpg/1000x1000bb.webp',
        src: 'https://music.apple.com/us/album/wind-of-nagual/1175662410 '
    },
]

const Music = () => {
    const classes = useStyles()
    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" className={classes.title}>
                                Альбомы
                            </Typography>
                            <Grid container spacing={6}>
                                {albums.map((album, i) => (
                                    <Grid item xs={12} sm={6} md={4} key={i}>
                                        <Album  album={album}/>
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
export default Music;