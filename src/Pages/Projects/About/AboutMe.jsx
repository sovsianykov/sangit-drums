
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from './styles'
import VideoPlayer from "./VideoPlayer/VideoPlayer";


import ava from "../../../assets/forGallery/avatab.jpg";


const videos = [
    { id: 1 , src : 'https://www.youtube.com/watch?v=yl5qnhh1A3A', title : 'Сергей Табунщик - барабанщик'  },
    { id: 2 , src : 'https://www.youtube.com/watch?v=vrvjr89K0Ps', title : 'Сергей Табунщик - преподаватель на ударных'  }
]

const AboutMe = () => {
    const classes = useStyles()


    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" className={classes.title}>
                                Кто такой Сергей Табунщик ?
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
                                        Сергей Табунщик - профессиональный барабанщик, композитор и преподаватель,
                                        автор музыкального проекта «Miracle Now» ЕСМ джаз, автор,
                                        аранжировщик и музыкальный продюсер этно-джазового проекта «Ukrainian Ethno-Fantasy Music».
                                        <br />Лауреат Республиканского конкурса исполнителей на ударных инструментах
                                        (академическая музыка) - маримба, ксилофон, вибрафон, барабаны, литавры г. Днепр(1991)
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        paragraph
                                        className={classes.text}
                                        align="left"
                                    >
                                        Образование:
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        className={classes.text}
                                        align="left"
                                    >
                                        Киевский национальный университет культуры и искусств (1994) - класс ударных профессора Г. В. Черненко
                                        <br /> Московское военно-музыкальное училище (1986) - класс трубы К. Я. Серостанов
                                    </Typography>
                                </Grid>

                                <Grid container spacing={1} justify='center' className={classes.videos}>
                                    {videos.map((video) => (
                                        <Grid item xs={12} sm={6} key={video.id}>
                                            <VideoPlayer video = {video}/>
                                        </Grid>
                                    ))}
                                </Grid>


                                <Grid item xs={12} sm={11} md={11} >

                                    <Typography
                                        variant="h5"
                                        paragraph
                                        className={classes.text}
                                        align="center"
                                    >
                                        Записал 12 студийных альбомов с лучшими музыкантами Украины:
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        paragraph
                                        className={classes.text}
                                        align="center"
                                    >

                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        className={classes.text}
                                        align="center"
                                        style={{marginLeft: '10%'}}
                                    >
                                        Дискография:
                                        <br /><br />
                                        1. «Оливейра» - Квинтет Сергея Овсяникова (1996);
                                        <br />
                                        2. «Ветер Нагуаля» -Квинтет Сергея Овсяникова.(1998);
                                        <br />
                                        3. "Фест" У колі друзів" (1998);
                                        <br />
                                        4. Квинтет Юрия Шепеты "Tribute to Bill Evans" (2002).
                                        <br />
                                        5. Igor Zakus - "Dedication" (2003);
                                        <br />
                                        6. Млада - "Ой весна, весна" (2005);
                                        <br />
                                        7. «Наречена» - Трио Сергея Овсяникова (2005);
                                        <br />
                                        8. Igor Zakus - "Zakus Was Here" (2006);
                                        <br />
                                        9. Алексей Боголюбов  "My "Cool & Crazy" world" (2008),
                                        10. "Drum-Kolo" - DVD, CD (2009),
                                        <br />
                                        11. Квартет Олега Пашковского. "+1". (2012)
                                        <br />
                                        12. «Всяк випадок» - Олег Путятин (1996)

                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        paragraph
                                        className={classes.text}
                                        align="center"
                                    >
                                        Участие в музыкальных проектах
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        className={classes.text}
                                        align="center"
                                        style={{marginLeft: '10%'}}

                                    >
                                        Поп музыка:<br /><br />
                                        Quique Gómez (Испания) 2019
                                        Bob Stoloff-(США) Master class: Stage performance & Solo artistry 2018<br />
                                        Ingrid Arthur (США) 2018<br />
                                        Alloise  2016-2018, 2021<br />
                                        Марина Юрасов Млада 2002-2018<br />
                                        Katya Chilly Group 2010<br />
                                        Таисия Повалий 1998 - 2004<br />
                                        Danin Alexandrov США 1992-96<br />
                                        Terry Lee McMillan  США 1992
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        className={classes.text}
                                        align="center"
                                        style={{marginLeft: '10%'}}

                                    >
                                        Jazz:<br /><br />
                                        Advantage project (2020-2021)<br />
                                        Cynthia Scott (США) 2010<br />
                                        Квинтет Денниса Аду 2019<br />
                                        Квартет Богдана Гуменюка 2019<br />
                                        Секстет Ильи Ересько 2019<br />
                                        Анико Долидзе  2018<br />
                                        Квинтет Кристины Мартиросян 2018-2019<br />
                                        Квинтет Денниса Аду  2017<br />
                                        Трио Натальи Лебедевой 2017<br />
                                        Квартет Богдана Гуменюка 2017<br />
                                        Квартет Марины Юрасовой 2002-2017<br />
                                        Трио Алексея Боголюбова 2005-2017<br />
                                        Квартет Павла Шепеты 2002, 2005, 2019<br />
                                        Армянский проект Лаура и Кристина Марти - 2018<br />
                                        «Art Moldova" - Евгений Дидик  2011<br />
                                        Трио Станислава Чумакова (2010),<br />
                                        Квартет Олега Пашковского (2011),<br />
                                        Квартет Анны Донцовой (2010),<br />
                                        Трио Родиона Иванова (2004),<br />
                                        «Er.J.Orchestra» (2004),<br />
                                        «Z-Band» Игоря Закуса (2001-2004),<br />
                                        Квинтет Юрия Шепеты 1999-2001<br />
                                        Квартет Сергея Овсяникова (1996-2005)

                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        className={classes.text}
                                        align="center"
                                        style={{marginLeft: '10%'}}

                                    >
                                        Авторские проекты:<br /><br />
                                        Сергей Табунщик “Miracle now” ЕСМ (2016).<br />
                                        С 2002 – продюсер, композитор, аранжировщик певицы Млады (Марина Юрасова), в сотрудничестве с которой создаёт несколько успешных джазовых проектов, среди них:
                                        “Capricorn’s dreams"(2002), “Детский проект” (2004)<br />
                                        “Bjork Jazz Tribute” (2005)<br />
                                        Совместно с композитором Павлом Шепетой, в качестве музыкального продюсера создаёт первый украинский этно-джазовый альбом певицы Марины Юасовой Млады "Ой весна, весна" , 2005 записан диск.
                                        С 2006 - автор концертной  программы «Голубка» для этно-джазового проекта Марины Юрасовой «Ukrainian Ethno Fantasy Music»
                                        2010-2011 - организатор проекта "Джаз от Сергея Табунщика" в клубе "Киев"<br />
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        paragraph
                                        className={classes.text}
                                        align="center"
                                    >
                                        Участник музыкальных фестивалей:
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        paragraph
                                        className={classes.text}
                                        align="center"
                                        style={{marginLeft: '10%'}}

                                    >
                                        «Осенний джазовый марафон» (Киев, 1991-1993, 1995, 1997);<br />
                                        «Червона Рута» (Севастополь, 1995),<br />
                                        І гитарный джаз-фест (Киев, 1997);<br />
                                        «Фестиваль джазовой музыки в Никополе» (1998, 1999);<br />
                                        «Джазовые вечера памяти Владимира Симоненко (1999, 2000);<br />
                                        "Международные дни джазовой музыки" (Винница, 2000);<br />
                                        «Jazz Bez» (Львов, 2011);<br />
                                        "Джазовая провинция» (Россия, 2002);<br />
                                        Birstonas Jazz Festival (Прибалтика, 2004),<br />
                                        «Drum-kolo» (Киев, 2007),<br />
                                        «Jazzperfest» (Харьков, 2008),<br />
                                        "Трипільське коло" (2011), (2013),<br />
                                        "Флюгери Львова" (2011),<br />
                                        "Музичні діалоги" (Луцьк) 2012,<br />
                                        "Черкаські джазові дні" (Черкаси) 2012.<br />
                                        "Сосо Джаз" Одесса (2013),<br />
                                        «Країна Мрій» (Киев, 2008, 2015)

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
export default AboutMe;