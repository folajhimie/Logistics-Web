import React from 'react'

const SecondaryCard = ({ dot, arrow, doubleDot }) => {
    return (
        <div className='ml-0 w-full h-[100%] border-2 relative top-1 bg-pink-700'>
            <div className='bg-white h-[100%] flex justify-center flex-col'>
                <div className='top-bar flex justify-between'>
                    <div className='text-slate-900 font-semibold ml-6 mt-3'>Track Package</div>
                    <div className=' bg-secondary p-2 mr-6 mt-1 text-white px-5'><span className=''>RealTime</span></div>
                </div>

                <div className='flex flex-col mt-10'>
                    <div className='flex w-full  justify-between mt-10'>
                        <div className='text-primary text-3xl ml-4'>{arrow}</div>
                        <div className='flex flex-col justify-start text-start  w-full pl-4'>
                            <div className='text-start text-slate-900 capitalize'>Transit on South Jakarta ( Warehouse)</div>
                            <div className='text-gray-400 text-[15px] text-start'>05:22 Local time <span className='text-xl inline-block text-purple-600 '> • </span> 07 January 2022</div>
                        </div>
                        <div className='text-secondary text-2xl mr-4'>{dot}</div>
                    </div>
                    <div className='flex w-full  justify-between mt-10'>
                        <div className='text-primary text-3xl ml-4'>{arrow}</div>
                        <div className='flex flex-col justify-start text-start pl-4 w-full'>
                            <div className='flex justify-start text-slate-900 capitalize'>Out of South Jakarta</div>
                            <div className='text-gray-400 text-[15px] text-start'>06:22 Local time  <span className='text-xl inline-block text-purple-600 '> • </span> 24 May 2022</div>
                        </div>
                        <div className='text-secondary text-2xl mr-4'>{dot}</div>
                    </div>
                    <div className='flex w-full  justify-between mt-10'>
                        <div className='text-primary text-3xl ml-4'>{arrow}</div>
                        <div className='flex flex-col justify-start text-start pl-4 w-full'>
                            <div className='text-start text-slate-900 capitalize'>Package Arrived in Surabaya ( Transit)</div>
                            <div className='text-gray-400 text-[15px] text-start'>01:15 Local time <span className='text-xl inline-block text-purple-600 '> • </span> 17 October 2022</div>
                        </div>
                        <div className='text-secondary text-2xl mr-4'>{dot}</div>
                    </div>
                    <div className='flex w-full  justify-between mt-10'>
                        <div className='text-primary text-3xl ml-4'>{arrow}</div>
                        <div className='flex flex-col justify-start text-start pl-4 w-full'>
                            <div className='text-start text-slate-900 capitalize'>In the process of sorting</div>
                            <div className='text-gray-400 text-[15px] text-start'>07:15 Local time  <span className='text-xl inline-block text-purple-600 '> • </span> 30 January 2023</div>
                        </div>
                        <div className='text-secondary text-2xl mr-4'>{dot}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondaryCard;