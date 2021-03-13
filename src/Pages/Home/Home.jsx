import React from "react";
import '../../index.scss'
import {Grid} from "@material-ui/core";



const Home = () => {




    return (
        <Grid container   className='hero' >
        <Grid item id='home-hero' xs={12}  sm={6}   mt={3} >
            <h1 >
              SANGIT DRUM
            </h1>
            <h2>
                Барабаны для всех!
            </h2>
            {/*<h2 id='anime' className='pseudo'>*/}
            {/*    /!*Oсознанная игра*!/*/}
            {/*</h2>*/}
        </Grid>
        </Grid>
    );
};

export default Home

// default The default.
// gentle
// wobbly
// stiff
// slow
// molasses
