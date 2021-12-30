import React from 'react';
import {
  BsArrowUpRight,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';

function Footer() {
  return (
    <>
      <div className=' md:hidden flex flex-col bg-dark   text-white '>
        <div className=' flex-col gap-14 '>
          <div className='  flex-row mt-4  '>
            <div className='flex flex-col mb-4   justify-center  m-8   '>
              <input
                className='border-2  w-[100%] border-light rounded-sm py-2 px-0 placeholder-white mt-4 bg-dark placeholder-shown:place-content-center  '
                type='email'
                placeholder='Email address'
              />
              <div className=' flex mt-4 '>
                <input
                  type='checkbox'
                  className='mr-2 bg-dark text-white text-justify '
                />
                <p>
                  Subscribe to receive communications from Aesop about our
                  products and services. By subscribing, you confirm you have
                  read and accept our{' '}
                  <span className='underline'>privacy policy↗</span>
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row w-[95%] mx-auto'>
            <div className=' w-[45%] flex-row mt-4 '>
              <div className='h-12 flex  items-center  border-b-2 border-light  '>
                Orders and Support
              </div>
              <ul className='cursor pointer  '>
                <li className='my-3'>Contact us</li>
                <li className='my-3 flex '>
                  FAQs <BsArrowUpRight className='ml-2' />
                </li>
                <li className='my-3 flex'>
                  Shipping <BsArrowUpRight className='ml-2' />
                </li>
                <li className='my-3 flex'>
                  Returns <BsArrowUpRight className='ml-2' />
                </li>
                <li className='my-3'>Order History</li>
                <li className='my-3'>Terms and Conditions</li>
              </ul>
            </div>
            <div className='w-[45%] flex-row mt-4 ml-8  '>
              <div className='h-12 flex  items-center  border-b-2 border-light  '>
                Services
              </div>
              <ul className='cursor pointer  '>
                <li className='my-3'>Live assistance</li>
                <li className='my-3'>Corporate gifts</li>
                <li className='my-3'>Facial Appointments</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-row w-[95%] mx-auto'>
            <div className='w-[45%]  flex-row mt-4 '>
              <div className='h-12 flex  items-center  border-b-2 border-light  '>
                Location Preferences
              </div>
              <ul className='cursor pointer  '>
                <li className='my-3'>
                  Shipping :{' '}
                  <span className='underline'>Hong Kong (S.A.R)</span>
                </li>
                <li className='my-3'>
                  Language : <span className='underline'>English</span>
                </li>
              </ul>
            </div>
            <div className='w-[45%] flex-row mt-4 ml-8 '>
              <div className='h-12 flex mb-4 text-base  items-center  border-b-2 border-light  '>
                Sustainability
              </div>
              <p>
                All Aesop products are vegan, and we do not test our
                formulations or ingredients on animals. We are Leaping Bunny
                approved and a Certified B Corporation. Learn more
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-row w-[95%] mx-auto'>
          <div className='w-[45%] flex-row mt-4  '>
            <div className='h-12 flex  items-center  border-b-2 border-light  '>
              About
            </div>
            <ul className='cursor pointer  '>
              <li className='my-3'>Our Story</li>
              <li className='my-3 flex'>
                Foundation
                <BsArrowUpRight className='ml-2' />
              </li>
              <li className='my-3'>Careers</li>
              <li className='my-3'>Privacy policy</li>
              <li className='my-3'>Accessibility</li>
            </ul>
          </div>
        </div>
        <div className='grid grid-cols-footer gap-14'>
          <div className='w-[45%]  flex-row mt-4  '></div>
        </div>
      </div>
      <div className='h-[2px]' />
      <div className=' md:hidden h-[72px] bg-dark text-light  flex justify-between items-center'>
        <div className='w-[80%] text-base mx-auto ml-4 '>© Aesop</div>
        <div className='flex w-[45%] justify-evenly text-xl'>
          <BsInstagram />
          <BsTwitter />
          <BsLinkedin />
        </div>
      </div>

      <div className='hidden md:block'>
        <div className='grid grid-rows-2 bg-dark h-[654px]  text-white '>
          <div className=' grid grid-cols-footer gap-14 '>
            <div className=' w-[500px]  flex-row mt-4 ml-8 '>
              <div className='flex flex-col mb-4   justify-center  m-5 w-[550px]  '>
                <input
                  className='border-2 border-light rounded-sm py-2 px-0 placeholder-white mt-4 bg-dark placeholder-shown:place-content-center  '
                  type='email'
                  placeholder='Email address'
                />
                <div className=' flex mt-4 '>
                  <input
                    type='checkbox'
                    className='mr-2 bg-dark text-white text-justify '
                  />
                  <p>
                    Subscribe to receive communications from Aesop about our
                    products and services. By subscribing, you confirm you have
                    read and accept our{' '}
                    <span className='underline'>privacy policy↗</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[45%]  flex-row mt-4 '>
              <div className='h-12 flex  items-center  border-b-2 border-light  '>
                Orders and Support
              </div>
              <ul className='cursor pointer  '>
                <li className='my-3'>Contact us</li>
                <li className='my-3 flex '>
                  FAQs <BsArrowUpRight className='ml-2' />
                </li>
                <li className='my-3 flex'>
                  Shipping <BsArrowUpRight className='ml-2' />
                </li>
                <li className='my-3 flex'>
                  Returns <BsArrowUpRight className='ml-2' />
                </li>
                <li className='my-3'>Order History</li>
                <li className='my-3'>Terms and Conditions</li>
              </ul>
            </div>
            <div className='w-[45%]  flex-row mt-4 '>
              <div className='h-12 flex  items-center  border-b-2 border-light  '>
                Serives
              </div>
              <ul className='cursor pointer  '>
                <li className='my-3'>Live assistance</li>
                <li className='my-3'>Corporate gifts</li>
                <li className='my-3'>Facial Appointments</li>
              </ul>
            </div>
            <div className='w-[45%]  flex-row mt-4 '>
              <div className='h-12 flex  items-center  border-b-2 border-light  '>
                Location Preferences
              </div>
              <ul className='cursor pointer  '>
                <li className='my-3'>
                  Shipping :{' '}
                  <span className='underline'>Hong Kong (S.A.R)</span>
                </li>
                <li className='my-3'>
                  Language : <span className='underline'>English</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='grid grid-cols-footer gap-14'>
            <div className='w-[550px] flex-row mt-4 ml-8 '>
              <div className='h-12 flex mb-4 text-lg  items-center  border-b-2 border-light  '>
                Sustainability
              </div>
              <p>
                All Aesop products are vegan, and we do not test our
                formulations or ingredients on animals. We are Leaping Bunny
                approved and a Certified B Corporation. Learn more
              </p>
            </div>

            <div className='w-[45%] flex-row mt-4  '>
              <div className='h-12 flex  items-center  border-b-2 border-light  '>
                About
              </div>
              <ul className='cursor pointer  '>
                <li className='my-3'>Our Story</li>
                <li className='my-3 flex'>
                  Foundation
                  <BsArrowUpRight className='ml-2' />
                </li>
                <li className='my-3'>Careers</li>
                <li className='my-3'>Privacy policy</li>
                <li className='my-3'>Accessibility</li>
              </ul>
            </div>
            <div className='w-[45%]  flex-row mt-4  '>
              <div className='h-12 flex  items-center  border-b-2 border-light  '>
                Social Media
              </div>
              <ul className='cursor pointer  '>
                <li className='my-3 flex'>
                  Instagram <BsArrowUpRight className='ml-2' />{' '}
                </li>
                <li className='my-3 flex'>
                  Twitter <BsArrowUpRight className='ml-2' />{' '}
                </li>
                <li className='my-3 flex'>
                  LinkedIn <BsArrowUpRight className='ml-2' />{' '}
                </li>
                <li className='my-3 flex'>
                  WeChat <BsArrowUpRight className='ml-2' />{' '}
                </li>
                <li className='my-3 flex'>
                  Weibo <BsArrowUpRight className='ml-2' />{' '}
                </li>
              </ul>
            </div>
            <div className='w-[45%]  flex-row mt-4  '></div>
          </div>
        </div>
        <div className='h-[2px]' />
        <div className='h-[72px] bg-dark text-light flex items-center'>
          <div className='w-[90%] text-base mx-auto '>© Aesop</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
