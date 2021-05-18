import * as React from "react";
import {useState} from "react";
import BeerModal from "../../../componens/Modal/BeerModal";
import { Box, Paper, Typography, Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import eduPr1 from "../../../assets/img/pr1.jpg";
import eduPr2 from "../../../assets/img/pr2.jpg";
import eduPr3 from "../../../assets/img/Pr3.jpg";
import eduPr4 from "../../../assets/img/Pr4.jpg";
import eduPr5 from "../../../assets/img/Pr5.jpg";
import eduPr6 from "../../../assets/img/Pr6.jpg";
import eduPr7 from "../../../assets/img/Pr7.jpg";

const EducationProgram = () => {
  const [modalActive, setModalActive] = useState(false)
  const classes = useStyles();
  return (
    <Box>
      <BeerModal active={modalActive} setActive={setModalActive}  >
        <h2 >
          item.name
        </h2>


        <h2  >
          brewers tips : <br/> <br/>
          first brewed : <br/>
        </h2>

      </BeerModal>
      <main className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12} sm={11} md={11}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.title}>
                Индивидуальные занятия на барабанах
              </Typography>
              <Grid container spacing={4} className={classes.edBlock} >
                <Grid item xs={12} sm={3} md={3} >
                  <div className={classes.image}>
                    <img className={classes.pic} src={eduPr1} alt="ava2" />
                  </div>
                  {/*<div className={classes.image}>*/}
                  {/*  <img className={classes.pic} src={eduPr5} alt="ava2" />*/}
                  {/*</div>*/}
                </Grid>
                <Grid item xs={12} sm={8} md={8} >
                  <p className={classes.textSec}>- постановка рук, ног</p>
                  <p className={classes.textSec}>
                    - базовые рудиментарные навыки
                  </p>
                  <p className={classes.textSec}>
                    - координация, развитие независимости
                  </p>
                  <p className={classes.textSec}>
                    - игра под метроном, чувство времени
                  </p>
                  <p className={classes.textSec}>- нотная грамота</p>
                  <p className={classes.textSec}>
                    - игра с музыкальной группой - «под минус»
                  </p>
                  <p className={classes.textSec}>
                    - аранжировка барабанной партии
                  </p>
                  <p className={classes.textSec}>
                    - импровизация, соло, спонтанная игра
                  </p>
                  <p className={classes.textSec}>
                    - изучение стилей: рок, джаз, фанк, афро-куба, Бразилия,
                    поп, блюз т.д.
                  </p>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.textSec}
                    align="left"
                  >
                    <br />
                    Стоимость - 500 грн, 60 минут <br />
                    Пробный урок, Киев - 250 грн, 30 мин
                    <br />
                    Пробный урок по скайпу - бесплатно, 30 мин
                  </Typography>
                   <Typography variant='h6' className={classes.text} color='textPrimary'>
                     <br />
                     Абонемент на 8 занятий в месяц 3600 грн - скидка 10%
                     (стоимость урока - 450 грн)
                     Абонемент на 12 занятий в месяц 4800 грн - скидка 20%
                     (стоимость урока - 400 грн)
                   </Typography>
                  <Button
                      variant="contained"
                      className={classes.btn}
                      color="secondary"
                      onClick={() => setModalActive(true)}
                  >
                    Записаться
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={4} className={classes.edBlock} >
                <Grid item xs={12} sm={3} md={3}>
                  <div className={classes.image}>
                    <img className={classes.pic} src={eduPr2} alt="ava2" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} md={8} >
                  <Typography
                    variant="h4"
                    paragraph
                    className={classes.title}
                    align="left"
                  >
                    Специальные сессии для преподавателей
                  </Typography>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.textSec}
                    align="center"
                  >
                    Индивидуальные консультации по вопросам обучения детей и
                    взрослых на барабанах.
                  </Typography>
                  <div className={classes.price}> Стоимость 500 грн - 60 мин</div>
                  <Button
                      variant="contained"
                      className={classes.btn}
                      color="secondary"
                      onClick={() => setModalActive(true)}
                  >
                    Записаться на курс
                  </Button>
                </Grid>
              </Grid>
              <Typography
                  variant="h4"
                  paragraph
                  className={classes.title}

                  align="center"
              >
                Курсы для инструменталистов, вокалистов, преподавателей
              </Typography>
              <Grid container spacing={4} className={classes.edBlock}>
                <Grid item xs={12} sm={3} md={3}>
                  <div className={classes.image}>
                    <img className={classes.pic} src={eduPr3} alt="ava2" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.title}
                    style={{ fontWeight : '600'}}
                    align="center"
                  >
                    Онлайн-курс «Ритмичная игра»
                  </Typography>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.textSec}
                    align="left"
                  >
                    Развитие чувства времени, работа с метрономом, понятие
                    Groove, трех-векторное внимание, (пяти-векторное для
                    барабанщиков) + Нотный материал Базовый 12-дневный курс (6
                    практических занятий)<br/>
                  </Typography>
                  <div className={classes.price}> Стоимость 2000 грн</div>
                  <Button
                    variant="contained"
                    className={classes.btn}
                    color="secondary"
                    onClick={() => setModalActive(true)}
                  >
                    Записаться на курс
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={4} className={classes.edBlock}>
                <Grid item xs={12} sm={3} md={3}>
                  <div className={classes.image}>
                    <img className={classes.pic} src={eduPr6} alt="ava2" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Typography
                      variant="h5"
                      paragraph
                      className={classes.title}
                      style={{ fontWeight : '600'}}
                      align="center"
                  >
                    Онлайн-курс «Как преподавать барабаны системно?»

                  </Typography>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.textSec}
                    align="left"
                  >
                    Техника рук, независимость, рудиментарные основы, чувство
                    времени, работа с метрономом, структура изучения ритмов на
                    ударной установке + нотный материал.
                  </Typography>
                  <div className={classes.price}>  Стоимость 1500 грн
                    8-дневный курс (4 занятия)</div>

                  <Button
                      variant="contained"
                      className={classes.btn}
                      color="secondary"
                      onClick={() => setModalActive(true)}
                  >
                    Записаться на курс
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={4} className={classes.edBlock}>
                <Grid item xs={12} sm={3} md={3}>
                  <div className={classes.image}>
                    <img className={classes.pic} src={eduPr4} alt="ava2" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.title}
                    align="center"
                  >
                    Онлайн-курс «Нечетные размеры»
                  </Typography>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.textSec}
                    align="left"
                  >
                    Методы изучение 5/4, 7/4, 9/4… Продвинутый уровень 10
                    -дневный курс (5 практических занятий) Стоимость 1800 грн
                  </Typography>
                  <div className={classes.price}>  Стоимость 1800 грн</div>
                  <Button
                      variant="contained"
                      className={classes.btn}
                      color="secondary"
                      onClick={() => setModalActive(true)}
                  >
                    Записаться на курс
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={4} className={classes.edBlock}>
                <Grid item xs={12} sm={3} md={3}>
                  <div className={classes.image}>
                    <img className={classes.pic} src={eduPr7} alt="ava2" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.title}
                    align="center"
                  >
                    Онлайн-курс «Три в одном»
                  </Typography>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.textSec}
                    align="left"
                  >
                    Размеры 6/8, 12/8, 3/4 - «пляшущие друг в друге». Единая
                    пульсация (12/8) при различной акцентировке, свободное
                    переключение Продвинутый уровень Недельный курс (4
                    практических занятий)
                  </Typography>
                  <div className={classes.price}>  Стоимость 1500 грн</div>

                  <Button
                      variant="contained"
                      className={classes.btn}
                      color="secondary"
                      onClick={() => setModalActive(true)}
                  >
                    Записаться на курс
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={4} className={classes.edBlock}>
                <Grid item xs={12} sm={3} md={3}>
                  <div className={classes.image}>
                    <img className={classes.pic} src={eduPr5} alt="ava2" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.title}
                    align="center"
                  >
                    Онлайн-курс «Полиритмия и полиметрия»
                  </Typography>
                  <Typography
                    variant="h5"
                    paragraph
                    className={classes.textSec}
                    align="left"
                  >
                    Продвинутый уровень 10-дневный курс (5 практических занятий)
                    <br />
                  </Typography>
                  <div className={classes.price}>  Стоимость 1800 грн</div>

                  <Button
                      variant="contained"
                      className={classes.btn}
                      color="secondary"
                      onClick={() => setModalActive(true)}
                  >
                    Записаться на курс
                  </Button>
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
