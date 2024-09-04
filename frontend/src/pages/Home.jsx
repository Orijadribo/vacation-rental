import React from 'react';
import Search from '../components/Search';
import PropertiesList from '../components/PropertiesList';
import Locations from '../components/Locations';
import Reviews from '../components/Reviews';
import HomeBanner from '../components/HomeBanner';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <HomeBanner />
      <Search />
      <PropertiesList />
      <Locations />
      <Reviews />
    </div>
  );
};

export default Home;
