import React from 'react'
import { Header, Hero, Features, Articles } from '../../containers';

import features from '../../data/features';
import articles from '../../data/articles';

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Features features={features} />
        <Articles articles={articles}/>
    </div>
  )
}

export default Home