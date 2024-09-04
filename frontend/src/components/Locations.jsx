import React from 'react';
import { categories } from '../data';

const Locations = () => {
  return (
    <div className='mt-10 max-w-screen-xl mx-auto px-10'>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-5 my-20 w-[500px]'>
            <h1 className='text-4xl font-bold'>Explore Destinations</h1>
            <p className='text-gray-500'>
              Discover a variety of unique locations tailored to your ideal
              getaway. Each destination offers distinct experiences for every
              traveler
            </p>
          </div>
          <div className='w-80'>
            <img
              src={categories[0].image}
              alt={categories[0].location}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
          {categories.slice(0, 4).map((category) => (
            <div
              key={category.id}
              className='relative rounded-lg hover:opacity-80 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
            >
              <h2 className='flex items-center justify-center hover:bg-black/20 rounded-lg absolute w-full h-full text-white text-5xl font-thin'>
                {category.location}
              </h2>
              <img
                src={category.image}
                alt={category.location}
                className='w-80 h-80 object-cover rounded-lg hover:opacity-50'
              />
            </div>
          ))}
        </div>
        <div className='text-2xl font-bold mt-10 p-5 px-10 border-2 rounded-lg bg-slate-200 hover:bg-slate-600 hover:text-white cursor-pointer'>
          Explore More ...
        </div>
      </div>
    </div>
  );
};

export default Locations;
