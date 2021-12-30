import Image from 'next/image';
import React from 'react';

import img1 from '../images/h5/Aesop_Gift_Kits_2021_Web_Homepage_Secondary_Product_Candles_Room_Sprays_Mid_Desktop_2560x1440px.jpg';
import img2 from '../images/h5/Aesop_Gift_Kits_2021_Web_Homepage_Secondary_Product_Lucent_Sublime_Mid_Desktop_2560x1440px.jpg';

function Hero6() {
  return (
    <>
      <div className=' md:hidden flex flex-col  w-[90%] mx-auto'>
        <div>
          <Image src={img1} height={586} width={962} />
          <div className='h-44 flex items-center'>
            <div>
              <h1 className='hover:underline font-medium  transition-all cursor-pointer delay-150 text-xl mb-4'>
                Gifts for home
              </h1>
              <p>
                Revitalise indoor spaces with gifts designed to illuminate space
                and instil atmosphere. Each is formulated to set the mood, calm
                the mind and refresh the mundane.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image src={img2} height={586} width={962} />
          <div className='h-44 flex items-center'>
            <div>
              <h1 className='hover:underline font-medium transition-all cursor-pointer delay-150 text-xl mb-4'>
                {' '}
                Gifts for self-care
              </h1>
              <p>
                Find special gifts to honour the most complex relationship of
                all—that which we have with ourselves. Give generously and
                without restraint.
              </p>
            </div>
          </div>
        </div>
        <section className='bg-lightest h-24 w-full' />
      </div>
      <div className='hidden md:block'>
        <div className='  grid grid-cols-2 gap-6 w-[90%] mx-auto'>
          <div>
            <Image src={img1} height={586} width={962} />
            <div className='h-44 flex items-center'>
              <div>
                <h1 className='hover:underline font-medium transition-all cursor-pointer delay-150 text-xl mb-8'>
                  Gifts for home
                </h1>
                <p>
                  Revitalise indoor spaces with gifts designed to illuminate
                  space and instil atmosphere. Each is formulated to set the
                  mood, calm the mind and refresh the mundane.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={img2} height={586} width={962} />
            <div className='h-44 flex items-center'>
              <div>
                <h1 className='hover:underline font-medium transition-all cursor-pointer delay-150 text-xl mb-8'>
                  {' '}
                  Gifts for self-care
                </h1>
                <p>
                  Find special gifts to honour the most complex relationship of
                  all—that which we have with ourselves. Give generously and
                  without restraint.
                </p>
              </div>
            </div>
          </div>
          <section className='bg-lightest h-32 w-full' />
        </div>
      </div>
    </>
  );
}

export default Hero6;
