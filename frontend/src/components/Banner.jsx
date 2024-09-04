import React from 'react';
import { pic_1 } from '../assets';

const Banner = () => {
  return (
    <div className='relative h-screen w-full'>
      <img src={pic_1} alt='banner' className='w-full h-full object-cover' />
      <div className='absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30'>
        <div className='flex flex-col max-w-screen-xl mx-auto'>
          <h3 className='text-[50px] font-bold text-white leading-[60px] tracking-wide'>
            Escape the Ordinary
          </h3>
          <h1 className='text-[60px] font-bold text-white leading-[80px] tracking-normal'>
            Welcome to Your Private Retreat!
          </h1>
          <p className='text-[20px] text-white leading-[60px] tracking-wider'>
            Find the perfect getaway in beautiful locations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
