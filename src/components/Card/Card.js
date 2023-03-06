import React from 'react'

const Card = ({dot, arrow}) => {
  return (
    <div className='ml-8 w-1/3 h-80 border relative  top-9'>
        <div className='bg-white '>
            <div className='top-bar flex justify-between'>
                <div className='text-slate-900 font-semibold ml-6 mt-3'>Ship Package</div>
                <div className='rounded-[100%] bg-primary p-2 mr-6 mt-1 h-7'><span className=''>3</span></div>
            </div>

            <div className='flex flex-col mt-10'>
                <div className='flex w-full  justify-between'>
                    <div className='text-secondary text-3xl ml-4'>{arrow}</div>
                    <div className='mr-10'>
                        <div className='text-start text-slate-900 capitalize'>Table Desk Aura 124cm</div>
                        <div className='text-gray-400 text-sm text-start'>Delivery date 12 Jan, 22</div>
                        <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                        <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                    </div>
                    <div className='text-primary text-2xl mr-4'>{dot}</div>
                </div>
                <div className='flex w-full  justify-between mt-6'>
                    <div className='text-secondary text-3xl ml-4'>{arrow}</div>
                    <div className='mr-10'>
                        <div className='text-start text-slate-900 capitalize'>alexa smart speaker</div>
                        <div className='text-gray-400 text-sm text-start'>Delivery date 08 Jan, 22</div>
                        <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                        <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                    </div>
                    <div className='text-primary text-2xl mr-4'>{dot}</div>
                </div>
                <div className='flex w-full  justify-between mt-6'>
                    <div className='text-secondary text-3xl ml-4'>{arrow}</div>
                    <div className='mr-10'>
                        <div className='text-start text-slate-900 capitalize'>cooler master caliber R1</div>
                        <div className='text-gray-400 text-sm text-start'>Delivery date 12 Jan, 22</div>
                        <div className="bg-gray-300 opacity-50 w-48 h-1 mt-3 mb-2"></div>
                        <div className="bg-gray-300 opacity-50 w-24 h-1 mb-2"></div>
                    </div>
                    <div className='text-primary text-2xl mr-4'>{dot}</div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Card