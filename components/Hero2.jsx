import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Hero2() {
  return (
    <>
      <div className='hidden md:block'>
        <div className='  h-[650px] grid  grid-cols-hero2 bg-lightest'>
          <div className=' h-[650px]'>
            <video
              autoPlay
              loop
              src='/videos/video1.mp4'
              muted
              type='video/mp4'
            />
          </div>
          <div>
            <div className='w-[60%] mx-auto'>
              <h1 className='font-playfair text-3xl '>For friendly faces</h1>
              <p className='mt-8'>
                Selections of cherished skin care—some for the novice with empty
                bathroom cabinets, others for the well-stocked expert.
              </p>
              <button className='border-[1px] mt-8 border-gray-300 font-semibold w-80 py-4  items-center text-dark hover:bg-dark hover:text-light transition-all cursor-pointer '>
                <div className='w-[90%] mx-auto flex justify-between  '>
                  <h3 className='font-sans'>Browse Skin Care Gifts</h3>
                  <AiOutlineArrowRight />
                </div>
              </button>
            </div>
          </div>
        </div>
        <section className='bg-lightest h-32 w-full'></section>
      </div>

      <div className=' md:hidden flex flex-col bg-lightest'>
        <div className=' w-[95%] mx-auto'>
          <video
            autoPlay
            loop
            src='/videos/video1.mp4'
            muted
            type='video/mp4'
          />
        </div>
        <div>
          <div className='w-[90%] mx-auto mt-8'>
            <h1 className='font-playfair text-2xl  '>For friendly faces</h1>
            <p className='mt-8 text-base '>
              Selections of cherished skin care—some for the novice with empty
              bathroom cabinets, others for the well-stocked expert.
            </p>
            <div className='pb-16'>
              <button className='border-[1px] mt-8  border-gray-300 font-semibold w-[100%] py-4  items-center text-dark hover:bg-dark hover:text-light transition-all cursor-pointer '>
                <div className='w-[90%] mx-auto flex justify-between  '>
                  <h3 className='font-sans'>Browse Skin Care Gifts</h3>
                  <AiOutlineArrowRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
