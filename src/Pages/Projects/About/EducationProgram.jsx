
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from './styles'
import  eduPr1  from '../../../assets/img/pr1.jpg'
import  eduPr2  from '../../../assets/img/pr2.jpg'




const EducationProgram = () => {

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
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={3} md={3}>
                                    <div className={classes.image}>
                                        <img className={classes.pic} src={eduPr1} alt="ava2" />
                                    </div>
                                    <div className={classes.image} style={{marginTop:"100px"}}>
                                        <img className={classes.pic} src={eduPr2} alt="ava2" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={8}>
                                    <p className={classes.textSec}>
                                        - постановка рук, ног
                                    </p>
                                    <p className={classes.textSec}>
                                        - базовые рудиментарные навыки
                                    </p>
                                    <p className={classes.textSec}>
                                        - координация, развитие независимости
                                    </p>
                                    <p className={classes.textSec}>
                                        - игра под метроном, чувство времени
                                    </p>
                                    <p className={classes.textSec}>
                                        - нотная грамота
                                    </p>
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
                                        - изучение стилей: рок, джаз, фанк, афро-куба, Бразилия, поп, блюз т.д.
                                    </p>
                                    <Typography
                                        variant="h5"
                                        paragraph
                                        className={classes.textSec}
                                        align="left"
                                    >
                                         <br/>
                                        Стоимость - 500 грн,  60 минут <br/>
                                        Пробный урок, Киев - 250 грн, 30 мин<br/>
                                        Пробный урок по скайпу - бесплатно, 30 мин<br/>

                                        Абонемент на 8 занятий в месяц
                                        3600 грн - скидка 10% (стоимость урока - 450 грн)<br/>

                                        Абонемент на 12 занятий в месяц
                                        4800 грн - скидка 20% (стоимость урока - 400 грн)

                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        paragraph
                                        className={classes.title}
                                        align="left"
                                    >
                                        Специальные сессии для преподавателей
                                    </Typography>
                                    < Typography
                                        variant="h5"
                                        paragraph
                                        className={classes.textSec}
                                        align="left"
                                    >
                                        Индивидуальные консультации по вопросам обучения детей и взрослых на барабанах.<br/>
                                        Стоимость 500 грн - 60 мин
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        paragraph
                                        className={classes.title}
                                        align="left"
                                    >
                                        Курсы для инструменталистов, вокалистов, преподавателей
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        paragraph
                                        className={classes.textSec}
                                        align="left"
                                    >
                                        <br/>
                                        Онлайн-курс «Ритмичная игра»
                                        Развитие чувства времени, работа с метрономом, понятие Groove, трех-векторное внимание, (пяти-векторное для барабанщиков) + Нотный материал
                                        Базовый 12-дневный курс (6 практических занятий)
                                        Стоимость 2000 грн
                                        <br/><br/>
                                        Онлайн-курс «Как преподавать барабаны системно?»
                                        Техника рук, независимость, рудиментарные основы, чувство времени, работа с метрономом, структура изучения ритмов на ударной установке + нотный материал.
                                        Стоимость 1500 грн
                                        8-дневный курс (4 занятия)
                                        <br/><br/>
                                        Онлайн-курс «Нечетные размеры»
                                        Методы изучение 5/4, 7/4, 9/4…
                                        Продвинутый уровень
                                        10 -дневный курс (5 практических занятий)
                                        Стоимость 1800 грн
                                        <br/><br/>

                                        Онлайн-курс «Три в одном»
                                        Размеры 6/8, 12/8, 3/4 - «пляшущие друг в друге».
                                        Единая пульсация (12/8) при различной акцентировке, свободное переключение
                                        Продвинутый уровень
                                        Недельный курс (4 практических занятий)
                                        Стоимость 1500 грн
                                        <br/><br/>
                                      Онлайн-курс «Полиритмия и полиметрия»
                                        Продвинутый уровень
                                        10-дневный курс (5 практических занятий)
                                        Стоимость 1800 горн<br/>
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
export default EducationProgram;