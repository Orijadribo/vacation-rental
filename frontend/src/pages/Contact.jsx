import React, { useState } from 'react';
import InputField from '../components/InputField';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='bg-[#E8EEED]'>
      <div className='pt-20 md:p-20'>
        <div className='flex flex-col justify-center container mx-auto max-w-2xl px-4 md:px-8 py-8 bg-white rounded-lg shadow-lg'>
          <h1 className='text-5xl font-thin mb-4'>Contact Us</h1>
          <p className='mb-4'>
            We would love to hear from you! Please fill out the form below:
          </p>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='w-full'>
              <InputField
                label={'Name'}
                type={'text'}
                name={'name'}
                value={formData.name}
                setValue={handleChange}
              />
            </div>
            <InputField
              label={'Email'}
              type={'email'}
              name={'email'}
              value={formData.email}
              setValue={handleChange}
            />
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'
              >
                Message
              </label>
              <textarea
                name='message'
                id='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='4'
                className='mt-1 block w-full border border-gray-300 rounded-md p-2'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-slate-500 border border-slate-500 hover:bg-slate-600 text-white py-2 rounded-md transition'
            >
              Send Message
            </button>
          </form>
          <div className='mt-8'>
            <h2 className='text-lg font-bold'>Contact Information</h2>
            <p className='mt-2'>Email: info@realestate.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Real Estate St, City, State 12345</p>
          </div>
          <div className='mt-3'>
            <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <Link
                to='/'
                className='flex items-center justify-center  gap-3 text-gray-400'
              >
                <FaFacebook size={24} /> <p className=''>Real Estate</p>
              </Link>
              <Link
                to='/'
                className='flex items-center justify-center  gap-3 text-gray-400'
              >
                <FaXTwitter size={24} />
                <p className=''>@Real Estate</p>
              </Link>
              <Link
                to='/'
                className='flex items-center justify-center  gap-3 text-gray-400'
              >
                <FaInstagram size={24} /> <p className=''>@Real Estate</p>
              </Link>
              <Link
                to='/'
                className='flex items-center justify-center  gap-3 text-gray-400'
              >
                <FaLinkedin size={24} /> <p className=''>Real Estate</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
