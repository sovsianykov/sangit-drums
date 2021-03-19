
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from './styles'
import ava from '../../../assets/forGallery/avatab.jpg';
import Footer1 from "../../Footer/Footer1";



 const WhoIs = () => {
    const classes = useStyles()
    return (
        <Box>
            <main className={classes.root}>
                <Paper  className={classes.paper}>
                    <Typography variant='h4' className={classes.title}>
                        Кто такой Сергей Табунщик
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={3} md={3}>
                            <div className={classes.image}>
                                <img  className={classes.pic} src={ava} alt="ava"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            <Typography variant='body1' paragraph className={classes.text} align='left'>
                                Профессиональный барабанщик, преподаватель, композитор, автор проекта «Sangit-Drum», аранжировщик и музыкальный продюсер этно-джазового проекта.
                                Лауреат Республиканского конкурса исполнителей на ударных инструментах - маримба, ксилофон, вибрафон, барабаны, литавры(1991).
                            </Typography>
                            <Typography variant='body1' paragraph className={classes.text} align='left'>
                                Сотрудничал с музыкантами из разных стран - Таисия Повалий, Млада, Katya Chilly, Злата Огневич, Alloise, Cynthia Scott (США), Quique Gómez (Испания), Bob Stoloff (США), Ingrid Arthur (США),
                                Записал более 10-ти пластинок с лучшими музыкантами Украины.
                            </Typography>
                            {/*<Typography variant='body1' paragraph className={classes.text} align='left'>*/}
                            {/*    */}
                            {/*</Typography>*/}
                            <Typography variant='body1' paragraph className={classes.text} align='left'>
                                Образование:<br/>
                                 Киевский национальный университет культуры и искусств (1994) - класс ударных профессора Г. В. Черненко
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        </Box>
    );
};
export default WhoIs
