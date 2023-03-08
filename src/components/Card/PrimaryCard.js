import React from "react";
import './PrimaryCard.css'
// import PrimaryButton from "../Buttons/primaryButton";
// import { HiArrowSmRight } from "react-icons/hi";
// import Logistics from '../../assets/images/warehouse.png'
// import Log from '../../assets/images/Freight.mp4'



const PrimaryCard = ({ dot, arrow, doubleDot, status }) => {
    return (
        <div className='bg-white ml-0 w-fit xl:h-fit border-2 relative top-1 lg:h-fit xsl:h-fit px-2'>
            <div className='bg-white h-[100%] flex justify-center flex-col'>
                <div className='top-bar flex justify-between items-center '>
                    <div className='text-slate-900 font-semibold ml-6 mt-3'>{status}</div>
                    <div className=' bg-[yellowgreen] rounded-full xsl:p-2 lg:p-2 mr-6 text-slate-900  xsl:w-fit xsl:mt-1 '><span className=''>Delivery Time</span></div>
                </div>

                <ul className='flex flex-col xl:mt-7 xsl:mt-3 lg:mt-7'>
                    <li className='flex w-full justify-between xsl:mt-7'>
                        <div className='text-secondary text-3xl '>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Transit on South Jakarta</div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>17:32 Local time <span className='text-xl inline-block text-purple-600  lg:text-xs'> • </span> 17 January 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-primary xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                    <li className='flex w-full justify-between xsl:mt-7'>
                        <div className='text-secondary text-3xl '>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Out of South Jakarta</div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>15:09 Local time <span className='text-xl inline-block text-purple-600  lg:text-xs'> • </span> 29 May 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-primary xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                    <li className='flex w-full justify-between xsl:mt-7'>
                        <div className='text-secondary text-3xl '>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Package Arrived In Surabaya</div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>01:15 Local time <span className='text-xl inline-block text-purple-600  lg:text-xs'> • </span> 12 August 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-primary xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                    <li className='flex w-full justify-between xsl:mt-7 xsl:mb-3'>
                        <div className='text-secondary text-3xl '>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>In The Process of sorting </div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>09:35 Local time <span className='text-xl inline-block text-purple-600  lg:text-xs'> • </span> 09 March 2023</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-primary xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default PrimaryCard;
