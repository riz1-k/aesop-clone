import { useState } from 'react';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Hero1 from '../components/Hero1.jsx';
import Hero2 from '../components/Hero2';
import Hero3 from '../components/Hero3';
import Hero4 from '../components/Hero4';
import Hero5 from '../components/Hero5';
import Hero6 from '../components/Hero6';
import Hero7 from '../components/Hero7';
import Hero8 from '../components/Hero8';
import Hero9 from '../components/Hero9';
import Footer from '../components/Footer';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai';

const HomePage = () => {
  const [ham, setham] = useState(false);
  return (
    <>
      <div className={`${ham ? 'hidden' : 'block'}`}>
        <Info />
        <Navbar />
        <Hero1 setham={setham} />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        <Hero7 />
        <Hero8 />
        <Hero9 />
        <Footer />
      </div>
      <div
        className={`${
          ham
            ? 'block h-screen animate__animated animate__fadeIn animate__faster '
            : 'hidden'
        }`}
      >
        <div
          className='
                 bg-light flex h-20 w-full text-dark font-medium  items-center '
        >
          <div className='w-[80%] mx-auto flex  items-center  '>
            <div className='flex w-full'>
              <h1 className='text-xl '>Aȇsop</h1>
              <div className='flex justify-around text-black items-center text-xl ml-auto  mr-4 '>
                <BiSearch className=' cursor-pointer text-2xl mx-2.5' />
                <a className='mx-2.5 text-sm  cursor-pointer'>Cart</a>
                <AiOutlineClose
                  onClick={() => setham(false)}
                  className='text-2xl mx-2.5 cursor-pointer'
                />
              </div>
            </div>
          </div>
        </div>
        <ul>
          <li className='h-12 border-y-[1px] border-t-[1px] flex flex-col items-center border-gray-300 '>
            <div className=' justify-between w-[90%] mx-auto flex items-center mt-2 '>
              <p className='text-lg font-medium'>Skin Care</p>
              <AiOutlineRight className='text-2xl' />
            </div>
          </li>
          <li className='h-12 border-y-[1px] flex flex-col items-center border-gray-300 '>
            <div className=' justify-between w-[90%] mx-auto flex items-center mt-2 '>
              <p className='text-lg font-medium'>Body & Hand</p>
              <AiOutlineRight className='text-2xl' />
            </div>
          </li>
          <li className='h-12 border-y-[1px] flex flex-col items-center border-gray-300 '>
            <div className=' justify-between w-[90%] mx-auto flex items-center mt-2 '>
              <p className='text-lg font-medium'>Hair</p>
              <AiOutlineRight className='text-2xl' />
            </div>
          </li>
          <li className='h-12 border-y-[1px] flex flex-col items-center border-gray-300 '>
            <div className=' justify-between w-[90%] mx-auto flex items-center mt-2 '>
              <p className='text-lg font-medium'>Fragrance</p>
              <AiOutlineRight className='text-2xl' />
            </div>
          </li>
          <li className='h-12 border-y-[1px] flex flex-col items-center border-gray-300 '>
            <div className=' justify-between w-[90%] mx-auto flex items-center mt-2 '>
              <p className='text-lg font-medium'>Home</p>
              <AiOutlineRight className='text-2xl' />
            </div>
          </li>
          <li className='h-12 border-y-[1px] flex flex-col items-center border-gray-300 '>
            <div className=' justify-between w-[90%] mx-auto flex items-center mt-2 '>
              <p className='text-lg font-medium'>Kits & Travel</p>
              <AiOutlineRight className='text-2xl' />
            </div>
          </li>
          <li className='h-12 border-y-[1px] flex flex-col items-center border-gray-300 '>
            <div className=' justify-between w-[90%] mx-auto flex items-center mt-2 '>
              <p className='text-lg font-medium'>Gifts</p>
              <AiOutlineRight className='text-2xl' />
            </div>
          </li>
        </ul>
        <div>
          <div className='grid grid-cols-2 h-16 items-center '>
            <p className='ml-8 text-medium cursor-pointer hover:underline transition-all '>
              {' '}
              Read
            </p>
            <p className='ml-8 text-medium cursor-pointer hover:underline transition-all '>
              {' '}
              Login
            </p>
          </div>
          <div className='grid grid-cols-2 h-14 items-center '>
            <p className='ml-8 text-medium cursor-pointer hover:underline transition-all '>
              {' '}
              Stories
            </p>
            <p className='ml-8 text-medium cursor-pointer hover:underline transition-all '>
              {' '}
              Live assistance{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
