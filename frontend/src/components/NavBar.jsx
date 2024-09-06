import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ setIsLogin }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`fixed w-full transition-colors duration-300 z-50 ${
        scrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'
      }`}
    >
      <div className='flex justify-between items-center max-w-screen-xl mx-auto h-16 px-10'>
        <div className='text-2xl font-bold text-black'>Logo</div>
        <div className='flex justify-between items-center gap-10'>
          <div className='flex items-center justify-center space-x-4'>
            <Link to='/'>
              <div className='hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md'>
                Home
              </div>
            </Link>
            <Link to='/about'>
              <div className='hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md'>
                About Us
              </div>
            </Link>
            <Link to='/properties'>
              <div className='hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md'>
                Properties
              </div>
            </Link>
            <Link to='/contact'>
              <div className='hover:bg-slate-500 hover:text-white px-4 py-2 rounded-md'>
                Contact Us
              </div>
            </Link>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <Link to='/login'>
              <div
                className={`border-2 ${
                  !scrolled
                    ? 'border-white hover:border-2 hover:border-slate-500'
                    : 'border-slate-500 hover:border-2 hover:border-white'
                } px-4 py-2 rounded-md`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </div>
            </Link>
            <Link to='/signup'>
              <div
                className='bg-slate-500 text-white px-4 py-2 rounded-md'
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
