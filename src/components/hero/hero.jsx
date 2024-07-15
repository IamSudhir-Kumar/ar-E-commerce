import React from 'react';
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
    autoplaySpeed: 5000,
  };

  const models = [
    { src: "models/drone1.glb", alt: "Drone" },
    { src: "models/ipad1.glb", alt: "iPad" },
    { src: "models/jordan1.glb", alt: "Shoes" }
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
    <div className="flex flex-col items-center justify-center min-h-[90vh] p-4 bg-[url('background-images/d5.png')] bg-contain">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-6xl font-extrabold text-white mb-4 font-Poppins">
            VIRTUAL <br /> TRY-ON
          </h1>
          <p className="text-white text-base mb-4 max-w-4xl font-Poppins leading-relaxed">
            Powerful tools for creating and distributing lifelike 3D content and AR experiences. Elevate e-commerce, digital marketing, and more to boost engagement and drive sales.
          </p>
          <div className="flex justify-center mt-2 my-5">
            <div className="bg-[#5c6868] rounded-full p-2 flex items-center space-x-3 mb-7">
              <input
                type="email"
                placeholder="Business e-mail"
                className="px-24 py-3 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              />
              <button className="px-6 py-3 bg-[#a0aeb7] text-white rounded-full hover:bg-[#384241]">
                DEMO
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full flex">
          <div className="flex-1">
            {/* Other content on the left side */}
          </div>
          <div className="flex flex-col items-center w-full md:w-3/4 lg:w-2/3 mr-5">
            <div className="w-full max-w-3xl">
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
                      disable-zoom
                    ></model-viewer>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
