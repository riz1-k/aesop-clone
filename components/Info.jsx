import React from 'react';
import { HiPlusSm } from 'react-icons/hi';

function Info() {
  return (
    <>
      <div className=' md:h-11 bg-dark text-lightest text-sm font-ubuntu flex justify-center items-center '>
        <p className='w-[90%] my-4 mx-auto md:flex md:justify-center'>
          Enjoy complimentary shipping on all Hong Kong and Macau orders. Due to
          a high volume of orders, deliveries may take longer than usual to
          arrive.
          <HiPlusSm className='text-xl hidden md:block' />
        </p>
      </div>
    </>
  );
}

export default Info;
