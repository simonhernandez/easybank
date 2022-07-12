import React from "react";

import "./styles.scss";

const Article = ({ article }) => {
  return (
    <article className="article">
      <a href="#">
        <div className="article__img-container">
          <img src={article.image} alt={article.title} />
        </div>
        <div className="article__text-container">
          <small>By {article.author}</small>
          <h4 className="heading heading--4">{article.title}</h4>
          <p>{article.excerpt}</p>
        </div>
      </a>
    </article>
  );
};

export default Article;
