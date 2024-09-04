import React from 'react';
import Banner from '../components/Banner';
import List from '../components/List';
import { properties } from '../data';

const Properties = () => {
  return (
    <div className=''>
      <Banner />
      <div className='mx-auto max-w-screen-xl px-10'>
        <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-[14px]'>
          {properties.map((property) => (
            <div key={property.id}>
              <List property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
