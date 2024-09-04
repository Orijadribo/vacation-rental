import React from 'react';
import {
  IoArrowForwardOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import { FiMinus, FiPlus } from 'react-icons/fi';

const Search = () => {
  return (
    <div className='absolute left-0 right-0 bottom-10 z-20'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <div className='bg-white rounded-full shadow-lg p-4 md:p-5'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6'>
            <div className='flex items-center justify-center gap-2'>
              <IoLocationOutline size={24} />
              <p className='text-sm md:text-base'>Select a location</p>
            </div>
            <div className='hidden md:block w-[2px] h-[30px] bg-gray-300'></div>
            <div className='flex items-center justify-center gap-2 md:gap-4'>
              <IoCalendarOutline size={24} />
              <h1 className='text-sm md:text-base'>Check-in</h1>
              <IoArrowForwardOutline size={24} />
              <h1 className='text-sm md:text-base'>Check-out</h1>
            </div>
            <div className='hidden md:block w-[2px] h-[30px] bg-gray-300'></div>
            <div className='flex items-center justify-center gap-2 md:gap-4'>
              <IoPeopleOutline size={24} />
              <p className='text-sm md:text-base'>Guests</p>
              <div className='flex items-center justify-center gap-5'>
                <FiMinus className='cursor-pointer' />
                <p>1</p>
                <FiPlus className='cursor-pointer' />
              </div>
            </div>
            <button className='bg-slate-500 text-white px-6 md:px-10 py-2 rounded-full hover:bg-slate-600 transition-colors'>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

