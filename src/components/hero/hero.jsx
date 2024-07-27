import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import "./hero.css";
import Ring from '../models/Ring'; // Ensure the model import path is correct
import Gold from '../models/Gold'; // Ensure the model import path is correct
import { useGLTF } from '@react-three/drei';
import Old from "../models/Scene"
import New from "../models/Scene1"
import Black from "../models/Scene2"

const Hero = () => {
  const [ringColor, setRingColor] = useState('gold'); // Default color for the ring
  const [diamondColor, setDiamondColor] = useState('white'); // Default color for the diamond

  const ringColors = [
    { name: 'gold', color: '#FFD700' },
    { name: 'silver', color: '#C0C0C0' },
    { name: 'roseGold', color: '#B76E79' },
  ];

  const diamondColors = [
    { name: 'white', color: '#FFFFFF' },
    { name: 'citrin', color: '#E4D00A' },
    { name: 'ruby', color: '#E0115F' },
    { name: 'emerald', color: '#50C878' },
  ];

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
            {/* <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={4} />
                <directionalLight position={[10, 10, 10]} intensity={2} />
                <Environment preset="studio" />
                
                <Ring
                  position={[0, -0.1, 0]}
                  scale={[18, 18, 18]}
                  rotation={[-0.9, Math.PI, Math.PI / 5]}
                  ringColor={ringColor}
                  diamondColor={diamondColor}
                />
                <Gold 
                 scale={[10, 10, 10]}
                 position={[0, -0.1, 0]}
                 rotation={[-0.9, Math.PI, Math.PI / 5]}
                 enableZoom={true}
                 />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas> */}
            <Canvas shadows camera={{ position: [0, 2, 10], fov: 35 }}>
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[5, 10, 5]}
                intensity={2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />
              <directionalLight
                position={[-5, 10, -5]}
                intensity={1.5}
                castShadow
              />
              <Suspense fallback={null}>
                <Environment preset="city" />
                <Black
                  scale={[7, 7, 7]}
                  position={[0, -0.1, 0]}
                  rotation={[-0.9, Math.PI, Math.PI / 5]}
                  castShadow
                  receiveShadow
                />
              </Suspense>
              <OrbitControls enableZoom={true} />
              <mesh receiveShadow position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={50}>
                <planeGeometry attach="geometry" args={[100, 100]} />
                <shadowMaterial attach="material" opacity={0.3} />
              </mesh>
            </Canvas>

            <div className="flex flex-col items-center mt-4">
              <div className="bg-white border-8 border-gray-700 rounded-full p-3 flex items-center">
                <label className="text-black font-Poppins  mr-2">Ring Colour</label>
                <div className="flex space-x-2">
                  {ringColors.map((color) => (
                    <div
                      key={color.name}
                      className="w-8 h-8 rounded-full cursor-pointer"
                      style={{ backgroundColor: color.color }}
                      onClick={() => setRingColor(color.name)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 ml-4">
            {/* <div className="bg-white border border-gray-700 rounded-lg p-4 flex items-center"> */}
              {/* <div className="flex flex-col items-start" style={{ width: '40px' }}>
                <label className="text-black font-Poppins mb-2 rotate-90">Diamond Color:</label>
              </div> */}
              {/* <div className="flex flex-col space-y-2 ml-4">
                {diamondColors.map((color) => (
                  <div
                    key={color.name}
                    className="w-8 h-8 rounded-full cursor-pointer"
                    style={{ backgroundColor: color.color }}
                    onClick={() => setDiamondColor(color.name)}
                  ></div>
                ))}
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
