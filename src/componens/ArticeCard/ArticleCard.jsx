import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import img1 from './../../assets/img/drums-drum-set-illustration-by-Vexels.png';


const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        textDecoration: "none",
        color : "firebrick",
        backgroundColor : 'antiquewhite',
        display: "flex",
        flexDirection : 'column'


    },
    heading: {
        width: '345px',
        textDecoration: "none",
        color : "firebrick",
        backgroundColor : 'antiquewhite',

    },
    title : {
            fontSize : 25,
    },
    media: {
        height: 240,
        backgroundColor : "firebrick",
    },
    content: {
        width: '100%',

        backgroundColor : "firebrick",
    },

    avatar: {
        backgroundColor: red[500],
    },
}));
export const timeStampToString = (ts) => {
     const  date = new Date(ts *1000)
    return date.getFullYear() + '/'+  (date.getMonth() + 1) + '/' + date.getDay()
}
export default function ArticleCard({data}) {
    const classes = useStyles();
    return (
        <>
            { data.isPublish ?
                <Card className={classes.root} component={Link} to ={{
                    pathname : 'article/' +data.id,
                    state : data
                }} >
                    <CardHeader className={classes.heading}
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        S
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={data.title}
                                subheader={timeStampToString(data.createDate.seconds)}
                    />
                    <CardMedia
                        className={classes.media}
                        image={img1}
                        title={data.title}
                    />
                    <CardContent  >
                        {/*<Typography variant="h5" color="textSecondary" component="h5" align='center' className={classes.root}>*/}
                        {/*    {data.categoryLabel}*/}
                        {/*</Typography>*/}
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>


            : ''}

        </>
    );
}
