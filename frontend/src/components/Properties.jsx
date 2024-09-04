import React from 'react';
import { properties } from '../data';

const Properties = () => {
  return (
    <div className='mt-20 max-w-screen-xl mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-5 my-10 w-[500px]'>
          <h1 className='text-4xl font-bold'>A World of Possibilities</h1>
          <p className='text-gray-500 text-center'>
            Flexible options for various types of stays. Whether you're planning
            a weekend getaway or an extended stay.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {properties.slice(0, 3).map((property) => (
            <div key={property.id}>
              <h2>{property.location}</h2>
              <p>{property.categories.join(', ')}</p>
              <p>{property.amenities.join(', ')}</p>
              <p>{property.price}</p>
              <img src={property.image[0]} alt={property.location} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
