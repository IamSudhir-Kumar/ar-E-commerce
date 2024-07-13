import React from 'react';
import '../styles.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the speed of scrolling
  };

  const models = [
    { src: "models/drone1.glb", alt: "Drone" },
    { src: "models/ipad.glb", alt: "iPad" },
    { src: "models/shoes.glb", alt: "Shoes" }
  ];

  const handleARClick = () => {
    const currentSlide = document.querySelector('.slick-active model-viewer');
    if (currentSlide) {
      if (currentSlide.canActivateAR) {
        currentSlide.activateAR();
      } else {
        alert("AR is not supported on this device or browser.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] p-4 bg-[url('assets/d3.png')]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-8xl font-extrabold text-white mb-4 font-Poppins">
            VIRTUAL <br /> TRY-ON
          </h1>

          <p className="text-white text-lg mb-4 max-w-2xl font-Poppins">
           Powerful tools for creating and distributing lifelike 3D content and AR experiences. Elevate e-commerce, digital marketing, and more to boost engagement and drive sales.
          </p>
          <div className="flex items-center space-x-2 mb-8 my-5">
            <div className='bg-[#5c6868] rounded-full space-x-3 p-2'>
            <input
              type="email"
              placeholder="Business e-mail"
              className="px-7 py-3 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-[#a0aeb7] text-white rounded-full hover:bg-[#384241]">DEMO</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <div className="w-full max-w-lg">
            <Slider {...settings}>
              {models.map((model, index) => (
                <div key={index}>
                  <model-viewer
                    className="model-viewer"
                    id={`model-viewer-${index}`}
                    src={model.src}
                    alt={model.alt}
                    camera-controls
                    environment-image="neutral"
                    auto-rotate
                    animation-played
                    ar
                    disable-zoom
                    ar-scale="0.005" // Adjust this value to scale the model in AR mode
                  ></model-viewer>
                </div>
              ))}
            </Slider>
          </div>
          {/* <button
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 mt-4"
            onClick={handleARClick}
          >
            AR - Try On
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
