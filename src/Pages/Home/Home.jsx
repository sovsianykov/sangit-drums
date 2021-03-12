import React                       from "react";
import TextTransition, { presets } from "react-text-transition";
import '../../index.scss'
import {Grid} from "@material-ui/core";
const TEXTS = [
    "               ",
    "Oсознанная игра "




];

const Home = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            7000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <Grid container   className='hero' >
        <Grid item id='home-hero' xs={12}  sm={6}   mt={3} >
            <h1 >
              SANGIT DRUM
            </h1>
            <h2>
                Барабаны для всех!
            </h2>
            <h2>
            <TextTransition
                text={ TEXTS[index % TEXTS.length] }
                springConfig={ presets.molasses }
            />
            </h2>
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
