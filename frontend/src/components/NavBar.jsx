import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close

const NavBar = ({ setIsLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [pages, setPages] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`fixed w-full transition-colors duration-300 z-50 ${
        scrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'
      }`}
    >
      <div className='flex justify-between items-center max-w-screen-xl mx-auto h-16 px-10'>
        <div className='text-2xl font-bold text-black'>Logo</div>
        <div className='hidden md:flex justify-between items-center gap-10'>
          <div className='flex items-center justify-center space-x-4'>
            {/* Navigation Links */}
            {['home', 'about us', 'properties', 'contact us'].map((page) => (
              <Link
                key={page}
                to={`/${page === 'home' ? '' : page}`}
                className='group hover:bg-slate-600 hover:text-white px-4 py-2 rounded-md'
              >
                <div className='capitalize' onClick={() => setPages(page)}>
                  {page}
                </div>
                <div
                  className={`m-auto w-[80%] h-[2px] rounded-full group-hover:bg-white ${
                    scrolled ? 'bg-black' : 'bg-white'
                  } ${pages === page ? 'block' : 'hidden'}`}
                ></div>
              </Link>
            ))}
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
        {/* Hamburger Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMobileMenu}>
            {!isMobileMenuOpen && <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 z-40 flex flex-col items-center justify-center py-5'>
          <div className='flex flex-[10] flex-col items-center justify-center w-[40%]'>
            <div className='flex flex-col items-center text-white text-2xl mb-4'>
              <h3>Menu</h3>
              <div
                className={`m-auto w-full h-[2px] rounded-full bg-white`}
              ></div>
            </div>
            <div className='flex flex-col items-center w-full'>
              {['home', 'about us', 'properties', 'contact us'].map((page) => (
                <Link
                  key={page}
                  to={`/${page === 'home' ? '' : page}`}
                  className='flex items-center justify-center text-white text-lg py-2 capitalize rounded-lg hover:bg-white hover:text-black w-full'
                  onClick={() => {
                    setPages(page);
                    setIsMobileMenuOpen(false); // Close menu on link click
                  }}
                >
                  {page}
                </Link>
              ))}
              <div className='flex flex-col gap-2 items-center justify-center mt-10 w-full'>
                <Link
                  to='/login'
                  className='flex items-center justify-center text-white text-lg py-2 capitalize rounded-lg border-2 border-white hover:bg-white/50 hover:text-black w-full'
                  onClick={() => {
                    setIsLogin(true);
                    setIsMobileMenuOpen(false); // Close menu on link click
                  }}
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='flex items-center justify-center text-lg py-2 capitalize rounded-lg bg-white/80 hover:bg-white  text-black w-full'
                  onClick={() => {
                    setIsLogin(false);
                    setIsMobileMenuOpen(false); // Close menu on link click
                  }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div
            className='flex items-center justify-center flex-1 md:hidden '
            onClick={toggleMobileMenu}
          >
            <button className='border border-white p-4 rounded-full hover:bg-white hover:text-black'>
              {isMobileMenuOpen && <FaTimes size={24} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
