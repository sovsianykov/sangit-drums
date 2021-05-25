import * as React from "react";
import { Box, Paper, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
import news1 from "../../../assets/news/news1.jpg";
import news2 from "../../../assets/news/news2.jpg";
import news3 from "../../../assets/news/news3.jpg";
import news4 from "../../../assets/news/news4.jpg";


const CurrentNews = () => {
    const classes = useStyles();
    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" className={classes.title}>
                                Открытые прослушивания
                            </Typography>
                            <Grid container spacing={4} className={classes.edBlock}>
                                <Grid item xs={12} sm={3} md={3}>
                                    <div className={classes.image}>
                                        <img className={classes.pic} src={news1} alt="ava2" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={8}>
                                    <Typography variant='body1' className={classes.textSec}>
                                        Друзья! 6 февраля 2021<br/>

                                        Приглашаю на открытые прослушивания всех, кто желает научиться играть на барабанах,
                                        хочет соприкоснуться с инструментом, попробовать себя в этом деле!<br/>

                                        Это индивидуальные пробные уроки (до 20 минут), на которых мы познакомимся с вами и вы сможете попробовать сыграть на барабанах простейшие ритмические рисунки
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        className={classes.text}
                                        align="left"
                                    >

                                        Запишитесь на пробный урок! <br/>

                                        12.00 - 15.00<br/>

                                        Студия «Eurovox»<br/>

                                        ул. Межигірська, 87А,<br/>

                                        ст. метро Т. Шевченко<br/>

                                        КИЕВ<br/>

                                        Вход свободный<br/>

                                        Жду Вас!<br/>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h4" className={classes.title}>
                                Йога барабанщика
                            </Typography>
                            <Grid container spacing={4} className={classes.edBlock}>
                                <Grid item xs={12} sm={3} md={3}>
                                    <div className={classes.image}>
                                        <img className={classes.pic} src={news2} alt="ava2" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={8}>
                                    <Typography variant='body1' className={classes.textSec}>
                                        28 февраля<br/>
                                        «Йога барабанщика» юниор -тренинг<br/>
                                        дети 7-15 лет<br/>
                                        Техника рук и независимость!<br/>
                                        Приди и научись!<br/>
                                        Друзья, я создал специальный тренинг «Йога барабанщика» для молодых, начинающих барабанщиков, в котором поделюсь своим опытом и знаниями.
                                        Это базовый уровень основных навыков и упражнений, который позволит участникам сделать правильные шаги на пути последующего развития техники рук и независимости.
                                        Тренинг «Йога барабанщика» это 2 часа тренировок, где участники получают знания и отрабатывают практические навыки, осваивают новые приёмы игры!
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        className={classes.text}
                                        align="left"
                                    >
                                        13.00 - 15.00 <br/>
                                        Студия «Eurovox»<br/>
                                        ул. Межигірська, 87А,<br/>
                                        ст. метро Т. Шевченко<br/>
                                        КИЕВ

                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h4" className={classes.title}>
                                Ритмичная игра
                            </Typography>
                            <Grid container spacing={4} className={classes.edBlock}>
                                <Grid item xs={12} sm={3} md={3}>
                                    <div className={classes.image}>
                                        <img className={classes.pic} src={news3} alt="ava2" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={8}>
                                    <Typography variant='body1' className={classes.textSec}>
                                        3 апреляТренинг- «Ритмичная игра»<br/>
                                        Для всех инструменталистов, вокалистов и преподавателей.<br/>
                                        Научись играть ритмично!<br/>
                                        Друзья, 3 апреля я провожу в Киеве свой первый авторский тренинг «Ритмичная игра».<br/>
                                        Приглашаю всех желающих, кто хотел бы улучшить своё чувство ритма, времени, научиться более качественно исполнять музыкальные ритмические структуры. Метод и непосредственная проработка упражнений на тренинге позволят вам понять суть ритмичной игры и получить собственное представление о том, как сделать свою игру более качественной, ритмичной и драйвовой. Это воспитание внутреннего чувства, ощущения того, что в музыкальных кругах называют «Good time» - хорошее время.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        className={classes.text}
                                        align="left"
                                    >
                                        12.00 - 14.00<br/>
                                        Киев<br/>
                                        Студия «Eurovox»<br/>
                                        ул. Межигорская, 87А,<br/>
                                        ст. метро Т. Шевченко

                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h4" className={classes.title}>
                                Мастер-класс
                            </Typography>
                            <Grid container spacing={4} className={classes.edBlock}>
                                <Grid item xs={12} sm={3} md={3}>
                                    <div className={classes.image}>
                                        <img className={classes.pic} src={news4} alt="ava2" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={8}>
                                    <Typography variant='body1' className={classes.textSec}>
                                        Друзья, 29 мая приглашаю на мой Мастер-класс!<br/>
                                        1 часть - для барабанщиков!<br/>
                                        «Техника игры на барабанах» - основные приемы развития рук и ног<br/>
                                        2 часть - для  инструменталистов, вокалистов, преподавателей!<br/>
                                        «Ритмичная игра» - ощущение времени, как правильно заниматься с метрономом
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        className={classes.text}
                                        align="left"
                                    >
                                        12.00-14.00<br/>
                                        Рок школа<br/>
                                        г. Бровары, б-р Независимости,16<br/>
                                        Запись по тел. 097 9378986, 066 3791039<br/>
                                        Количество мест ограничено!<br/>
                                        Вход свободный


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
export default CurrentNews;
