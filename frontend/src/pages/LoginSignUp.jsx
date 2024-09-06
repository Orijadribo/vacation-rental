import React, { useState } from 'react';
import InputField from '../components/InputField';
import { pic_1 } from '../assets';

const LoginSignUp = ({ isLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Reset fields after submission
    setEmail('');
    setPassword('');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Reset fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div
      className=''
      style={{
        backgroundImage: `url(${pic_1})`,
        backgroundSize: 'cover', // Change to 'cover' to cover the entire div
        backgroundPosition: 'center', // Center the background image
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
      }}
    >
      <div className='flex items-center justify-center container mx-auto max-w-2xl px-4 py-8 h-screen'>
        <form
          className='grid grid-cols-1 md:grid-cols-2 justify-center bg-white shadow-md rounded-lg'
          onSubmit={isLogin ? handleLogIn : handleSignUp} 
        >
          <div className='flex-1 px-8 py-6 bg-black/20 rounded-lg shadow-lg'>
            {isLogin ? (
              <div className='flex flex-col gap-5 mb-5 h-full'>
                <h1 className='font-thin text-3xl'>Welcome Back!</h1>
                <p className='text-sm'>
                  Log in to manage your bookings, explore new destinations, and
                  access personalized offers.
                </p>
              </div>
            ) : (
              <div className='flex flex-col gap-5 mb-5'>
                <h1 className='font-thin text-3xl'>Join Our Community!</h1>
                <div className='text-sm'>
                  <p className='hidden md:inline'>
                    Create an account to access exclusive vacation rental deals,
                    manage your bookings, and enjoy a seamless travel
                    experience. It’s quick and easy!
                  </p>
                  <p>
                    Sign up today and unlock a world of possibilities for your
                    next getaway!
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className='flex-1 px-8 py-6'>
            <p className='font-thin'>{isLogin ? 'Log In' : 'Create Account'}</p>
            {!isLogin && (
              <div>
                <InputField
                  label={'First Name'}
                  type={'text'}
                  name={'firstName'}
                  value={firstName}
                  setValue={setFirstName}
                />
                <InputField
                  label={'Last Name'}
                  type={'text'}
                  name={'lastName'}
                  value={lastName}
                  setValue={setLastName}
                />
              </div>
            )}
            <InputField
              label={'Email'}
              type={'email'}
              name={'email'}
              value={email}
              setValue={setEmail}
            />
            <InputField
              label={'Password'}
              type={'password'}
              name={'password'}
              value={password}
              setValue={setPassword}
            />
            {!isLogin && (
              <InputField
                label={'Confirm Password'}
                type={'password'}
                name={'confirmPassword'}
                value={confirmPassword}
                setValue={setConfirmPassword}
              />
            )}
            {error && <div className='text-red-500 mb-4'>{error}</div>}
            <div className='flex items-center justify-between'>
              <button
                type='submit'
                className='bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full'
              >
                {isLogin ? 'Log In' : 'Sign Up'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignUp;
