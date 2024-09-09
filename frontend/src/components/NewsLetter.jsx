import React, { useState } from 'react';
import InputField from './InputField';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here (e.g., send email to an API)
    console.log('Subscribed with email:', email);
    setIsSubscribed(true);
    setEmail(''); // Clear the input field after submission
  };

  return (
    <div className='px-10 my-10 max-w-screen-sm mx-auto'>
      <div className='flex flex-col justify-between '>
        <h2 className='text-4xl font-thin mb-4'>Subscribe to Our Newsletter</h2>
        <p className='mb-4'>
          Stay updated with the latest news and offers. Enter your email below
          to subscribe!
        </p>
        {isSubscribed ? (
          <p className='text-green-600'>Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className='flex items-center h-14 relative'>
            <InputField
              label={'Email'}
              type={'email'}
              name={'email'}
              value={email}
              setValue={setEmail}
            />
            <button
              type='submit'
              className='absolute right-1 bg-slate-500 text-white rounded-md hover:bg-slate-600 transition h-12 px-2 md:px-10'
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
