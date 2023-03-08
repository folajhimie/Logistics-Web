import React from 'react'

const SecondaryCard = ({ dot, arrow, doubleDot, status }) => {
    return (
        <div className='bg-white ml-0 w-fit xl:h-fit border-2 relative top-1 lg:h-fit xsl:h-fit px-2'>
            <div className='bg-white h-[100%] flex justify-center flex-col'>
                <div className='top-bar flex justify-between items-center '>
                    <div className='text-slate-900 font-semibold ml-6 mt-3'>{status}</div>
                    <div className=' bg-secondary xsl:p-2 lg:p-2 mr-6 text-white px-5 xsl:w-fit xsl:mt-1 font-semibold'><span className=''>RealTime</span></div>
                </div>

                <ul className='flex flex-col xl:mt-7 xsl:mt-3 lg:mt-7'>
                    <li className='flex w-full justify-between xsl:mt-7'>
                        <div className='text-primary text-3xl '>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Table Desk Aura 124cm </div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>02:38 Local time <span className='text-xl inline-block text-pink-600  lg:text-xs'> • </span> 12 January 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-third xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                    <li className='flex w-full justify-between xsl:mt-7'>
                        <div className='text-primary text-3xl '>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Alexa Smart Speaker </div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>06:15 Local time <span className='text-xl inline-block text-pink-600  lg:text-xs'> • </span> 07 March 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-third xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                    <li className='flex w-full justify-between xsl:mt-7'>
                        <div className='text-primary text-3xl '>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Cooler Master Caliber R1</div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>19:10 Local time <span className='text-xl inline-block text-pink-600  lg:text-xs'> • </span> 01 September 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-third xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                    <li className='flex w-full justify-between xsl:mt-7 xsl:mb-3'>
                        <div className='text-primary text-3xl '>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Kitchen Utensils in Transit </div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>10:30 Local time <span className='text-xl inline-block text-pink-600  lg:text-xs'> • </span> 27 August 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-third xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SecondaryCard;