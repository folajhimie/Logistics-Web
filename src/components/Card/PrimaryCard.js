import React from "react";
import './PrimaryCard.css'
import PrimaryButton from "../Buttons/primaryButton";
import { HiArrowSmRight } from "react-icons/hi";
import Logistics from '../../assets/images/warehouse.png'
// import Log from '../../assets/images/Freight.mp4'



const PrimaryCard = () => {
    return (
        <div className="ml-0 mr-0 w-full bg-purple-800 h-[50%] relative top-1">
            <div className="">
                {/* <video autoPlay loop muted id='videos'>
                    <source src={Log} type='video/mp4' />
                </video> */}
                <img id="videos" src={Logistics} className="bg-no-repeat bg-cover h-[50%]" alt="" />

                <div className="hero-text w-full flex flex-col sm:flex sm:flex-col absolute top-16">
                    <div className="ml-[7%] text-start ">
                        <h1 className="xl:text-3xl lg:text-2xl md:text-lg sm:text-lg text-slate-900">Ship, Track and Scale in</h1>
                        <h1 className="xl:text-3xl lg:text-2xl md:text-lg sm:text-lg text-slate-900">Just a Few Clicks</h1>
                        <div className="mt-10">
                            <PrimaryButton
                                color="#0d084d"
                                bgColor="white"
                                text={'Send Package'}
                                icon={<HiArrowSmRight />}
                                borderRadius="10px"
                                width="44"
                                small="20px"
                                size="lg"
                            />
                        </div>
                    </div>
                    <div className="hidden mr-[7%] ml-[7%] text-start sm:block md:block mt-5">
                        <div className="mt-2 text-lg text-white md:text-sm lg:text-md xl:text-[1.1rem]">
                            With Logistics partners in more than 80 countries. <br />
                            companies of any size can transport goods to and<br />
                            from more places with greater ease and agility.
                        </div>
                        {/* Static Property */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrimaryCard;
