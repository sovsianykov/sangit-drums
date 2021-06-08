import React from "react";
import "../../index.scss";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { YogaRoute } from "../../Routing";

const Home = () => {
  return (
    <Grid container className="hero">
      <Grid item id="home-hero" xs={12} sm={6} mt={3}>
        <h4>DRUM SCHOOL</h4>
        <h1>SANGIT-DRUM</h1>
        <Link to={YogaRoute}>
          <h2>Барабанная йога</h2>
        </Link>
        <h3 id="anime">Oсознанная игра</h3>
      </Grid>
      <a href="https://ovsianykov-react-portfolio.vercel.app/" className="dev">
        developed by S Ovsianykov
      </a>
    </Grid>
  );
};

export default Home;
