import React from 'react';

const ArTryon = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="video/sample.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight font-Poppins">
                    Create Virtual
                    <br />
                    Experiences
                </h1>
                <button className="mt-6 px-8 py-2 bg-white text-[#384241] font-bold font-Poppins rounded-full hover:bg-[#3f7947] hover:text-white border-solid border-gray-300 transition border-x-[11px] border-y-[5px] duration-300 ease-in-out">
                    Ar Try-on
                </button>


            </div>
        </div>
    );
};

export default ArTryon;
