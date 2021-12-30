import Image from 'next/image';
import React from 'react';

import img1 from '../images/h7/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Large-835x962px.png';
import img2 from '../images/h7/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png';
import img3 from '../images/h7/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png';
import img4 from '../images/h7/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import SwiperCore, { Scrollbar, Navigation } from 'swiper';

SwiperCore.use([Scrollbar, Navigation]);

function Hero7() {
  return (
    <>
      <div className=' md:hidden flex flex-col w-90% pb-32 '>
        <header className='text-2xl w-[85%] ml-10   '>
          Thoughtful offerings
        </header>
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
              <Image src={img3} className='scale-90' />
              <h1 className=' text-base font-medium flex justify-center'>
                Fabulous Face cleanser
              </h1>
              <h1 className=' text-sm flex justify-center '>
                For skin requiring gentle cleansing
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img4} className='scale-90' />
              <h1 className=' text-base font-medium flex justify-center'>
                Parsley Seed Facial Cleanser
              </h1>
              <h1 className=' text-sm flex justify-center '>
                Ideal for city dwellers
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img1} className='scale-90' />
              <h1 className=' text-base font-medium flex justify-center'>
                Geranium Leaf Body Cleanser
              </h1>
              <h1 className=' text-sm flex justify-center '>
                A gentle, invigorating gel cleanser
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img2} className='scale-90' />
              <h1 className=' text-base font-medium flex justify-center'>
                Resurrection Aromatique Hand Wish
              </h1>
              <h1 className=' text-sm flex justify-center '>
                Gentle cleansing for hard-working hands
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='hidden md:block'>
        <div className='w-90% mx-auto'>
          <header className='text-3xl w-[85%] ml-16'>
            Thoughtful offerings
          </header>
          <div className='grid grid-cols-4 gap-12 h-[710px] items-center w-[90%] mx-auto '>
            <div>
              <Image src={img3} height={400} width={390} />
              <h1 className='font-semibold flex justify-center'>
                Fabulous Face cleanser
              </h1>
              <p className='flex justify-center'>
                For skin requiring gentle cleansing
              </p>
            </div>
            <div>
              <Image src={img4} height={400} width={390} />
              <h1 className='font-semibold flex justify-center'>
                Parsley Seed Facial Cleanser
              </h1>
              <p className='flex justify-center'>Ideal for city dwellers</p>
            </div>
            <div>
              <Image src={img1} height={400} width={390} />
              <h1 className='font-semibold flex justify-center'>
                Geranium Leaf Body Cleanser
              </h1>
              <p className='flex justify-center'>
                A gentle, invigorating gel cleanser
              </p>
            </div>
            <div>
              <Image src={img2} height={400} width={390} />
              <h1 className='font-semibold flex justify-center'>
                Resurrection Aromatique Hand Wish
              </h1>
              <p className='flex justify-center'>
                Gentle cleansing for hard-working hands
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero7;
