import React from 'react';
import classNames from 'classnames';

// import DropdownMenu from './DropdownMenu';

export default function Menus({dropdownOpen, backgroundwhite }) {
  return (
        <div className="">
          <div className="flex flex-col mt-4 rounded-lg md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <div className="w-full">
              <a href='#service' 
              className={classNames('hover:text-primary py-2 block font-poppins md:24 px-5 text-gray-900', { 
                "text-gray-900 ": backgroundwhite
              })}
              >Service</a>
            </div>
            <div className="w-full">
              <a href='#process' 
              className={classNames('hover:text-primary py-2 block font-poppins md:24 px-5 text-gray-900', { 
                "text-gray-900 ": backgroundwhite
              })}
              >Process</a>
            </div>
            <div className="w-full" >
              <a href='#ourwork' 
              className={classNames('hover:text-primary py-2 block font-poppins md:24 text-gray-900', { 
                "text-gray-900 ": backgroundwhite
              })}
              >Our Work</a>
            </div>
            <div className="w-full">
              <a href='#about' 
              className={classNames('hover:text-primary py-2 block font-poppins md:24 px-5 text-gray-900', { 
                "text-gray-900 ": backgroundwhite
              })}
              >About</a>
            </div>
            <div className="w-full">
              <a href='#contact' 
              className={classNames('hover:text-primary py-2 block font-poppins md:24 px-5 text-gray-900', { 
                "text-gray-900 ": backgroundwhite
              })}
              >Contact</a>
            </div>
            {/* <DropdownMenu>
              <div className="w-full">
                <a href='#faq' className='hover:text-primary py-2 block font-poppins'>Faq</a>
              </div>
              <div className="w-full">
                <a href='#footer' className='hover:text-primary py-2 block font-poppins'>Section</a>
              </div>
            </DropdownMenu> */}
          </div>
        </div>
    // <nav class="hidden md:flex xl:flex font-poppins px-2 bg-transparent border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    //   <div class="container flex flex-wrap items-center justify-between mx-auto">
    //   </div>
    // </nav>
    
  );
}
