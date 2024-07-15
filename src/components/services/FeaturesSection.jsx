import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="bg-white rounded-[120px] p-10 shadow-lg flex flex-col md:flex-row md:space-x-6 relative">
      <div className="flex-1 flex flex-col items-center justify-between p-4">
        <div className="text-left mb-4">
          <h3 className="text-xl font-semibold text-[#4d4740] font-Poppins">AUGMENTED REALITY</h3>
          <p className="text-[#4d4740] mt-2 font-Poppins">
            We specialize in the development and deployment of both App-based Augmented Reality (Native AR) and Web-based Augmented Reality (Web AR) experiences.
          </p>
        </div>
        <img src="assets/ar.jpg" alt="Augmented Reality" className="rounded-b-[80px] w-23 h-50 mt-4" />
      </div>
      {/* First gradient line */}
      <div className="absolute top-[350px] right-[180px] transform -translate-x-1/2 -translate-y-1/4 rotate-90">
        <div className="h-0.5 w-52 bg-gradient-to-r from-[#ffffff] to-[#D3D3D3] mx-auto"></div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-between p-4">
        <div className="text-center mb-4">
          <img src="assets/car.jpeg" alt="3D Modelling" className="w-full h-auto mt-4" />
          <h3 className="text-xl font-semibold text-[#384241] font-Poppins mt-5">3D MODELLING <br/>& ANIMATION</h3>
          <p className="text-[#384241] mt-2 font-Poppins">
            3D modelling is the process of creating a three-dimensional representation of any object or surface.
          </p>
        </div>
      </div>
      {/* Second gradient line */}
      <div className="absolute bottom-[350px] left-[370px] transform -translate-x-1/2 -translate-y-1/4 rotate-90">
        <div className="h-0.5 w-52 bg-gradient-to-r from-[#D3D3D3] to-[#ffffff] mx-auto"></div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-between p-4 font-Poppins">
        <div className="text-right mb-4">
          <h3 className="text-xl font-semibold text-[#384241] font-Poppins">ARCHITECTURAL 3D SERVICES</h3>
          <p className="text-[#384241] mt-2 font-Poppins">
            Our Architectural 3D Services bring your architectural designs to life with stunning, realistic 3D models and visualizations.
          </p>
        </div>
        <img src="assets/arc.jpg" alt="Architectural Services" className="rounded-b-[80px] w-23 h-50 mt-4" />
      </div>
    </div>
  );
};

export default FeaturesSection;
