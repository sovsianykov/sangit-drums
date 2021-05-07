import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from "react-router-dom";
import { Typography  } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        textDecoration: "none",
        color : "blue",
        backgroundColor : 'antiquewhite',
        display: "flex",
        flexDirection : 'column'


    },
    heading: {
        width: '345px',
        textDecoration: "none",
        color : "black",
        backgroundColor : 'antiquewhite',

    },
    title : {
            fontSize : 25,
            color: "black",
        letterSpacing: '0.2rem'
    },
    media: {
        height: 240,
        backgroundColor : "orange",
    },
    content: {
        width: '100%',

        backgroundColor : "blue",
    },

    avatar: {
        backgroundColor: blue[500],
    },
}));
// export const timeStampToString = (ts) => {
//      const  date = new Date(ts *1000)
//     return date.getFullYear() + '/'+  (date.getMonth() + 1) + '/' + date.getDay()
// }
export default function ArticleCard({data}) {
    const classes = useStyles();
    return (
        <>
            { data.isPublish ?
                <Card className={classes.root} component={Link} to ={{
                    pathname : 'article/' +data.id,
                    state : data
                }} >
                    {/*<CardHeader className={classes.heading}*/}
                    {/*            // avatar={*/}
                    {/*            //     <Avatar aria-label="recipe" className={classes.avatar}>*/}
                    {/*            //         S*/}
                    {/*            //     </Avatar>*/}
                    {/*            // }*/}
                    {/*            action={*/}
                    {/*                <IconButton aria-label="settings">*/}
                    {/*                    <MoreVertIcon />*/}
                    {/*                </IconButton>*/}
                    {/*            }*/}
                    {/*            title={data.title}*/}
                    {/*            subheader={timeStampToString(data.createDate.seconds)}*/}
                    {/*/>*/}
                    {/*<CardMedia*/}
                    {/*    className={classes.media}*/}
                    {/*    image={img1}*/}
                    {/*    title={data.title}*/}
                    {/*/>*/}
                    <CardContent  >
                        <Typography variant="h5" color="textSecondary" component="h5" align='center' className={classes.title}>
                            {data.title}
                        </Typography>
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
