import * as React from "react";
import { Box, Paper, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
import aboutPr from "../../../assets/forGallery/thumbnail/03.jpg";

const WhoIs = () => {
  const classes = useStyles();

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

        {/*<Grid container justify="center">*/}
        {/*  <Grid item xs={12} sm={11} md={11}>*/}
        {/*    <Paper className={classes.paper}>*/}
        {/*      <Typography variant="h4" className={classes.title}>*/}
        {/*        Участие в альбомах*/}
        {/*      </Typography>*/}
        {/*      <Grid container spacing={4}>*/}
        {/*        {albums.map((album, i)=> (*/}
        {/*            <Grid item xs={12} sm={6} md={4} key={i}>*/}
        {/*              <Album album={album}/>*/}
        {/*            </Grid>*/}
        {/*        ))}*/}
        {/*      </Grid>*/}
        {/*    </Paper>*/}
        {/*    <Paper className={classes.paper}>*/}
        {/*      <Typography variant="h4" className={classes.title}>*/}
        {/*        <Paper className={classes.paper}>*/}
        {/*          <Typography variant="h4" className={classes.title}>*/}
        {/*            Авторское*/}
        {/*          </Typography>*/}
        {/*          <Grid container spacing={4}>*/}
        {/*            {tracks.map((track) => (*/}
        {/*                <Grid item xs={12} sm={6} key={track.id}>*/}
        {/*                  <Player track = {track}/>*/}
        {/*                </Grid>*/}
        {/*            ))}*/}
        {/*          </Grid>*/}
        {/*        </Paper>*/}
        {/*      </Typography>*/}
        {/*    </Paper>*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
      </main>
    </Box>
  );
};
export default WhoIs;
