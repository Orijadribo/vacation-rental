import React from 'react'
import { Link } from 'react-router-dom';
import { locations, properties } from '../data';

const Locations = () => {
  return (
    <div className='container mx-auto max-w-screen-xl px-10 py-8'>
      <h2 className='text-6xl font-thin mt-20 mb-10'>Available Locations</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {locations.map((location, index) => (
          <Link
            key={index}
            to={`/locations/${location.location.toLowerCase()}`}
            className='bg-white rounded-lg'
          >
            <div className='text-2xl font-thin text-gray-900'>
              {location.location}
            </div>
            <img
              src={location.image}
              alt={location.location}
              className='w-full h-40 object-cover rounded-lg mt-2'
            />
            <div className='text-gray-600 mt-2'>
              {(() => {
                const count = properties.filter(
                  (property) => property.location === location.location
                ).length;
                return `${count} ${count === 1 ? 'property' : 'properties'}`;
              })()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Locations