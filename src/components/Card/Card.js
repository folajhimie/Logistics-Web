import React from 'react'

const Card = ({dot, arrow, doubleDot, status}) => {
  return (
    <div className='bg-white ml-0 w-fit xl:h-fit border-2 relative top-1 lg:h-fit xsl:h-fit px-2'>
        <div className='bg-white h-[100%] flex justify-center flex-col'>
            <div className='top-bar flex justify-between items-center mt-1'>
                <div className='text-slate-900 font-semibold ml-6 mt-3 '>{status}</div>
                <div className='rounded-[100%] bg-primary p-2 mr-6 xsl:w-10 xsl:h-10 lg:w-7 lg:h-7 lg:text-sm xsl:text-md'><span className=' flex justify-center text-slate-200'>3</span></div>
            </div>

            <ul className='flex flex-col xl:mt-7 xsl:mt-3 lg:mt-7'>
                    <li className='flex w-full justify-between xsl:mt-7'>
                        <div className='text-third text-3xl '>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Purchase of Iphone 12 </div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>15:07 Local time <span className='text-xl inline-block text-sky-700  lg:text-xs'> • </span> 02 January 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-secondary xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                    <li className='flex w-full justify-between xsl:mt-7'>
                        <div className='text-third text-3xl'>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Pending Request </div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>03:12 Local time <span className='text-xl inline-block text-sky-700  lg:text-xs'> • </span> 24 April 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-secondary xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                    <li className='flex w-full justify-between xsl:mt-7'>
                        <div className='text-third text-3xl'>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Transit Package to Maryland</div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>20:52 Local time <span className='text-xl inline-block text-sky-700  lg:text-sm'> • </span> 17 May 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-secondary xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                    <li className='flex w-full justify-between xsl:mt-7 xsl:mb-3'>
                        <div className='text-third text-3xl'>{arrow}</div>
                        <div className=' w-full flex flex-col justify-start text-start pl-4'>
                            <div className='text-start text-slate-900 capitalize xsl:text-lg lg:text-sm'>Package to Ikeja HQ </div>
                            <div className='text-gray-400 xsl:text-sm text-start lg:text-xs'>12:42 Local time <span className='text-xl inline-block text-sky-700  lg:text-sm'> • </span> 28 October 2022</div>
                            <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                            <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                        </div>
                        <div className='text-secondary xsl:text-2xl ml-4 mr-4 lg:text-xl'>{dot}</div>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Card