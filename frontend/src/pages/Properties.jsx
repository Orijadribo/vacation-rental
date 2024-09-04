import React from 'react';
import { properties } from '../data';
import { pic_1, pic_2, pic_3 } from '../assets';

const Properties = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className=''>
        <img src={pic_3} alt='pic_1' />
      </div>
      <div className='flex justify-center items-center'>
        <h1>Properties</h1>
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        {properties.map((property) => (
          <div key={property.id}>
            <h2>{property.location}</h2>
            <div className='flex justify-center items-center'>
              <img src={property.image[1]} alt={property.location} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
