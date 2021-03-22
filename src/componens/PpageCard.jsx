import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Src from  "../assets/img/442.jpg"

const useStyles = makeStyles({
    root: {
        width: 345,
        color: 'white',
        textShadow : '0 0 4px black'
        // background:  '#eaba7f',
    },
    media: {
        height: 140,
    },

});

export default function MediaCard({pages}) {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{background: pages.back  }}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Src}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {pages.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
}