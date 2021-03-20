
import * as React from 'react';
import PageCard from '../../componens/PpageCard'
import {Box,Grid} from "@material-ui/core";
import song from '../../assets/audio/song.mp3'
import { Link } from "react-router-dom";

import {useEffect} from "react";

const audio = new Audio(song)
export default function Projects() {
    useEffect(() =>{
        audio.play()
        audio.volume = 0.1;
    },[])
    const pages  = [
        {title : "О проекте" , src : '/whois/' , back : '#eaba7f' },
        {title : "Фото" , src : '/photo/'  , back : 'green' },
        {title : "Барабанная Йога" , src : '/yoga/'  , back : 'red' },
        {title : "Музыка" , src : '/music/'  , back : 'blue'  },
        {title : "Видео" , src : '/video/'  , back : '#F07427' },
        {title : "Контакты" , src : '/contacts/'  , back : '#006262'  }
    ,]
    return (
        <Box  >
            <Grid id='list'  container style={{ marginTop : '3em'}} >
                {pages.map((card,i) => {
                    return (
                        <Grid  component={Link} item to={card.src} xs={12} sm = {4} key={i} className='cardGridItem'  >
                            <PageCard  pages={card}  />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
};
