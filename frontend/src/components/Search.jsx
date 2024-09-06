import React, { useState } from 'react';
import {
  IoArrowForwardOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import { FiMinus, FiPlus } from 'react-icons/fi';
import DatePicker from 'react-datepicker';

const Search = () => {
  const [guests, setGuests] = useState(1);
  const [days, setDays] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const subtractGuest = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const addGuest = () => {
    setGuests(guests + 1);
  };

  return (
    <div className='absolute left-0 right-0 bottom-14 z-20'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <div className='bg-white rounded-full shadow-lg p-4 md:p-3 w-fit mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6'>
            <div className='hidden md:flex items-center justify-center gap-2'>
              <IoLocationOutline size={24} />
              <p className='text-sm md:text-base'>Select a location</p>
            </div>
            <div className='hidden md:block w-[2px] h-[30px] bg-gray-300'></div>
            <div className='hidden md:flex items-center justify-center md:gap-4'>
              <IoCalendarOutline size={24} />
              <div className='w-[100px]'>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className='p-2 rounded-lg bg-transparent w-full'
                  placeholderText='Check-in'
                />
              </div>
              <IoArrowForwardOutline size={24} />
              <div className='w-[120px]'>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className='p-2 rounded-lg bg-transparent w-full'
                  placeholderText='Check-out'
                />
              </div>
            </div>
            <div className='hidden md:block w-[2px] h-[30px] bg-gray-300'></div>
            <div className='hidden md:flex items-center justify-center gap-2 md:gap-4'>
              <IoPeopleOutline size={24} />
              <p className='text-sm md:text-base'>Guests</p>
              <div className='flex items-center justify-center gap-5'>
                <div
                  className='cursor-pointer hover:bg-gray-800/50 rounded-full p-2'
                  onClick={subtractGuest}
                >
                  <FiMinus />
                </div>
                <p className='text-gray-800'>{guests}</p>
                <div
                  className='cursor-pointer hover:bg-gray-800/50 rounded-full p-2'
                  onClick={addGuest}
                >
                  <FiPlus />
                </div>
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
