import React from 'react';
import { locations } from '../data';
import { Link } from 'react-router-dom';

const PropertyLocations = () => {
  return (
    <div className='mt-10 max-w-screen-xl mx-auto px-10'>
      <div className='flex flex-col items-center justify-between'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col gap-5 my-20 w-[500px]'>
            <h1 className='text-6xl font-thin'>Explore Destinations</h1>
            <p className='text-gray-500'>
              Discover a variety of unique locations tailored to your ideal
              getaway. Each destination offers distinct experiences for every
              traveler
            </p>
          </div>
          <div className='w-80'>
            <img
              src={locations[0].image}
              alt={locations[0].location}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
          {locations.slice(0, 4).map((location) => (
            <Link to={`/locations/${location.location.toLowerCase()}`} key={location.id}>
              <div className='relative rounded-lg hover:opacity-80 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
                <h2 className='flex items-center justify-center hover:bg-black/20 rounded-lg absolute w-full h-full text-white text-5xl font-thin'>
                  {location.location}
                </h2>
                <img
                  src={location.image}
                  alt={location.location}
                  className='w-80 h-80 object-cover rounded-lg hover:opacity-50'
                  loading='lazy'
                />
              </div>
            </Link>
          ))}
        </div>
        <Link to='/locations'>
          <div className='text-2xl font-bold mt-10 p-5 px-10 rounded-lg bg-slate-200 hover:bg-slate-600 hover:text-white cursor-pointer'>
            Explore More ...
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PropertyLocations;
