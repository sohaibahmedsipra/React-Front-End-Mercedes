// Home.js

import React from 'react';
import Hero from '../home-page-components/hero';
import Calculate from '../home-page-components/calculate';

function Home() {
  return (
    <div className="home-page">
    
    <Hero />
      <Calculate />
    </div>
  );
}

export default Home;
