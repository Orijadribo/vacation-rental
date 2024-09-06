import React, { useState } from 'react';
import {
  IoArrowForwardOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import { FiMinus, FiPlus } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import { locations } from '../data';

const Search = () => {
  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');

  const subtractGuest = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const addGuest = () => {
    setGuests(guests + 1);
  };

  return (
    <div className='absolute left-0 right-0 bottom-24 md:bottom-40 lg:bottom-14 z-20'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <div className='bg-white rounded-full shadow-lg p-1 md:p-2 w-fit mx-auto'>
          <div className='flex flex-row items-center justify-between gap-2'>
            <div className='px-4 py-2 flex items-center justify-center gap-2 hover:bg-slate-200 rounded-full'>
              <IoLocationOutline size={24} />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className='text-sm md:text-base px-2 py-1 focus:border-none outline-none bg-transparent rounded-full'
              >
                <option value='' disabled>
                  Select A Location
                </option>
                {locations.map((location, index) => (
                  <option key={index} value={location.location}>
                    {location.location}
                  </option>
                ))}
              </select>
            </div>
            <div className='hidden lg:block w-[2px] h-[30px] bg-gray-300'></div>
            <div className='px-4 py-2 hidden lg:flex items-center justify-center md:gap-1 hover:bg-slate-200 rounded-full'>
              <div className='font-thin'>
                <IoCalendarOutline size={24} />
              </div>
              <div className='w-[120px]'>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className='px-2 rounded-lg bg-transparent w-full outline-none border-none'
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
                  className='ml-5 px-2 rounded-lg bg-transparent w-full outline-none border-none'
                  placeholderText='Check-out'
                />
              </div>
            </div>
            <div className='hidden lg:block w-[2px] h-[30px] bg-gray-300'></div>
            <div className='pl-4 pr-1 py-1 hidden lg:flex items-center justify-center gap-2 md:gap-4 hover:bg-slate-200 rounded-full'>
              <IoPeopleOutline size={24} />
              <p className='text-sm md:text-base'>Guests</p>
              <div className='flex items-center justify-center gap-3'>
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
