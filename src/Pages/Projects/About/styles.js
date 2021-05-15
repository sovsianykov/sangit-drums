import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        // background: "#17252A ",
        // background: "#280b36",
        minHeight: "1000px",
        paddingTop: 10 ,


    },
    title : {
        marginTop: 40,
        color: "#3c3c3c",
        textAlign: "center",
        marginBottom: "1rem",

    },
    text : {
        color: "#3c3c3c",
        paddingLeft: 40,
        paddingRight: 40,
        // marginLeft:'20px',
        marginBottom:40,
        textIndent: 40
    },
    textSec : {
        textIndent: '25px',
        color: "#3c3c3c",
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 15,
        lineHeight: '25px',
        fontSize : '18px'
    },

    image: {
        width:'100%',
        padding: 10,
        overflow: "hidden"
    },
    imageEd: {
        width:'400px',
        height: '300px',
        padding: 10,
        overflow: "hidden"
    },
    pic : {
        display: "block",
        width:'100%',
    },
    picEd : {
        display: "block",
        height:'100%',
    },
    videos : {
        marginTop: '30px',
        marginBottom : '40px'

    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        backgroundColor : 'antiquewhite',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            marginTop: 60,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    }
}));
