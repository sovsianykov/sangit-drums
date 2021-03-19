import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
         position: "relative",
        top: -48,
        maxWidth: '100%',
        background: "#FAFAFA",
        height: "110vh",
        paddingTop: 10 ,
        paddingLeft: 20,
        paddingRight: 20,

    },
    title : {
        color: "#3c3c3c",
        textAlign: "center",
        marginBottom: "1rem",

    },
    text : {
        color: "#3c3c3c",
        paddingLeft: 40,
        paddingRight: 40,
        marginLeft:'20px',
        marginBottom:40,
        textIndent: 40



    },
    image: {
        width:'100%',
        padding: 10,
        overflow: "hidden"
    },
    pic : {
        display: "block",
        width:'100%',
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            width: '70%',
            marginTop: 60,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    }
}));