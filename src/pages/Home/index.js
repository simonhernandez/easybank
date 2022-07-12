import React from 'react'
import { Header, Hero, Features } from '../../containers';

import features from '../../data/features';

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Features features={features} />
    </div>
  )
}

export default Home