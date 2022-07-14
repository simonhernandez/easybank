import React from "react";
import { Article } from "../../components";

import "./styles.scss";

const Articles = ({ articles }) => {
  return (
    <section className="articles">
      <div className="wrapper">
        <div
          className="articles__header"
          data-aos="fade"
          data-aos-duration="1200"
        >
          <h2 className="heading heading--2">Lastest Articles</h2>
        </div>

        <ul className="articles__list" role="list">
          {articles.map((article, index) => {
            return (
              <li
                className="articles__item"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={`${index * 200}`}
              >
                <Article article={article} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Articles;
