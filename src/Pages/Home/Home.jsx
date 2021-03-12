import React                       from "react";
import TextTransition, { presets } from "react-text-transition";
import '../../index.scss'
import {Grid} from "@material-ui/core";
const TEXTS = [
    "SANGIT",
    "DRUMS",

];

const Home = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <Grid container xs={12}  className='hero' >
        <Grid item id='home-hero' xs={6} mt={6}>
            <h1  className='titleHero'>
                <TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.molasses }
                />
            </h1>
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