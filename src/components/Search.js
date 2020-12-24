import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../key/index";
import Sarticles from '../components/Sarticles';
const Search = () => {
  const [query, setQuery] = useState("");
  const [searchedArticles, setSearchedArticles] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const searchArticle = () => {
    axios.get(`http://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
    .then(res=>{
        setSearchedArticles(res.data.articles)
    })
    .catch(err=>{
        console.log('axios search error', err.message)
    })
  };
  const onSubmit = (e) => {
    e.preventDefault();
    searchArticle()
    setQuery('')
  };
  const homeNews = () => {
      setSearchedArticles([])
  }
  return (
    <div>
      <h2>Search News</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="search_bar"
          placeholder="Search News"
          onChange={handleChange}
          value={query}
        ></input>
        <button>Search</button>
  {searchedArticles.length === 0 ? (<div></div>): (<div><button onClick={homeNews}>Home News</button></div>)}
      </form>
      <div>
          {searchedArticles.map((item,idx)=>{
              return <Sarticles key={idx} item={item}/>
          })}
      </div>
    </div>
  );
};
export default Search;
