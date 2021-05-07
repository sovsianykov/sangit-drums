
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from './styles'
import  eduPr1  from '../../../assets/img/pr1.jpg'
import  eduPr2  from '../../../assets/img/pr2.jpg'




const EducationProgram = () => {
    // useEffect(() =>{
    //     audio1.play().then(r => r)
    //     audio1.volume = 0.05;
    // },[])
    const classes = useStyles()
    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" className={classes.title}>
                                Индивидуальные занятия на барабанах
                            </Typography>
                            <Grid container justify='center'>
                                <Grid item xs={12} md={7}>
                                    <div className={classes.imageEd}>
                                        <img className={classes.picEd} src={eduPr1} alt="ava" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <div className={classes.imageEd}>
                                        <img className={classes.picEd} src={eduPr2} alt="ava" />
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            </main>
        </Box>
    );
};
export default EducationProgram;