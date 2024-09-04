import React from 'react';
import Banner from '../components/Banner';
import Search from '../components/Search';
import Properties from '../components/Properties';
import Locations from '../components/Locations';

const Home = () => {
  return (
    <div>
      <Banner />
      <Search />
      <Properties />
      <Locations />
    </div>
  );
};

export default Home;
