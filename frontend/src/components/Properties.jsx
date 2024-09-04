import React from 'react';
import { properties } from '../data';
import {
  IoLocationOutline,
  IoWifiOutline,
  IoPricetagOutline,
} from 'react-icons/io5';
import { CiViewList } from 'react-icons/ci';

const Properties = () => {
  return (
    <div className='mt-5 max-w-screen-xl mx-auto px-10'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-5 my-20 w-full'>
          <h1 className='text-6xl font-thin text-center'>
            A World of Possibilities
          </h1>
          <p className='text-gray-500 text-center'>
            Flexible options for various types of stays. Whether you're planning
            a weekend getaway or an extended stay.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-[14px]'>
          {properties.slice(0, 3).map((property) => (
            <div key={property.id}>
              <img
                src={property.image[0]}
                alt={property.location}
                className='rounded-lg'
              />
              <div className=' mt-5'>
                <div className='flex items-center gap-2 text-lg font-bold'>
                  <IoLocationOutline />
                  <h2>{property.location}</h2>
                </div>
                <div className='flex items-center gap-2'>
                  <CiViewList />
                  <p>{property.categories.join(', ')}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <IoWifiOutline />
                  <p>{property.amenities.join(', ')}</p>
                </div>
                <div className='flex items-center gap-2 font-bold'>
                  <IoPricetagOutline />
                  <p>Shs {property.price} night</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-2xl font-bold mt-10 p-5 px-10 rounded-lg bg-slate-200 hover:bg-slate-600 hover:text-white cursor-pointer'>
          Explore More ...
        </div>
      </div>
    </div>
  );
};

export default Properties;
