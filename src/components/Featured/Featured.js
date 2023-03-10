import React from "react";
// import "./Featured.scss";
// import { useNavigate } from "react-router-dom";
// import Logistics from '../../assets/images/logistics.png';
// import MainVideo from '../../assets/images/video.mp4';
import Freight from '../../assets/images/Cargo.mp4';
// import AirPlane from '../../assets/images/Freight.mp4'
import PrimaryButton from '../../components/Buttons/primaryButton';
import { HiArrowSmRight } from "react-icons/hi";
// import Card from "../Card/Card";
import './Featured.css'

// <img src={Logistics} className="bg-no-repeat bg-contain" alt="" />


function Featured() {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={Freight} type='video/mp4' />
      </video>
      {/* <img src={Logistics} className="img" alt="" /> */}

      <div className="hero-text w-full flex flex-row justify-between sm:flex sm:flex-row">
        <div className="ml-[7%] text-start ">
          <h1 className="lg:text-5xl md:text-2xl sm:text-xl xs:text-3xl text-primary">Fast, Precise, Ship</h1>
          <h1 className="lg:text-5xl md:text-2xl sm:text-xl xs:text-3xl text-primary">and Track Your </h1>
          <h1 className="lg:text-5xl md:text-2xl sm:text-xl xs:text-3xl text-primary">Package</h1>
          <div className="mt-10">
            <PrimaryButton
              color="white"
              bgColor="#0d084d"
              text={'Track Package'}
              icon={<HiArrowSmRight/>}
              borderRadius="10px"
              width="44"
              small="20px"
              size="lg"
            />
          </div>
        </div>
        <div className="hidden mr-[7%] text-start sm:block md:block">
          <div className="bg-lime-500 w-48 h-1"></div>
          <div className="bg-secondary w-24 h-1 mt-2"></div>
          <div className="mt-2 text-lg text-slate-900 md:text-md lg:text-lg">
            accelerate performance and growth for your <br />
            entire supply chain. Ship to and from anywhere.<br />
            Track everything collaborate with everyone.<br />
            See what happens when data drives your decisions.
          </div>
          {/* Static Property */}
        </div>
      </div>
      {/* <div className="flex justify-evenly bg-yellow-400 items-center h-screen">

        </div> */}

      <div className="bottom-text">
        <h2>Seamless Delivery Services</h2>
      </div>

      {/* <div>
        <Card 
          arrow={<HiArrowCircleRight/>} 
          dot={<HiDotsHorizontal/>} 
        />

      </div> */}
    </div>
  )
}

export default Featured;
