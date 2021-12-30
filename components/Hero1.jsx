import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoReorderTwoOutline } from 'react-icons/io5';

import img1 from '../images/Aesop_Gift_Kits_2021_Web_Homepage_2_Primary_50-50_Desktop_XL_2880x1200px.jpg';

function Hero1({ setham }) {
  return (
    <>
      <div className='hidden md:block'>
        <div className='  h-[510px] grid grid-cols-2 bg-light'>
          <div className='grid grid-cols-hero1'>
            <a
              href='#'
              className='text-4xl font-serif mx-auto mt-28 w-[40%] hidden md:block '
            >
              Aȇsop
            </a>
            <div className='  mx-auto mt-28 '>
              <div className='w-[75%]'>
                <h1 className='text-3xl font-normal  '>
                  Gift selection, simplified
                </h1>
                <p className='mt-8'>
                  Bring joy to deserving recipients of all stripes with a
                  carefully curated selection of formulations for the skin, body
                  and home.
                </p>
                <button className='border-[1px] mt-8 border-gray-300 font-semibold w-80 py-4  items-center text-dark hover:bg-dark hover:text-light transition-all cursor-pointer '>
                  <div className='w-[90%] mx-auto flex justify-between  '>
                    <h3 className='font-sans'>Browse all gifts</h3>
                    <AiOutlineArrowRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='w-full  relative'>
            <div className='h-[100vmin] md:h-[510px]'>
              <Image
                src={img1}
                layout='fill'
                className='object-cover object-center'
              />
            </div>
            <img
              src='/images/bottles.png'
              className='!absolute !bottom-[-35px] !right-0 w-1/2 '
            />
          </div>
        </div>
        <section className='bg-lightest h-32 w-full'></section>
      </div>

      <div className='  md:hidden flex flex-col bg-light '>
        <div className='w-full  relative'>
          <div className='h-[350px] md:h-[510px]'>
            <Image
              src={img1}
              layout='fill'
              className='object-cover object-center'
            />
            <div className=' md:hidden w-full absolute flex h-20  text-dark font-medium  items-center '>
              <div className='w-[80%] mx-auto flex  items-center  '>
                <div className='flex w-full  '>
                  <h1 className='text-xl '>Aȇsop</h1>
                  <div className='flex justify-around text-black items-center text-xl   ml-auto '>
                    <BiSearch className=' cursor-pointer text-2xl mx-2.5' />
                    <a className='mx-2.5 text-sm cursor-pointer '>Cart</a>
                    <IoReorderTwoOutline
                      onClick={() => setham(true)}
                      className='text-3xl mx-2.5 cursor-pointer'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src='/images/bottles.png'
            className='!absolute !bottom-[-35px] !right-0 w-1/2 '
          />
        </div>

        <div className=' md:hidden flex flex-col'>
          <div className='  mx-auto mt-12 '>
            <div className='w-[85%] mx-auto flex flex-col justify-center '>
              <h1 className='text-3xl font-normal  '>
                Gift selection, simplified
              </h1>
              <p className='mt-8 text-base '>
                Bring joy to deserving recipients of all stripes with a
                carefully curated selection of formulations for the skin, body
                and home.
              </p>
              <div className='flex justify-center pb-12 '>
                <button className='border-[1px] mt-8 border-gray-300 font-semibold w-[90%] py-4  items-center text-dark hover:bg-dark hover:text-light transition-all cursor-pointer '>
                  <div className='w-[90%] mx-auto flex justify-between  '>
                    <h3 className='font-sans'>Browse all gifts</h3>
                    <AiOutlineArrowRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero1;
