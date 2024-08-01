// import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import '../styles.css'; // Ensure this path is correct
import Watch from '../models/Watch';
import Timex from "../models/Timex";

const WhyConnex = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-16 bg-[url('background-images/d2.png')] bg-contain bg-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#384241] text-center lg:text-left font-Poppins">
          Why CONNEX? <br />Right Now!
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-16 w-full max-w-6xl mt-8 md:mt-16">
        <div className="w-full md:w-1/2 lg:w-auto flex justify-center canvas-container">
          <Canvas>
            <ambientLight />
            <Environment preset="sunset" />
            <pointLight position={[10, 10, 10]} />
            <Timex
              scale={[0.5, 0.5, 0.5]}
              position={[0, 2, -5]}
              castShadow
              receiveShadow
            />
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>
        <div className="max-w-xl font-Poppins">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#384241] mb-2">
              TRY IT ON IN SECONDS
            </h3>
            <p className="text-[#384241] mt-0 text-lg sm:text-2xl">
              CONNEX allows your customers to try on products in seconds without
              waiting for days!
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#384241] mb-2">
              ACCURATE, FAST & LIGHTWEIGHT
            </h3>
            <p className="text-[#384241] mt-0 text-lg sm:text-2xl">
              CONNEX is proven to be accurate, fast and lightweight virtual
              try-on, helping you in brand differentiation.
            </p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#384241] mb-2">
              DOUBLE SALES, HALF RETURNS
            </h3>
            <p className="text-[#384241] mt-0 text-lg sm:text-2xl">
              We have been helping global brands achieve double sales, triple
              visitors, and half the product returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyConnex;
