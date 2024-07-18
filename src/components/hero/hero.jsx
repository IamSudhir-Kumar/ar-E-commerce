import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
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
          <div className="w-full max-w-lg">
            <Slider {...settings}>
              {models.map((model, index) => (
                <div key={index} className="flex justify-center">
                  <model-viewer
                    className="model-viewer"
                    id={`model-viewer-${index}`}
                    src={model.src}
                    alt={model.alt}
                    camera-controls
                    disable-zoom
                    environment-image="neutral"
                    auto-rotate
                    style={{ width: '100%', height: '100%', minHeight: '400px' }}
                  ></model-viewer>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
