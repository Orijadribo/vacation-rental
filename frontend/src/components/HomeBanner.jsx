import React from 'react';
import { pic_1 } from '../assets';
import { IoLocationOutline } from 'react-icons/io5';
import { banner } from '../data';
import Slider from 'react-slick';

const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <Slider {...settings} className='h-full'>
        {banner.map((item) => (
          <div key={item.id} className='relative h-screen w-full'>
            <img src={item.img} alt='banner' className='absolute inset-0 w-full h-full object-cover' />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
              <div className='flex flex-col max-w-screen-xl mx-auto px-4 text-center'>
                <h3 className='text-3xl md:text-[50px] font-thin text-white leading-tight md:leading-[60px] tracking-wide'>
                  Escape the Ordinary
                </h3>
                <h1 className='text-4xl md:text-[60px] font-bold text-white leading-tight md:leading-[80px] tracking-normal mt-2'>
                  Welcome to Your Private Retreat!
                </h1>
                <p className='text-lg md:text-[20px] text-white leading-normal md:leading-[60px] tracking-wider mt-4'>
                  Find the perfect getaway in beautiful locations.
                </p>
                <div className='flex items-center justify-center gap-2 text-white text-sm mt-8 md:mt-20'>
                  <IoLocationOutline />
                  <p>{item.location}</p>
                  <div className='hidden md:flex items-center justify-center w-[2px] h-[20px] bg-white rounded-full'></div>
                  <div>{item.city}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;
