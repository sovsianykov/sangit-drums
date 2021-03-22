
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from './styles'
import ava from '../../../assets/forGallery/avatab.jpg';
import aboutPr from '../../../assets/img/aboutPR.jpg';
// import Footer1 from "../../Footer/Footer1";

const WhoIs = () => {
  const classes = useStyles();
  return (
    <Box>
      <main className={classes.root}>
        <Grid container justify="center">
          {/*<Grid item xs='auto' sm={1} ></Grid>*/}
          <Grid item xs={12} sm={11} md={11}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.title}>
                Кто такой Сергей Табунщик
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={3} md={3}>
                  <div className={classes.image}>
                    <img className={classes.pic} src={ava} alt="ava" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Typography
                    variant="body1"
                    paragraph
                    className={classes.text}
                    align="left"
                  >
                    Профессиональный барабанщик, преподаватель, композитор,
                    автор проекта «Sangit-Drum», аранжировщик и музыкальный
                    продюсер этно-джазового проекта. Лауреат Республиканского
                    конкурса исполнителей на ударных инструментах - маримба,
                    ксилофон, вибрафон, барабаны, литавры(1991).
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    className={classes.text}
                    align="left"
                  >
                    Сотрудничал с музыкантами из разных стран - Таисия Повалий,
                    Млада, Katya Chilly, Злата Огневич, Alloise, Cynthia Scott
                    (США), Quique Gómez (Испания), Bob Stoloff (США), Ingrid
                    Arthur (США), Записал более 10-ти пластинок с лучшими
                    музыкантами Украины.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    className={classes.text}
                    align="left"
                  >
                    Образование:
                    <br />
                    Киевский национальный университет культуры и искусств (1994)
                    - класс ударных профессора Г. В. Черненко
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} sm={11} md={11}>
            <Paper className={classes.paper} style={{ marginTop: "0" }}>
              <Typography variant="h4" className={classes.title}>
                Проект «Sangit-Drum» имеет несколько целей, связанных с игрой на
                барабанах.
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={3} md={3}>
                  <div className={classes.image}>
                    <img className={classes.pic} src={aboutPr} alt="ava" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  {/*<Typography variant='h6' paragraph className={classes.text} align='center' color='textSecondary'>*/}

                                    {/*</Typography>*/}





                                    <p className={classes.textSec} >     1. Популяризация барабанов - познакомить как можно больше людей с барабанным искусством.</p>


                                    <p className={classes.textSec} >    2.   Барабанная йога - как способ исследования своего тела и психики через игру на барабанах.</p>


                                    <p className={classes.textSec} >     3.    Профессиональное обучение на барабанах, системный подход для будущих барабанщиков.</p>




                                    <Typography variant='body1' paragraph className={classes.text} align='left'>
                                    «Свою методику я называю барабанной йогой, поскольку игра на барабанах это искусство быть расслабленным и уметь осознанно управлять своим телом. Это внутренняя дисциплина, которая позволяет концентрироваться,

                                        удерживать внимание в нескольких направлениях, находясь в потоке ритма»
                                    </Typography>
                                    <Typography variant='body1' paragraph className={classes.text} align='left'>

                                    </Typography>
                                    <Typography variant='body1' paragraph className={classes.text} align='left'>

                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        </Box>
    );
};
export default WhoIs
