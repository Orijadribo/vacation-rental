import React from 'react';
import Banner from '../components/Banner';
import Search from '../components/Search';
import Properties from '../components/Properties';
import Locations from '../components/Locations';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <div>
      <Banner />
      <Search />
      <Properties />
      <Locations />
      <Reviews/>
    </div>
  );
};

export default Home;
