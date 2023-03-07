import React from 'react'
import Card from '../Card/Card';
import SecondaryCard from '../Card/SecondaryCard';
import PrimaryCard from '../Card/PrimaryCard';
import { HiArrowCircleRight, HiDotsHorizontal, HiOutlineCheckCircle } from "react-icons/hi";
import { BsDot } from "react-icons/bs";




const Sponspor = () => {
    return (
        <div>
            <div>
                <div className='flex justify-center items-center mt-20'>
                    <div className='grid grid-cols-3 gap-16 px-12'>
                        <Card
                            arrow={<HiArrowCircleRight />}
                            dot={<HiDotsHorizontal />}
                        />
                        <PrimaryCard />
                        <SecondaryCard
                            arrow={<HiOutlineCheckCircle />}
                            dot={<HiDotsHorizontal />}
                            doubleDot={<BsDot/>}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponspor