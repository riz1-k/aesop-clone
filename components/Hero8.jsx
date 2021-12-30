import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import SwiperCore, { Scrollbar, Autoplay, Navigation } from 'swiper';
import Image from 'next/image';

import img1 from '../images/h8/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg';
import img2 from '../images/h8/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg';
import img3 from '../images/h8/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg';

SwiperCore.use([Scrollbar, Autoplay, Navigation]);

function Hero8() {
  return (
    <>
      <div className=' md:hidden flex flex-col bg-lightest'>
        <div>
          <div className='w-[90%] mx-auto'>
            <h1 className='font-playfair text-3xl '>Store Location</h1>
            <p className='mt-8 text-base '>
              Our consultants are available to host you in-store and provide
              tailored guidance on gift purchases.
            </p>
            <button className='border-[1px] mt-8 border-gray-300 font-semibold  w-[100%] py-4  items-center text-dark hover:bg-dark hover:text-light transition-all cursor-pointer '>
              <div className='w-[90%] mx-auto flex justify-between  '>
                <h3 className='font-sans'>Find a nearby store</h3>
                <AiOutlineArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div className=' '>
          <Swiper
            scrollbar={{
              hide: false,
            }}
            navigation={true}
            className='mySwiper'
            slidesPerView={1}
            autoplay
            spaceBetween={30}
          >
            <SwiperSlide>
              <Image src={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={img3} />
            </SwiperSlide>
          </Swiper>
          <section className='bg-lightest h-32 w-full'></section>
        </div>
      </div>
      <div className='hidden md:block'>
        <div className=' h-[650px] grid grid-cols-hero3 bg-lightest'>
          <div>
            <div className='w-[80%] mx-auto'>
              <h1 className='font-playfair text-3xl '>Store Location</h1>
              <p className='mt-8'>
                Our consultants are available to host you in-store and provide
                tailored guidance on gift purchases.
              </p>
              <button className='border-[1px] mt-8 border-gray-300 font-semibold w-80 py-4  items-center text-dark hover:bg-dark hover:text-light transition-all cursor-pointer '>
                <div className='w-[90%] mx-auto flex justify-between  '>
                  <h3 className='font-sans'>Find a nearby store</h3>
                  <AiOutlineArrowRight />
                </div>
              </button>
            </div>
          </div>
          <div className=' h-[650px] '>
            <Swiper
              scrollbar={{ hide: false, dragSize: 'auto' }}
              navigation
              className='mySwiper '
              autoplay
              slidesPerView={1}
            >
              <SwiperSlide>
                <Image src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img3} />
              </SwiperSlide>
            </Swiper>
            <section className='bg-lightest h-32 w-full'></section>
          </div>
        </div>
        <section className='bg-lightest h-64 w-full'></section>
      </div>
    </>
  );
}

export default Hero8;
