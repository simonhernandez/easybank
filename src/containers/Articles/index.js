import React from 'react'
import { Article } from '../../components'

const Articles = ({ articles }) => {
  return (
    <section>
        <div className="articles__header">
            <h2 className="heading heading--2">Articles</h2>
        </div>

        {articles.map((article, index) => {
            return (
                <Article article={article} key={index}/>
            )
        })}
    </section>
  )
}

export default Articles