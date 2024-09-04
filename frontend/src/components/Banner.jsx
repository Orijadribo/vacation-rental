import React from 'react';
import { pic_3 } from '../assets';

const Banner = () => {
  return (
    <div className='flex justify-center items-center min-h-screen overflow-hidden bg-[#E8EEED] py-8 sm:py-12 md:py-16'>
      <div className='container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2 md:pr-8 mb-8 md:mb-0'>
            <h2 className='my-4 sm:my-5 text-4xl sm:text-5xl md:text-6xl font-thin'>Our Property</h2>
            <p className='mb-4 text-sm sm:text-base'>
              Discover our stunning selection of premium properties, offering
              comfort, style, and unparalleled locations.
            </p>
            <p className='mb-4 text-sm sm:text-base'>
              From luxurious urban apartments to serene countryside retreats,
              our diverse portfolio caters to every lifestyle. <span className='hidden md:inline'>Each property is
              meticulously curated to ensure the highest standards of quality
              and design.</span>
            </p>
            <p className='text-sm sm:text-base'>
              Experience the perfect blend of modern amenities and timeless
              elegance. <span className='hidden md:inline'>Whether you're seeking a cozy family home or a
              sophisticated investment opportunity, our expert team is dedicated
              to helping you find your ideal property.</span>
            </p>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0'>
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
