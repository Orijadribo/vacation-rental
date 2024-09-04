import React from 'react'
import { categories } from '../data'

const Locations = () => {
    return (
      <div className='mt-20 max-w-screen-xl mx-auto'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-5 my-10 w-[500px]'>
              <h1 className='text-4xl font-bold'>Explore Destinations</h1>
              <p className='text-gray-500'>
                Flexible options for various types of stays. Whether you're
                planning a weekend getaway or an extended stay.
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
              <div key={category.id}>
                <h2>{category.location}</h2>
                <img src={category.image} alt={category.location} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Locations