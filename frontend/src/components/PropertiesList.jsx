import React from 'react';
import { properties } from '../data';
import { Link } from 'react-router-dom';
import List from './List';

const PropertiesList = () => {
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
            <Link to={`/properties/${property.id}`} key={property.id}>
              <div>
                <List property={property} />
              </div>
            </Link>
          ))}
        </div>
        <Link to='/properties'>
          <div className='text-2xl font-bold mt-10 p-5 px-10 rounded-lg bg-slate-200 hover:bg-slate-600 hover:text-white cursor-pointer'>
            Explore More ...
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PropertiesList;
