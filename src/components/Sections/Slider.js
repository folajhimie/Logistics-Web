import React from 'react';
import { useState, useEffect } from "react";
import { cards } from '../../Mixins/data';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import './Slider.css';
import { Fade } from 'react-reveal';




const Slider = () => {


    var [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(true);
    const [autoPlay, setAutoPlay] = useState(true);
    // const [cardLine, setCardLine ] = useState(0)
    let timeOut = null;
    let productContainers = [...document.querySelectorAll('.carousel_card')];
    // const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    // const preBtn = [...document.querySelectorAll('.pre-btn')];




    const goToPrevious = () => {
        console.log("product..", productContainers);

        productContainers.forEach((item, i) => {
            console.log("the end...", item);
            let containerDimensions = item.getBoundingClientRect();
            let containerWidth = containerDimensions.width;
            console.log("containerDimensions", containerDimensions);
            item.scrollLeft -= containerWidth;
            console.log("scrollLeft...", item.scrollLeft);
            if (item.scrollLeft >= 2480 ||
                item.scrollLeft >= 2209 ||
                item.scrollLeft >= 2119 ||
                item.scrollLeft >= 1700) {
                console.log(true);
                item.scrollLeft = 0;
            }
            console.log("the way of the Lord..", containerWidth);
        })

        const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setDirection(true);
        // console.log("the prev index..", newIndex)
        console.log("this is the Previous Index..", currentIndex, direction);
    };


    const goToNext = () => {
        const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setDirection(false);
        // console.log("the next index..", newIndex)
        // console.log("this is the Next Index..", currentIndex, direction);
    };


    const goToSlide = (slideIndex) => {
        // console.log("the time is now..", slideIndex);
        if (currentIndex <= slideIndex) {
            setDirection(false)
        } else {
            setDirection(true)
        }
        setCurrentIndex(slideIndex);
    };



    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timeOut = autoPlay &&
            setTimeout(() => {
                goToNext();
            }, 3000);
    }, []);

    return (
        <Fade up>
            <div className='h-96 w-full m-auto relative'>
                <div
                    className="carousel"
                    onMouseEnter={() => {
                        setAutoPlay(false);
                        clearTimeout(timeOut);
                    }}
                    onMouseLeave={() => {
                        setAutoPlay(true);
                    }}
                >
                    <div className='z-10 w-fit h-fit group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-primary text-white cursor-pointer'>
                        <BsArrowLeft onClick={goToPrevious} size={30} />
                    </div>
                    <div
                        className='carousel_card w-full h-full bg-center bg-contain duration-500 bg-no-repeat rounded bg-white'
                    >
                        {cards.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                // style={{ backgroundImage: `url(${cards[currentIndex].img})` }}
                                className='card cursor-pointer '
                            >
                                <div className='card_img w-[40vh] h-full flex items-center gap-3 p-3 rounded'>
                                    <img
                                        src={slide.img}
                                        key={slideIndex}
                                        alt="logistics"
                                        className={
                                            slideIndex === currentIndex
                                                ? "card_dot card_dot-active"
                                                : "card_dot"
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right Arrow */}
                    <div className='w-fit h-fit group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-primary text-white cursor-pointer'>
                        <BsArrowRight onClick={goToNext} size={30} />
                    </div>
                    {/* <div>

                    </div> */}

                </div>
                <div className=' mb-40 flex bottom-0 justify-center items-center relative w-full'>
                    <div className='py-1 px-1 w-64 flex top-4 justify-evenly items-center mb-12 rounded-full bg-black/20  relative'>
                        {cards.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className={
                                    slideIndex === currentIndex
                                        ? "pagination_dot pagination_dot-active"
                                        : "pagination_dot"
                                }
                            // className='relative z-50 text-2xl cursor-pointer rounded-full flex justify-center flex-row text-white'
                            >
                                {/* ● */}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Fade>

    );
}

export default Slider