import React, { Fragment, useState, useEffect } from 'react';
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
        },
        {
            name: "phones",
            image: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/b10b99ad7a473558.jpg?q=50"
        },
        {
            name: "air",
            image: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/5d77ece489257e26.jpg?q=50"
        },
        {
            name: "flight",
            image: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/9ee25e0e7ec416ca.jpg?q=50"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);



    const prevSlide = () => {
        console.log("click prev")
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }


    const nextSlide = () => {
        console.log("click next")
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    useEffect(() => {
        const timer = setTimeout(() =>  nextSlide(), 1e4)
        return () => clearTimeout(timer)
    }, [currentIndex])

    return (
        <Fragment>
            <div className="w-full h-80 bg-[#F1F3F6] m-auto p-4 relative  mb-40 ">
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex].image})`
                    }}
                    className="w-full h-full  bg-center bg-cover duration-500"
                >
                </div>
                <div className="flex">
                    <button onClick={() => prevSlide()} className="flex  justify-center  flex-col absolute top-24 w-12 h-28 pl-2 bg-white">
                        <MdOutlineArrowBackIosNew onClick={() => prevSlide()} size={30} />
                    </button>
                    <button onClick={() => {
                        console.log("event click on next")
                        nextSlide()
                    }} className="flex justify-center   flex-col absolute right-4 top-24 w-12 h-28 pl-2 bg-white">
                        <MdArrowForwardIos onClick={() => {
                            console.log("event click on next")
                            nextSlide()
                        }} size={30} />
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Slider;




