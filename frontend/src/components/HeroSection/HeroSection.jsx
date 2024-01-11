import React from 'react';
import sofa from "../../assets/sofa.png"
import frame from "../../assets/frame.png"
import lamp from "../../assets/lamp.png"
import car from "../../assets/car.png"
import "./HeroSection.css";
import { Typewriter, Cursor } from "react-simple-typewriter";

function HeroSection() {
    // const {text} = useTypewriter({
    //     words: ['Chair', 'Tv', "Car"],
    //     loop: {},
    // });

    return (
        <>
            <div className='h-screen flex flex-col w-full relative'>
                <div className='h-1/3 bg-orange flex relative'>
                    <div className='text-6xl mt-20 ml-2 info '>
                        <p> DO YOU WANT TO RENT </p>
                        {/* Check if text is a string before rendering */}
                        <Typewriter
            words={['Chair', 'Tv', "Car"]}
            loop={5000000}/>
                    <Cursor/>
                    </div>
                    <img className='absolute top-0 right-20 mr-20' src={frame} alt="Frame" />
                </div>
                <div className='h-1/3 flex relative'>
                    <img className='absolute top-[-90px] right-20  ' src={sofa} alt="Sofa" />

                    <img className='absolute top-[-160px] right-80 mr-60 ' src={lamp} alt="Lamp" />
                    <button className="border border-gray-500 absolute top-10 left-60 w-20 h-20 px-4 py-2">
                        RENT NOW
                    </button>
                </div>
                <div className='h-3/5 bg-blue relative '>
                    <img className='absolute top-[-100px] left-20 mr-20' src={car} alt="Car" />
                    <p className='text-7xl absolute right-80 top-20 info'>DO YOU WANT TO RENT</p>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
