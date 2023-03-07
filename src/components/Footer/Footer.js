import React from 'react';
// import { BsArrowRight } from 'react-icons/bs';

// import logo from '@/images/logo.svg';
// import logo from '../../images/logo.svg'
// import JobberLogo from '../../assets/images/fontIcon/icon.png';
// import Icon from '../../assets/images/fontIcon/logo.png'
// import PrimaryButton from '../buttons/PrimaryButton/index';
import PrimaryButton from '../Buttons/primaryButton';
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";





export default function Footer() {
  return (
    <footer id='footer'>
      <div className="container px-2 border-y border-lightgray py-6">
        <div className="grid lg:grid-cols-5 xl:grid-cols-5 md:grid-cols-5 ">
          <div className="flex items-center">
            {/* <img src={logo} className="mr-10" alt="Jobber" /> */}
            <a href="/" className="md:flex items-center mb-4 hidden">
              {/* <img src={logo} className="mr-10" alt="Jobber" /> */}
              <div className="logo">
                <Link className="link" to="/">
                  <span className="text-secondary text-3xl font-semibold ">fiverr</span>
                </Link>
                <span className="dot font-bold text-primary w-5 text-3xl">.</span>
              </div>
            </a>
          </div>
          <div className="text-start p-6 xl:flex md:justify-between xl:border-r border-lightgray">
            <ul className=''>
              <h2 className='font-poppins font-semibold mb-6 text-xl'> Solutions</h2>

              <li className='mb-4'>
                <a href="/" className=' text-gray-500 hover:text-primary font-poppins'>Graphics & Design</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Digital Marketing</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Writing & Translation</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Video & Animation</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Music & Audio</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Programming & Tech</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Data</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Business</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Business</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Lifestyle</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Photography</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Sitemap</a>
              </li>        
            </ul>
          </div>
          <div className='text-start p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <h2 className='font-poppins font-semibold mb-6 text-xl'> Support </h2>

              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Technical Support</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Jobber Basics</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Employer Centre Basics</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Manage Company Reviews</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Manage Company Profile</a>
              </li>
            </ul>
          </div>
          <div className='text-start p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul className='flex flex-col justify-start items-start'>
              <h2 className='font-poppins font-semibold mb-6 text-xl'>Contact Us</h2>

              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Help Center</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Employer Blog</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>System Status</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Area Avaibility</a>
              </li>
              <li className='mb-4'>
                <a href="/" className='text-gray-500 hover:text-primary font-poppins'>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="p-6 lg:col-span-3 xl:col-auto">
            <span className='text-gray-500 font-poppins'>Newsletter</span>
            <p className='text-gray font-thin font-poppins'>Never miss anything Job Vacancies when you online.</p>
            <div className="flex gap-4 my-4">
              <div>
                <input type="email" className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary w-full" placeholder="Enter your email" />
              </div>
              <div>
                {/* <PrimaryButton className="!px-5 aspect-square !rounded-md">
                  <BsArrowRight color='white' />
                </PrimaryButton> */}
                {/* <PrimaryButton
                  color="white"
                  bgColor="#00e396"
                  
                  icon={<HiArrowSmRight />}
                  borderRadius="10px"
                  width="6"
                  small="20px"
                  size="sm"
                /> */}
                <button className='rounded-lg p-3 flex justify-between font-semibold capitalise bg-primary text-white text-3xl'>
                  <HiArrowSmRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray-500 font-poppins">© Copyright {new Date().getFullYear()} JOBBER LLC. All rights reserved</p>
        <small className='text-gray-500 font-poppins'>
          Design by Folajimi Henry
        </small>
      </div>
    </footer>
  );
}
