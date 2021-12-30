import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';
import img3 from '../images/Aesop_Gift_Kits_2021_Web_Homepage_Secondary_Product_Arrival_Kit_Mid_Desktop_2560x1440px.jpg';

function Hero2() {
  return (
    <>
      <div className='hidden md:block'>
        <div className=' h-[650px] grid grid-cols-hero2 bg-lightest'>
          <div className=' h-[650px]'>
            <Image src={img3} />
          </div>
          <div>
            <div className='w-[60%] mx-auto'>
              <h1 className='font-playfair text-3xl '>
                Portable indispensables
              </h1>
              <p className='mt-8'>
                These skin, hair and body care formulations are suitably sized
                to refresh frequent travellers en route and at destination.
              </p>
              <button className='border-[1px] mt-8 border-gray-300 font-semibold w-80 py-4  items-center text-dark hover:bg-dark hover:text-light transition-all cursor-pointer '>
                <div className='w-[90%] mx-auto flex justify-between  '>
                  <h3 className='font-sans'>Browse gifts for travel</h3>
                  <AiOutlineArrowRight />
                </div>
              </button>
            </div>
          </div>
        </div>
        <section className='bg-lightest h-32 w-full'></section>
      </div>

      <div className=' md:hidden  flex flex-col bg-lightest'>
        <div className=' w-[90%] mx-auto '>
          <Image src={img3} />
        </div>
        <div>
          <div className='w-[90%] mx-auto mt-8'>
            <h1 className='font-playfair text-2xl '>Portable indispensables</h1>
            <p className='mt-8 text-base '>
              These skin, hair and body care formulations are suitably sized to
              refresh frequent travellers en route and at destination.
            </p>
            <button className='border-[1px] mt-8 border-gray-300 font-semibold  w-[100%] py-4  items-center text-dark hover:bg-dark hover:text-light transition-all cursor-pointer '>
              <div className='w-[90%] mx-auto flex justify-between  '>
                <h3 className='font-sans'>Browse gifts for travel</h3>
                <AiOutlineArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
