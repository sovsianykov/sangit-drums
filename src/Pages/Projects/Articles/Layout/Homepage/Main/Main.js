import React, { useEffect, useState } from "react";
// import ArticleCard from "./../../../../../../componens/ArticeCard/ArticleCard";
import ArticleCard2 from "./../../../../../../componens/ArticeCard/ArticleCard2";
import firebase from "../../../Config/firebase";
import "./style.scss";
import { Grid } from "@material-ui/core";

const db = firebase.firestore();

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);
    const getMyArticles = () => {
        db.collection("Article")
            .limit(8)
            .get()
            .then((docs) => {
                if (!docs.empty) {
                    let allArticles = [];
                    docs.forEach((doc) => {
                        if (doc.data().isPublish) {
                        const article = {
                            id: doc.id,
                            ...doc.data(),
                        };
                        allArticles.push(article);}
                    });
                    setArticles(allArticles);
                    setIsLoaded(true);
                }
            });
    }
  useEffect(() => {
    getMyArticles();
  }, [ isLoaded  ]);


  return (
    <div>
      <div className="toolbar">toolbar</div>
      <Grid container justify="center" spacing={3}>
        {isLoaded
          ? articles.map((article, i) => (
              <Grid item xs={12} sm={12} md={12} key={i}>
                {/*<ArticleCard data={article} />*/}
                  <ArticleCard2 article ={article}/>
              </Grid>
            ))
          : ""}
      </Grid>
    </div>
  );
};
export default Main;
