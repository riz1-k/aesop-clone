import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoReorderTwoOutline } from 'react-icons/io5';
function Navbar() {
  return (
    <>
      <nav className=' hidden  h-20 bg-lightest text-dark font-medium lg:flex items-center '>
        <div className='w-[98%] mx-auto flex justify-between '>
          <ul className='flex justify-evenly w-5/12 '>
            <li>Skin Care</li>
            <li>Body & Hand</li>
            <li>Hair</li>
            <li>Fragrance</li>
            <li>Home</li>
            <li>Kits & Travel</li>
            <li>Gifts</li>
            <li>Read</li>
            <li>Stores</li>
            <BiSearch className='text-2xl cursor-pointer ' />
          </ul>
          <ul className='flex justify-evenly w-1/12  '>
            <li>Login</li>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
      <nav className=' hidden  h-20 bg-lightest text-dark font-medium md:flex lg:hidden items-center '>
        <div className='w-[98%] mx-auto flex justify-between '>
          <ul className='flex justify-evenly w-5/12 '>
            <li>Shop</li>
            <li>Read</li>
            <li>Stores</li>
            <BiSearch className='text-2xl cursor-pointer ' />
          </ul>
          <ul className='flex justify-evenly w-1/12 mr-4 '>
            <li>Login</li>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
