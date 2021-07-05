import * as React from "react";
import { Box, Paper, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
// import VideoPlayer from "./VideoPlayer/VideoPlayer";
import "./YoutubeEmbed/styles.css";
import YoutubeEmbed from "./YoutubeEmbed/YoutubeEmbed";

const videos2 = [

  {
    id: 8,
    src: "qd8rA8J9OqQ",
    title: "Как заниматься над ритмами | Сергей Табунщик | Уроки на барабанах",
  },
  {
    id: 7,
    src: "s3w4UfPPMsE",
    title: "Чередование длительностей | Сохранение темпа | Сергей Табунщик | Уроки на барабанах",
  },
  {
    id: 6,
    src: "bt8xp5uPgCA",
    title: "Двойные удары | Сергей Табунщик | Уроки на барабанах",
  },
    {
        id: 5,
        src: "-fjNuZRtNAI",
        title: "Независимость рук. Использование голоса | Сергей Табунщик | Уроки на барабанах",
    },
  {
    id: 4,
    src: "sQQjs0rbWWk",
    title: "Динамика рук | Сергей Табунщик | Уроки на барабанах",
  },
  {
    id: 3,
    src: "n-uaGbmDR_Y",
    title:
      "Четыре вида ударов | Full Down Tap Up | Сергей Табунщик | Уроки на барабанах",
  },
  {
    id: 2,
    src: "Y78vuA-liQc",
    title: "Удары кистями | Open Close | Сергей Табунщик | Уроки на барабанах.",
  },
  {
    id: 1,
    src: "eyZ_CqetVg0",
    title:
      "Развитие рук. Постановка. Полный удар | Сергей Табунщик | Уроки на барабанах",
  },
];

const Video = () => {
  const classes = useStyles();

  return (
    <Box>
      <main className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12} sm={11} md={11}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.title}>
                Видеоуроки
              </Typography>
              <Grid
                container
                spacing={2}
                justify="space-around"
                className={classes.videos}
              >
                {videos2.map((video, i) => (
                  <Grid item xs={12} sm={4} key={i}>
                    {/*<VideoPlayer video = {video}/>*/}
                    <YoutubeEmbed embedId={video.src} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </Box>
  );
};
export default Video;
