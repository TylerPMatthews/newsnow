import React from "react";
const Sarticles = (props) => {
  return (
    <div>
      <h2>{props.item.source.name}</h2>
      <span>{props.item.author}</span>
      <h3>{props.item.title}</h3>
      <p>{props.item.description}</p>
      <div>
        <img src={props.item.urlToImage} alt='news'/>
      </div>
      <p>{props.item.content}</p>
    </div>
  );
};
export default Sarticles;
