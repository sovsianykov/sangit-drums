
import * as React from 'react';
import PageCard from '../../componens/PpageCard'
import {Box,Grid} from "@material-ui/core";
import song from '../../assets/audio/song.mp3'
import { Link } from "react-router-dom";

import {useEffect} from "react";

export const audio1 = new Audio(song)
export default function Projects() {
    useEffect(() =>{
        audio1.play()
        audio1.volume = 0.1;
    },[])
    const pages  = [
        {title : "О проекте" , src : '/whois/' , back : '#006262' },
        {title : "Фото" , src : '/photo/'  , back : '#006262' },
        {title : "Барабанная Йога" , src : '/yoga/'  , back : '#006262' },
        {title : "Музыка" , src : '/music/'  , back : '#006262'  },
        {title : "Видео" , src : '/video/'  , back : '#006262' },
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
