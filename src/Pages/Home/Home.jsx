import React                       from "react";
import '../../index.scss'
import {Grid} from "@material-ui/core";

const Home = () => {

    return (
        <Grid container   className='hero' >
        <Grid item id='home-hero' xs={12}  sm={6}   mt={3} >
             <h4>DRUM SCHOOL</h4>
            <h1 >
              SANGIT-DRUM
            </h1>
            <h2>
                Барабанная йога
            </h2>
            <h3 id='anime'>
                Oсознанная игра
            </h3>
        </Grid>
        </Grid>
    );
};

export default Home

