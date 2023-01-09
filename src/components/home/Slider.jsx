import React, { Fragment, useState } from 'react';
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const Slider = () => {
    const slides = [
        {
            name: "aliya",
            image: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/4b1d44f93671b9eb.jpg?q=50",
        },
        {
            name: "phone",
            image: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/fe67d3442862b765.jpg?q=50"
        },
        {
            name: "television",
            image: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/fe67d3442862b765.jpg?q=50",
        },
        {
            name: "aeroplane",
            image: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/9a98ec819d2dfacb.jpg?q=50"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const move = ( ) => {
        if ( currentIndex === 0 || currentIndex <= 1 ) setCurrentIndex(currentIndex+1)
        if ( currentIndex === 2  ) setCurrentIndex(2);
    }

    // const prevSlide = () => {
    //     console.log("click prev")
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // }


    // const nextSlide = () => {
    //     console.log("click next")
    //     const isLastSlide = currentIndex === slides.length - 1;
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // }

    // const goToSlide = (slideIndex) => {
    //     setCurrentIndex(slideIndex)
    // }

    console.log(currentIndex)
    return (
        <Fragment>
            <div className="w-full h-80 bg-[#F1F3F6] m-auto p-4 relative -z-10 mb-40 ">
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex].image})`
                    }}
                    className="w-full h-full  bg-center bg-cover duration-500"
                >
                </div>
                <div className="flex">
                    <button onClick={() => move()} className="flex  justify-center  flex-col absolute top-24 w-12 h-28 pl-2 bg-red-400">
                        <MdOutlineArrowBackIosNew size={30} />
                    </button>
                    <button onClick={() => move()} className="flex justify-center   flex-col absolute right-4 top-24 w-12 h-28 pl-2 bg-white">
                        <MdArrowForwardIos size={30} />
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Slider;




