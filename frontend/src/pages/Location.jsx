import React from 'react';
import { properties } from '../data';
import { Link, useParams } from 'react-router-dom';
import List from '../components/List';

const Location = () => {
  const { locationId } = useParams();
  const locationProperties = locationId
    ? properties.filter(
        (p) => p.location.toLowerCase() === locationId.toLowerCase()
      )
    : [];

  if (locationProperties.length === 0) {
    return <div>No properties found for this location.</div>;
  }

  return (
    <div className='container mx-auto max-w-screen-xl px-10 py-8 bg-gray-100'>
      <h2 className='text-6xl font-thin mt-20 mb-10 capitalize'>
        Our Properties In {locationId}
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {locationProperties.map((property, index) => (
          <Link
            key={property.id}
            to={`/properties/${property.id}`}
          >
            <div>
              <List property={property} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Location;
