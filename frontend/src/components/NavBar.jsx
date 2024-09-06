import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ setIsLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [pages, setPages] = useState('home');

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
            <Link
              to='/'
              className='group hover:bg-slate-600 hover:text-white px-4 py-2 rounded-md'
            >
              <div onClick={() => setPages('home')}>Home</div>
              <div
                className={`m-auto w-[80%] h-[2px] rounded-full group-hover:bg-white ${
                  scrolled ? 'bg-black' : 'bg-white'
                } ${pages === 'home' ? 'block' : 'hidden'}`}
              ></div>
            </Link>
            <Link
              to='/about'
              className='group hover:bg-slate-600 hover:text-white px-4 py-2 rounded-md'
            >
              <div onClick={() => setPages('aboutus')}>About Us</div>
              <div
                className={`m-auto w-[80%] h-[2px] rounded-full group-hover:bg-white ${
                  scrolled ? 'bg-black shadow-md' : 'bg-white'
                } ${pages === 'aboutus' ? 'block' : 'hidden'}`}
              ></div>
            </Link>
            <Link
              to='/properties'
              className='group hover:bg-slate-600 hover:text-white px-4 py-2 rounded-md'
            >
              <div onClick={() => setPages('properties')}>Properties</div>
              <div
                className={`m-auto w-[80%] h-[2px] rounded-full group-hover:bg-white ${
                  scrolled ? 'bg-black shadow-md' : 'bg-white'
                } ${pages === 'properties' ? 'block' : 'hidden'}`}
              ></div>
            </Link>
            <Link
              to='/contact'
              className='group hover:bg-slate-600 hover:text-white px-4 py-2 rounded-md'
            >
              <div onClick={() => setPages('contactus')}>Contact Us</div>
              <div
                className={`m-auto w-[80%] h-[2px] rounded-full group-hover:bg-white ${
                  scrolled ? 'bg-black shadow-md' : 'bg-white'
                } ${pages === 'contactus' ? 'block' : 'hidden'}`}
              ></div>
            </Link>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <Link to='/login'>
              <div
                className={`border-2 ${
                  !scrolled
                    ? 'border-white hover:border-2 hover:bg-white/50 hover:text-black'
                    : 'border-slate-500 hover:border-2 hover:bg-slate-500'
                } px-4 py-2 rounded-md`}
                onClick={() => {
                  setIsLogin(true);
                  setPages('login');
                }}
              >
                Login
              </div>
            </Link>
            <Link to='/signup'>
              <div
                className='bg-slate-500 border border-slate-500 hover:bg-slate-600 hover:border-slate-600 text-white px-4 py-2 rounded-md'
                onClick={() => {
                  setIsLogin(false);
                  setPages('signup');
                }}
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
