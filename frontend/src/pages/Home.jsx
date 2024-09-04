import React from 'react';
import Search from '../components/Search';
import Properties from '../components/Properties';
import Locations from '../components/Locations';
import Reviews from '../components/Reviews';
import HomeBanner from '../components/HomeBanner';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <HomeBanner />
      <Search />
      <Properties />
      <Locations />
      <Reviews />
    </div>
  );
};

export default Home;
