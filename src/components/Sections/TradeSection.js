import React from 'react';
import { Fade } from 'react-reveal';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// import buyIcon from '../../images/illustrations/buy.png';
// import BuyIcon from '../../assets/images/logistics.png';
// import PrimaryButton from '../../components/buttons/PrimaryButton/index';
// import Select from '../Select/index';
import AirPlane from '../../assets/images/Freight.mp4'

const TradeSection = () => {

  const formHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <section id="home" className="container mx-auto  bg-amber-200 mt-7">
      <div className="grid md:grid-cols-2 gap-10 ">
        <div className="flex items-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal text-start text-secondary font-poppins">Discover new <span className='text-primary font-poppins'>Career Opportunities.</span></h2>
            <p className="text-gray-600 mb-6 text-start font-poppins">Create an account, complete your profile and let the right <br /> opportunities come to you!</p>

            <form onSubmit={formHandler} className="hidden">
              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <input type="text" value="5,000" onChange={inputChangeHandler} className='text-right outline-none w-full' />
                </div>
                {/* <Select value="USD" /> */}
              </div>

              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <input type="text" value="0.10901" onChange={inputChangeHandler} className='text-right outline-none w-full' />
                </div>
                {/* <Select value="BTC" /> */}
              </div>
            </form>

            <div className='flex flex-row'>
              <button className="bg-primary rounded-md py-2 px-10 text-white font-poppins">
                Learn More
              </button>
              <div className='ml-6 flex flex-row mt-2 text-teal-800 cursor-pointer'>
                <span className='mr-4 font-poppins'>Explore Jobs</span>
                <span className='mt-1'><HiOutlineArrowNarrowRight /></span>
              </div>

            </div>
          </div>
        </div>
        <div className='row-start-1 md:col-start-2 '>
          <Fade up>
            {/* <img src={BuyIcon} alt="" /> */}
            <video autoPlay loop muted id='' className='xsl:p-10  md:p-0 w-[720px]'>
              <source src={AirPlane} type='video/mp4' />
            </video>
          </Fade>
        </div>
      </div>
    </section >
  );
}

export default TradeSection;
