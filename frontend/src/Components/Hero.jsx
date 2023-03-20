import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          TAKE CONTROL OF YOUR LIFE
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
            Fast, flexible webapp to
          </p>
          <Typed
          className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
            strings={['track expenses', 'view analytics']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <br />
        <div className='flex  justify-center space-x-16'>
          <button className='-m-2 bg-[#00df9a] w-[200px] rounded-md font-medium my-6  py-3 text-black '>Sign Up</button>

        <button className='-m-2 bg-black w-[200px] border border-[#00df9a]-800 rounded-md font-medium my-6  py-3 text-[#00df9a] '>Sign In</button>
        </div>
        {/* <div class="flex justify-center">
        <button className='-m-2 bg-[#00df9a] w-[200px] rounded-md font-medium my-6  py-3 text-black '>Sign In</button>
  <button class="px-4 py-2 bg-green-500 text-white">Button 2</button>
</div> */}
      </div>
    </div>
  );
};

export default Hero;
