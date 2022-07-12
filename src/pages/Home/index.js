import React from 'react'
import { Header, Hero, Features, Articles, Footer } from '../../containers';

import features from '../../data/features';
import articles from '../../data/articles';

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Features features={features} />
        <Articles articles={articles}/>
        <Footer />
    </div>
  )
}

export default Home