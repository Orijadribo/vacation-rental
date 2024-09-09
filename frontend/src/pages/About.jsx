import React from 'react';

const About = () => {
  return (
    <div className='bg-[#E8EEED]'>
      <div className='pt-20 pb-10 px-8'>
        <div className='flex flex-col justify-center container max-w-screen-xl mx-auto'>
          <div className='my-5'>
            <h1 className='text-5xl font-thin mb-4'>About Us</h1>
            <p className='mb-4'>
              Welcome to our company! We are dedicated to providing the best
              real estate services to help you find your dream home or
              investment property. Our team of experienced professionals is here
              to guide you through every step of the process.
            </p>
          </div>
          <div className='my-5'>
            <h2 className='text-5xl font-thin mb-2'>Our Mission</h2>
            <p className='mb-4'>
              Our mission is to empower our clients with the knowledge and
              resources they need to make informed decisions in the real estate
              market. We strive to provide exceptional service and build lasting
              relationships with our clients.
            </p>
          </div>{' '}
          <div className='my-5'>
            <h2 className='text-5xl font-thin mb-2'>Our Values</h2>
            <ul className='list-disc list-inside mb-4'>
              <li>
                <strong>Integrity:</strong> We uphold the highest standards of honesty and
                transparency.
              </li>
              <li>
                <strong>Customer Focus:</strong> Our clients are at the heart of everything we
                do.
              </li>
              <li>
                <strong>Excellence:</strong> We are committed to delivering the best results for
                our clients.
              </li>
              <li>
                <strong>Innovation:</strong> We embrace new ideas and technologies to improve our
                services.
              </li>
            </ul>
          </div>{' '}
          <div className='my-5'>
            <h2 className='text-5xl font-thin mb-2'>Meet Our Team</h2>
            <p className='mb-4'>
              Our team consists of dedicated professionals with diverse
              backgrounds and expertise in the real estate industry. We work
              collaboratively to ensure that our clients receive the best
              possible service.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-4 border rounded-lg shadow-lg bg-white'>
                <h3 className='text-xl font-bold'>John Doe</h3>
                <p className='text-gray-600'>CEO & Founder</p>
                <p>
                  John has over 15 years of experience in the real estate
                  industry and is passionate about helping clients achieve their
                  goals.
                </p>
              </div>
              <div className='p-4 border rounded-lg shadow-lg bg-white'>
                <h3 className='text-xl font-bold'>Jane Smith</h3>
                <p className='text-gray-600'>Lead Agent</p>
                <p>
                  Jane specializes in residential properties and is known for
                  her exceptional customer service and negotiation skills.
                </p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
