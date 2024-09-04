import React from 'react';
import {
  IoLocationOutline,
  IoWifiOutline,
  IoPricetagOutline,
} from 'react-icons/io5';
import { CiViewList } from 'react-icons/ci';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const List = ({ property }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    
  return (
    <div className="property-card">
      <div className="slider-container">
        <Slider {...settings}>
          {property.image.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`${property.location} - Image ${index + 1}`}
                className='w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg'
                loading='lazy'
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className='mt-5'>
        <div className='flex items-center gap-2 text-lg font-bold'>
          <IoLocationOutline />
          <h2>{property.location}</h2>
        </div>
        <div className='flex items-center gap-2'>
          <CiViewList />
          <p>{property.categories.join(', ')}</p>
        </div>
        <div className='flex items-center gap-2'>
          <IoWifiOutline />
          <p>{property.amenities.join(', ')}</p>
        </div>
        <div className='flex items-center gap-2 font-bold'>
          <IoPricetagOutline />
          <p>Shs {property.price} night</p>
        </div>
      </div>
    </div>
  );
};

export default List;
