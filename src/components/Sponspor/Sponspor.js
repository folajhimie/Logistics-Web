import React from 'react';
import { Fade } from 'react-reveal';
import Card from '../Card/Card';
import SecondaryCard from '../Card/SecondaryCard';
import PrimaryCard from '../Card/PrimaryCard';
import { HiArrowCircleRight, HiDotsHorizontal, HiOutlineCheckCircle } from "react-icons/hi";
import { BsDot, BsLightningChargeFill} from "react-icons/bs";
import TradeSection from '../Sections/TradeSection';
import ServiceSection from '../Sections/ServiceSection';
// import { cards } from '../../../data';




const Sponspor = () => {
    return (
        <div>
            <div className=''>
                <div className=' flex justify-center items-center mt-2'>
                    <div className='grid xsl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-col-3 items-center gap-16 sm:grid-cols-2 xs:grid-cols-1'>
                        {/* <Card
                            arrow={<HiArrowCircleRight />}
                            dot={<HiDotsHorizontal />}
                        /> */}
                        <Fade up delay={200}>
                            <Card
                                arrow={<HiOutlineCheckCircle />}
                                dot={<HiDotsHorizontal />}
                                doubleDot={<BsDot />}
                                status={'Track Package'}
                            /> 
                        </Fade>
                        {/* <Card /> */}
                        <Fade left delay={400}>
                            <SecondaryCard
                                arrow={<HiArrowCircleRight />}
                                dot={<HiDotsHorizontal />}
                                doubleDot={<BsDot />}
                                status={'Ship Package'}
                            /> 
                        </Fade>
                        <Fade right delay={600}>
                            <PrimaryCard
                                arrow={<BsLightningChargeFill />}
                                dot={<HiDotsHorizontal />}
                                doubleDot={<BsDot />}
                                status={'Send Package'}
                            /> 
                        </Fade>

                    </div>

                </div>
                <div>
                    <div className=''>
                        <TradeSection/>
                    </div>
                </div>
                <div>
                    <div className=''>
                        <ServiceSection />
                    </div>
                </div>

                <div>
                    {/* <div className=''>
                        <ServiceSection />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Sponspor