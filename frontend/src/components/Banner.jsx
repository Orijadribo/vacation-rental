import React from 'react';
import { pic_3 } from '../assets';

const Banner = () => {
  return (
    <div className='flex justify-center items-center h-screen overflow-hidden bg-[#E8EEED]'>
      <div className='container mx-auto max-w-screen-xl px-10 py-12'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2 md:pr-8 mb-8 md:mb-0'>
            <h2 className='my-5 text-6xl font-thin'>Our Property</h2>
            <p className='mb-4'>
              Discover our stunning selection of premium properties, offering
              comfort, style, and unparalleled locations.
            </p>
            <p className='mb-4'>
              From luxurious urban apartments to serene countryside retreats,
              our diverse portfolio caters to every lifestyle. Each property is
              meticulously curated to ensure the highest standards of quality
              and design.
            </p>
            <p>
              Experience the perfect blend of modern amenities and timeless
              elegance. Whether you're seeking a cozy family home or a
              sophisticated investment opportunity, our expert team is dedicated
              to helping you find your ideal property.
            </p>
          </div>
          <div className='md:w-1/2'>
            <img
              src={pic_3}
              alt='Featured Property'
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
