import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeArticles from "./HomeArticles";
import { API_KEY } from "../key/index";
import Header from "./Header/Header";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apikey=${API_KEY}`)
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log("Home Articles error", err.message);
      });
  }, []);
  return (
    <>
      <Header />
      <div>
        {articles.map((item, idx) => {
          return <HomeArticles key={idx} item={item} />;
        })}
      </div>
    </>
  );
};
export default Home;
