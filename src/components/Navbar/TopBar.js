import React from 'react';
import classNames from 'classnames';
import Menus from './Menus';

import { Link } from "react-router-dom";
import { BsList, BsX } from 'react-icons/bs';


const TopBar = ({ dropdownOpen, setDropdownOpen, handleBlackScreenClick }) => {
    return (
        <div className='rounded w-full flex justify-between '>
            <div className={classNames({
                'flex w-full justify-between': true,
                'bg-white-500 border-none shadow-none': !dropdownOpen,
                'bg-white border-none shadow-none': dropdownOpen,
            })}
            >
                <a href="/" className="flex items-center mb-4 ml-4 mt-4">
                    {/* <img src={logo} className="mr-10" alt="Jobber" /> */}
                    <div className="logo">
                        <Link className="link" to="/">
                            <span className="text text-3xl font-semibold ">fiverr</span>
                        </Link>
                        <span className="dot font-bold text-primary w-5 text-3xl">.</span>
                    </div>
                </a>

                <span class="bar">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </span>
                <div class="brand">
                    <i class="text-success fa fa-times fs-1" aria-hidden="true"></i>
                </div>
                
                <button className="z-50 p-4 block transition-all" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    {dropdownOpen ?
                        <BsX className='text-primary' />
                        :
                        <BsList className='text-primary' />
                    }
                </button>

            </div>

            {/* Menu dropdown */}
            <div className={classNames({
                'text-base left-0 top-full right-0 absolute transition-all duration-50 z-100': true,
                'invisible opacity-0': !dropdownOpen,
                'visible opacity-100 ': dropdownOpen,
            })}>
                <div className="h-screen left-0 bg-black bg-opacity-30 " onClick={handleBlackScreenClick}>
                    <div className="z-100 shadow-xl p-6 bg-white">
                        <div className="mb-4">
                            <Menus />
                        </div>
                        <div className="gap-4 flex mb-6 ml-6">
                            <a className="bg-primary rounded-md py-2 px-10 text-white font-poppins flex items-center" href='/auth/login' alt="">Sign In</a>
                            <a className="bg-white border border-teal-700 rounded-md py-2 px-10 text-primary font-poppins flex items-center hover:bg-secondary" href='/auth/register' alt="">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar