import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  IoArrowForwardOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoPricetagOutline,
} from 'react-icons/io5';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { properties } from '../data';
import { FiMinus, FiPlus } from 'react-icons/fi';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  const [guests, setGuests] = useState(1);
  const [days, setDays] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  //Function to get the number of days
  useEffect(() => {
    if (startDate && endDate) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
      setDays(dayDiff);
    }
  }, [startDate, endDate]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  if (!property) {
    return <div className='text-center mt-10'>Property not found</div>;
  }

  const totalPrice = property.price * days;

  const subtractGuest = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const addGuest = () => {
    setGuests(guests + 1);
  };

  const subtractDays = () => {
    if (days > 1) {
      setDays(days - 1);
    }
  };

  const addDays = () => {
    setDays(days + 1);
  };

  return (
    <div className='container mx-auto max-w-screen-xl px-10 py-8 pt-24 bg-gray-200'>
      <div className='mb-6 w-fit'>
        <h1 className='text-3xl font-thin'>{property.location}</h1>
        <div className='w-full h-1 bg-gray-800 rounded-full mt-2'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='property-images'>
          <Slider {...settings} className='property-slider'>
            {property.image.map((img, index) => (
              <div key={index} className='h-[400px]'>
                <img
                  src={img}
                  alt={`${property.location} - ${index + 1}`}
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className='bg-white px-8 py-10 rounded-lg shadow-lg'>
          <div className='mb-4'>
            <h2 className='text-4xl font-thin mb-5 '>
              About this property
            </h2>
            <p className='text-gray-500'>
              Welcome to this charming {property.categories[0].toLowerCase()}{' '}
              retreat in the heart of {property.location}. Our property offers a
              perfect blend of comfort and style, ideal for both leisure and
              business travelers. With its prime location and modern amenities,
              you'll have everything you need for a memorable stay. Enjoy the
              local attractions, relax in our well-appointed rooms, and
              experience the best of {property.location} hospitality.
            </p>
          </div>
          <div className='mb-4'>
            <h3 className='text-lg font-semibold mb-2'>Amenities</h3>
            <ul className='list-disc list-inside'>
              {property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
          <div className='flex items-center mb-4'>
            <IoLocationOutline className='text-gray-500 mr-2' />
            <span>{property.location}</span>
          </div>
          <div className='flex items-center mb-4'>
            <IoPricetagOutline className='text-gray-500 mr-2' />
            <span>
              Shs {new Intl.NumberFormat('en-US').format(property.price)} per
              night
            </span>
          </div>
          <div className='booking-form bg-gray-100 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold mb-4'>Book this property</h3>
            <div className='flex items-center gap-5 mb-4 border-b pb-4'>
              <div className=''>
                <div className='hidden md:flex items-center justify-center gap-2 md:gap-4'>
                  <IoCalendarOutline size={24} />
                  <div className='w-[120px]'>
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
              </div>
            </div>
            <div className='flex items-center gap-5 mb-4 border-b pb-4'>
              <div className='flex items-center justify-between w-1/2'>
                <p className='text-gray-800'>Days</p>
                <div className='flex items-center justify-center gap-5'>
                  <p className='text-gray-800 pr-3'>{days}</p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-5 mb-4 border-b pb-4'>
              <div className='flex items-center justify-between w-1/2'>
                <p className='text-gray-800'>Guests</p>
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
            </div>

            <div className='mb-4'>
              <strong>
                Total Price: Shs{' '}
                {new Intl.NumberFormat('en-US').format(totalPrice)}
              </strong>
            </div>
            <button className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors'>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
