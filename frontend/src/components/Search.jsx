import React from 'react';
import {
  IoArrowForward,
  IoCalendarOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import { FiMinus, FiPlus } from 'react-icons/fi';

const Search = () => {
  return (
    <div className='-mt-40 z-20'>
      <div className='flex flex-col items-center justify-center  '>
        <div className='flex flex-col items-center justify-center bg-white w-fit rounded-full shadow-lg p-5'>
          <div className='flex items-center justify-center gap-10 border-2 border-gray-300 rounded-full p-2'>
            <div className='flex items-center justify-center gap-2'>
              <IoLocationOutline size={24} />
              <p>Select a location</p>
            </div>
            <div className='flex items-center justify-center w-[2px] h-[30px] rounded-full bg-gray-300'></div>
            <div className='flex items-center justify-center gap-5'>
              <IoCalendarOutline size={24} />
              <h1>Check-in</h1>
              <IoArrowForward size={24} />
              <h1>Check-out</h1>
            </div>
            <div className='flex items-center justify-center w-[2px] h-[30px] rounded-full bg-gray-300'></div>
            <div className='flex items-center justify-center gap-5'>
              <IoPeopleOutline size={24} />
              <p>Guests</p>
              <div className='flex items-center justify-center gap-3'>
                <FiMinus />
                <p>1</p>
                <FiPlus />
              </div>
            </div>
            <div className='flex items-center justify-center w-[2px] h-[30px] rounded-full bg-gray-300'></div>
            <div className='flex items-center justify-center gap-2'>
              <button className='bg-slate-500 text-white px-10 py-2 rounded-full'>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
