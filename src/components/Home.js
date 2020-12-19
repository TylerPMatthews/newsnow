import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeArticles from "./HomeArticles";
const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=us&apikey=0c8f353266ce4a9498aa188a95bf06e5"
      )
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log("Home Articles error", err.message);
      });
  }, []);
  return (
    <div>
      {articles.map((item, idx) => {
        return <HomeArticles key={idx} item={item} />;
      })}
    </div>
  );
};
export default Home;
