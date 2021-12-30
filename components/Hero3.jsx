import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Hero3() {
  return (
    <>
      <div className='hidden md:block'>
        <div className=' h-[650px] grid grid-cols-hero3 bg-lightest'>
          <div>
            <div className='w-[60%] mx-auto'>
              <h1 className='font-playfair text-3xl '>Treasured tokens</h1>
              <p className='mt-8'>
                A considered assortment of our most sought-after
                formulations—from signature hand washes to potent facial
                hydrators, to transportive aromas for the home.
              </p>
              <button className='border-[1px] mt-8 border-gray-300 font-semibold w-80 py-4  items-center text-dark hover:bg-dark hover:text-light transition-all cursor-pointer '>
                <div className='w-[90%] mx-auto flex justify-between  '>
                  <h3 className='font-sans'>Browse favourite formulations</h3>
                  <AiOutlineArrowRight />
                </div>
              </button>
            </div>
          </div>
          <div className='h-[650px] '>
            <video
              autoPlay
              loop
              src='/videos/video2.mp4'
              muted
              type='video/mp4'
            />
          </div>
        </div>
        <section className='bg-lightest h-32 w-full'></section>
      </div>

      <div className=' md:hidden flex flex-col bg-lightest'>
        <div>
          <div className='w-[90%] mx-auto'>
            <h1 className='font-playfair text-2xl '>Treasured tokens</h1>
            <p className='mt-8 text-base '>
              A considered assortment of our most sought-after formulations—from
              signature hand washes to potent facial hydrators, to transportive
              aromas for the home.
            </p>
            <div className='pb-16 '>
              <button className='border-[1px] mt-8 border-gray-300 font-semibold  w-[100%] py-4  items-center text-dark hover:bg-dark hover:text-light transition-all cursor-pointer '>
                <div className='w-[90%] mx-auto flex justify-between  '>
                  <h3 className='font-sans'>Browse favourite formulations</h3>
                  <AiOutlineArrowRight />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className='w-[95%] mx-auto '>
          <video
            autoPlay
            loop
            src='/videos/video2.mp4'
            muted
            type='video/mp4'
          />
        </div>
      </div>
      <section className='bg-lightest h-32 w-full'></section>
    </>
  );
}

export default Hero3;
