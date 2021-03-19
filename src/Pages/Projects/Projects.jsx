
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
    },[])
    const pages  = [
        {title : "Кто такой Сергей Табунщик" , src : ""  },
        {title : "О проекте" , src : ""  },
        {title : "Барабанная Йога" , src : ""  },
        {title : "Музыка" , src : ""  },
        {title : "Видео" , src : ""  },
        {title : "Контакты" , src : ""  }
    ,]
    return (
        <Box  >
            <Grid id='list'  container  >
                {pages.map((card,i) => {
                    return (
                        <Grid  component={Link} item to='/whois/' xs={12} sm = {4} key={i} className='cardGridItem'  >
                            <PageCard  pages={card}  />
                        </Grid>
                    )
                })}
            </Grid>


        </Box>
    );
};
