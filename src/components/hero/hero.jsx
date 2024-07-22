import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import "./hero.css";
import Jordan from '../models/Jordan1';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[url('background-images/d5.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 font-Poppins">
            VIRTUAL <br /> TRY-ON
          </h1>
          <p className="text-white text-base mb-4 max-w-lg font-Poppins leading-relaxed">
            Powerful tools for creating and distributing lifelike 3D content and AR experiences. Elevate e-commerce, digital marketing, and more to boost engagement and drive sales.
          </p>
          <div className="flex justify-center mt-2 my-5 w-full md:max-w-xs lg:max-w-lg">
            <div className="flex items-center space-x-3 md:space-x-4 bg-[#5c6868] rounded-full p-2">
              <input
                type="email"
                placeholder="Business e-mail"
                className="flex-1 px-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-center md:text-left"
              />
              <button className="px-6 py-2 bg-[#a0aeb7] text-white rounded-full hover:bg-[#384241]">
                DEMO
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 lg:w-2/3 flex justify-center items-center">
          <div className="w-full max-w-lg h-[400px] md:h-full">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={5} />
                <directionalLight position={[5, 5, 5]} />
                <Environment preset="forest"  />
                <Jordan position={[0, -0.5, 0]} scale={[1, 1, 1]}/>
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
