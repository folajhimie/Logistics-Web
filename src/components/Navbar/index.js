import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
// import { BsList, BsX } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import TopBar from './TopBar';

// import logo from '../../images/logo.svg';
// import PrimaryButton from '@/components/buttons/PrimaryButton';
// import PrimaryButton from '../buttons/PrimaryButton';
import Menus from './Menus';
// import SecondaryButton from '../buttons/SecondaryButton';

// import SecondaryButton from '@/components/buttons/SecondaryButton';
// import Menus from './Menus';

export default function Navbar() {
  // const [active, setActive] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [currentUser, setCurrentUser] = useState(false)

  // const [active, setActive] = useState(false);
  // const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [backgroundwhite, setBackgroundWhite] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: '768px' });

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
      // setDropdownOpen(false)
    } else {
      setBackgroundWhite(false);
      // setDropdownOpen(true)
    }
  };

  const handleBlackScreenClick = (e) => {
    e.stopPropagation();
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setDropdownOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setBackgroundWhite(dropdownOpen);
  }, [dropdownOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <nav className={classNames('fixed w-full transition-all duration-50 z-50 pt-4 ', {
      // "bg-emerald-800  shadow-none border-none": dropdownOpen,
      // "bg-white shadow-lg ": !dropdownOpen, 
      "bg-white shadow-lg !py-3": backgroundwhite
    })}>
      <div className="px-4 mx-auto top-0 flex justify-between items-center">
        <a href="/" className="md:flex items-center mb-4 hidden">
          {/* <img src={logo} className="mr-10" alt="Jobber" /> */}
          <div className="logo">
            <Link className="link" to="/">
              <span className="text-secondary text-3xl font-semibold ">fiverr</span>
            </Link>
            <span className="dot font-bold text-primary w-5 text-3xl">.</span>
          </div>
        </a>
        <div className="hidden w-8/12 justify-end mx-4 gap-8 md:hidden xl:flex xl:flex-row xl:justify-end sm:hidden lg:hidden xsl:flex">
          <Menus dropdownOpen={dropdownOpen} backgroundwhite={backgroundwhite}/>
        </div>
        <div className="hidden gap-4 md:flex">
          <a className="bg-primary rounded-md py-2 px-10 text-white font-poppins flex items-center" href='/auth/login' alt="">Sign In</a>
          <a className=" bg-white border rounded-md py-2 px-10 text-primary font-poppins flex items-center hover:bg-secondary" href='/auth/register' alt="">Sign Up</a>
        </div>


        {/* responsivenesss */}
        <div className="md:hidden text-2xl w-full ">
          <TopBar dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} handleBlackScreenClick={handleBlackScreenClick} backgroundwhite={backgroundwhite} />
        </div>
      </div>
      {(backgroundwhite || pathname !== "/") && (
        <div className=' hidden md:flex '> 
          <hr />
          <div className=" hidden md:flex md:w-full justify-center bg-lime-500">
            <div className="ml-10 md:ml-8 md:text-xs lg:text-sm">
              International Shipping
            </div>
            <div className="ml-10 md:ml-8 md:text-xs lg:text-sm ">
              Logistics
            </div>
            <div className="ml-10 md:ml-8 md:text-xs lg:text-sm">
              Sea Freight
            </div>
            <div className="ml-10 md:ml-8 md:text-xs lg:text-sm">
              Delivery
            </div>
            <div className="ml-10 md:ml-8 md:text-xs lg:text-sm">
              Supply Chain
            </div>
            <div className="ml-10 md:ml-8 md:text-xs lg:text-sm">
              Ware-Housing 
            </div>
            <div className="ml-10 md:ml-8 md:text-xs lg:text-sm">
              Air Freight
            </div>
            <div className="ml-10 md:ml-8 md:text-xs lg:text-sm">
              Procurement
            </div>
            <div className="ml-10 md:ml-8 md:text-xs lg:text-sm">
              Track Monitoring 
            </div>
          </div>
          <hr />
        </div>
      )}
    </nav>
  );
}
