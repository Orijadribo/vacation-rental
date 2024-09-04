import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import { reviews } from '../data';

const Reviews = () => {
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
    <div className='bg-gray-100 py-16 mt-20'>
      <div className='container max-w-screen-xl mx-auto px-10'>
        <h1 className='text-6xl font-thin text-center mb-10'>
          What Our Clients Say
        </h1>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className='px-4'>
              <div className='bg-white rounded-lg shadow-lg p-8 mx-4'>
                <div className='flex items-center mb-4'>
                  <img
                    src={review.image}
                    alt={review.name}
                    className='w-16 h-16 rounded-full mr-4'
                    loading='lazy'
                  />
                  <div>
                    <h3 className='text-xl font-semibold'>{review.name}</h3>
                    <div className='flex text-yellow-400'>
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < review.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='text-gray-600 italic'>"{review.text}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
