import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white pt-10 mt-20'>
      <div className='container max-w-screen-xl mx-auto px-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 pb-4'>
          <div className='mb-8 md:mb-0'>
            <h3 className='text-xl font-bold mb-4'>About Us</h3>
            <p className='text-gray-400'>
              We are dedicated to providing the best real estate services,
              helping you find your dream home or investment property.
            </p>
          </div>
          <div className='mb-8 md:mb-0'>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-white transition duration-300'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-400 hover:text-white transition duration-300'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/properties'
                  className='text-gray-400 hover:text-white transition duration-300'
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-400 hover:text-white transition duration-300'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='mb-8 md:mb-0'>
            <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
            <p className='text-gray-400 mb-2'>
              123 Real Estate St, City, State 12345
            </p>
            <p className='text-gray-400 mb-2'>Phone: (123) 456-7890</p>
            <p className='text-gray-400'>Email: info@realestate.com</p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <Link
                to='/'
                className='text-gray-400 hover:text-white transition duration-300'
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to='/'
                className='text-gray-400 hover:text-white transition duration-300'
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                to='/'
                className='text-gray-400 hover:text-white transition duration-300'
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                to='/'
                className='text-gray-400 hover:text-white transition duration-300'
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-800 py-4 text-center'>
          <p className='text-gray-400'>
            &copy; 2023 Real Estate Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
