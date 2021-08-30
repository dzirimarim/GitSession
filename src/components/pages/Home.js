import React from 'react';
import '../../App.css';
import Card from '../Card';
import HeroSection from '../HeroSection';
import SearchBar from '../SearchBar';

function Home() {
  return (
    <>

      <HeroSection />
      <SearchBar/>
      <Card />
    </>
  );
}

export default Home;