import * as React from "react";
import { Box, Paper, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
import ava from "../../../assets/forGallery/avatab.jpg";
import aboutPr from "../../../assets/img/aboutPR.jpg";
import { albums, tracks } from "../../../assets/albums";
import { videos , } from "../../../assets/arrayForVideos";
import Album from "./Album";
import Player from "./Player/Player";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
// import Footer1 from "../../Footer/Footer1";

const WhoIs = () => {
  const classes = useStyles();
  // useEffect(() =>{
  //   audio1.play().then(r => r)
  //   audio1.volume = 0.05;
  // },[])
  return (
    <Box>
      <main className={classes.root}>

        <Grid container justify="center">
          <Grid item xs={12} sm={11} md={11}>
            <Paper className={classes.paper} style={{ marginTop: "0" }}>
              <Typography variant="h4" className={classes.title}>
                О проекте «Sangit-Drum»
              </Typography>
              <Typography variant="subtitle1" className={classes.title}>
                Sangit-drum - это авторский проект, частная школа украинского барабанщика Сергея Табунщика
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={3} md={3}>
                  <div className={classes.image}>
                    <img className={classes.pic} src={aboutPr} alt="ava" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <p className={classes.textSec}>
                    Цели :
                  </p>
                  <p className={classes.textSec}>
                    1. Популяризация барабанов - познакомить как можно больше
                    людей с барабанным искусством.
                  </p>
                  <p className={classes.textSec}>
                    2. Профессиональное обучение на барабанах, системный подход
                    для будущих барабанщиков.
                  </p>
                  <p className={classes.textSec}>
                    3. Дать возможность исполнителям на других инструментах овладеть основами ритмики.
                  </p>
                  <p className={classes.textSec}>
                    4. Консультации в области методики преподавания барабанов.
                  </p>
                  <Typography
                    variant="body1"
                    paragraph
                    className={classes.text}
                    align="left"
                >
                    «Основная моя задача состоит в том, чтобы системно и структурно дать базовые основы
                    начинающим барабанщикам. Это пошаговые уроки, где постигаются все премудрости барабанного искусства,
                    даются детальные инструкции по всем вопросам техник рук,
                    ног и координации, занятий с метрономом и, разумеется, по всем музыкальным вопросам.»
                  </Typography>
                  < Typography
                      variant="body1"
                      paragraph
                      className={classes.text}
                      align="left"
                  >
                    «Главным принципом в технике рук и ног является расслабление. Оно напрямую связано с нашей психикой,
                    поэтому свой метод я называю Барабанной йогой,
                    где применяю техники концентрации, то есть техники осознанного управления своим вниманием.»<br/>
                    Проект «Sangit-Drum»  полезен не только барабанщикам. Исполнителям на других инструментах,
                    а также вокалистам, я предлагаю специальные курсы для освоения техник занятий с метрономом,
                    упражнений для развития чувства времени и ритмичной игры.
                    Всё это дополняется авторским, специально созданным нотным материалом.

                  </Typography>
                  <Typography
                      variant="body1"
                      paragraph
                      className={classes.text}
                      align="left"
                  >
                    Также, я провожу специальные индивидуальные сессии для преподавателей на ударных
                    и других инструментах, это так называемые супервизии, - консультации в области методики преподавания,
                    психологии коммуникации с учениками.

                  </Typography>
                  <Typography
                      variant="body1"
                      paragraph
                      className={classes.text}
                      align="left"
                  >
                    Кроме того, люди, которые занимаются самоисследованием, познанием своей психики, которым близка медитация,
                    могут реализовываться здесь через игру на барабанах, используя техники концентрации и осознанности.

                </Typography>
                  <Typography
                      variant="body1"
                      paragraph
                      className={classes.text}
                      align="left"
                  >
                    Обучение проходит в виде индивидуальных занятий и онлайн-уроков. А также проводятся мастер-классы,
                    тренинги, онлайн-курсы, специальные сессии для преподавателей, инструменталистов и вокалистов.
                  </Typography>
                  <Typography
                      variant="body1"
                      paragraph
                      className={classes.text}
                      align="left"
                  >
                    Одним из важнейших аспектов в искусстве игры на барабанах является умение концентрировать
                    своё внимание, удерживая его в нескольких направлениях. Это помогает отследить напряжения в
                    теле и расслабиться, чтобы свободно чувствовать себя за инструментом, наслаждаясь комфортным
                    состоянием тела и ума. Поэтому через барабанную йогу, которая является психологической подготовкой
                    для расслабленности физического тела, так или иначе, проходят все) Умение концентрировать внимание
                    помогает в
                    любой области жизни, чем бы не занимался человек, будь то бизнес, искусство или медитация.
                  </Typography>

                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
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
        <Grid container justify="center">
          <Grid item xs={12} sm={11} md={11}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.title}>
                Участие в альбомах
              </Typography>
              <Grid container spacing={4}>
                {albums.map((album, i)=> (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <Album album={album}/>
                    </Grid>
                ))}
              </Grid>
            </Paper>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.title}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" className={classes.title}>
                    Авторское
                  </Typography>
                  <Grid container spacing={4}>
                    {tracks.map((track) => (
                        <Grid item xs={12} sm={6} key={track.id}>
                          <Player track = {track}/>
                        </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </Box>
  );
};
export default WhoIs;
