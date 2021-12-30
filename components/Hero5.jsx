import React from 'react';

import img1 from '../images/slider1/Aesop_Kits_Gift_Kits_2021-22_The_Advocate_Web_Large_1584x962px.png';
import img2 from '../images/slider1/Aesop_Kits_Gift_Kits_2021-22_The_Forager_Web_Large_1584x962px.png';
import img3 from '../images/slider1/Aesop_Kits_Gift_Kits_2021-22_The_Listener_Web_Large_1584x962px.png';
import img4 from '../images/slider1/Aesop_Kits_Gift_Kits_2021-22_The_Mentor_Web_Large_1584x962px.png';
import img5 from '../images/slider1/Aesop_Kits_Gift_Kits_2021-22_The_Protector_Web_Large_1584x962px.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import SwiperCore, { Scrollbar, Navigation } from 'swiper';
import Image from 'next/image';

SwiperCore.use([Scrollbar, Navigation]);

function Hero5() {
  return (
    <>
      <div className='hidden md:block'>
        <div className='grid grid-cols-2 font-sans h-36 items-center bg-[#FFFEF2]'>
          <h1 className='text-2xl  ml-24'>Seasonal Gift Kits</h1>
          <p className='w-[75%] text-base '>
            Comprising formulations for the skin, body and home, our Gift Kit
            collection is designed to recognise everyday acts of kindness, and
            reverberate beyond the first exchange.{' '}
          </p>
        </div>
        <section className='bg-lightest h-28 w-full' />
        <Swiper
          scrollbar={{
            hide: false,
          }}
          navigation={true}
          className='mySwiper'
          slidesPerView={4}
        >
          <SwiperSlide>
            <div>
              <Image src={img3} />
              <h1 className=' text-base font-medium flex justify-center'>
                The Listener
              </h1>
              <h1 className=' text-sm flex justify-center '>
                Cleanser, balm, scrub
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img2} />
              <h1 className=' text-base font-medium flex justify-center'>
                The Forager
              </h1>
              <h1 className=' text-sm flex justify-center '>
                Two invigorating body care staples
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img1} />
              <h1 className=' text-base font-medium flex justify-center'>
                The Advocate
              </h1>
              <h1 className=' text-sm flex justify-center '>
                Four hand and body care staples
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img4} />
              <h1 className=' text-base font-medium flex justify-center'>
                The Protector
              </h1>
              <h1 className=' text-sm flex justify-center '>
                For maintaing aromatic balance at home
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img5} />
              <h1 className=' text-base font-medium flex justify-center'>
                The Mentor
              </h1>
              <h1 className=' text-sm flex justify-center '>
                Cleanser,toner,hydrating serum
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
        <section className='bg-lightest h-32 w-full'></section>
      </div>

      <div className=' md:hidden  flex flex-col font-sans   bg-[#FFFEF2]'>
        <div className='w-[90%] mx-auto mt-8'>
          <h1 className='text-2xl '>Seasonal Gift Kits</h1>
          <p className='mt-8 text-base'>
            Comprising formulations for the skin, body and home, our Gift Kit
            collection is designed to recognise everyday acts of kindness, and
            reverberate beyond the first exchange.{' '}
          </p>
        </div>
      </div>
      <section className='bg-lightest h-28 w-full' />
      <div className='md:hidden'>
        <Swiper
          scrollbar={{
            hide: false,
          }}
          navigation={true}
          className='mySwiper'
          slidesPerView={1}
        >
          <SwiperSlide>
            <div>
              <Image src={img3} />
              <h1 className=' text-base font-medium flex justify-center'>
                The Listener
              </h1>
              <h1 className=' text-sm flex justify-center '>
                Cleanser, balm, scrub
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img2} />
              <h1 className=' text-base font-medium flex justify-center'>
                The Forager
              </h1>
              <h1 className=' text-sm flex justify-center '>
                Two invigorating body care staples
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img1} />
              <h1 className=' text-base font-medium flex justify-center'>
                The Advocate
              </h1>
              <h1 className=' text-sm flex justify-center '>
                Four hand and body care staples
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img4} />
              <h1 className=' text-base font-medium flex justify-center'>
                The Protector
              </h1>
              <h1 className=' text-sm flex justify-center '>
                For maintaing aromatic balance at home
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img5} />
              <h1 className=' text-base font-medium flex justify-center'>
                The Mentor
              </h1>
              <h1 className=' text-sm flex justify-center '>
                Cleanser,toner,hydrating serum
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className='bg-lightest h-32 w-full'></section>
    </>
  );
}

export default Hero5;
