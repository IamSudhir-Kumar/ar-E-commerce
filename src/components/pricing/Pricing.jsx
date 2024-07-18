import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PlansPricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      title: 'Starter',
      monthly: '$99',
      annually: '$999',
      traffic: 'Less than 20,000',
      points: [
        'Installation support',
        'Content management',
        'Analytics',
      ],
    },
    {
      title: 'Growth',
      monthly: '$199',
      annually: '$1999',
      traffic: '20k - 100k',
      points: [
        'Analytics',
        '24/7 support',
        'Advanced analytics',
      ],
    },
    {
      title: 'Business',
      monthly: '$499',
      annually: '$4999',
      traffic: '100k - 250k',
      points: [
        'Advanced analytics',
        'UX consultation',
        'Multi Domain support',
      ],
    },
    {
      title: 'Enterprise',
      monthly: 'Let’s talk',
      annually: 'Let’s talk',
      traffic: 'More than 250,000',
      points: [
        'Personal manager',
        'UI customization',
        'Live onboarding',
      ],
    },
  ];

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} text-white`} onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} text-white`} onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-[url('background-images/d5.png')] bg-cover bg-center min-h-screen flex flex-col items-center text-white font-Poppins" id="pricing">
      <h2 className="text-4xl font-bold mt-10 mb-4">PLANS & PRICING</h2>
      <p className="text-lg md:text-2xl text-center mb-8 p-5">
        Cost of a license to use a 3D viewer and virtual Try-on widget. Choose the<br /> appropriate tariff plan, depending on the traffic to your site:
      </p>
      <div className="flex space-x-4 mb-8 bg-[#5c6868] rounded-full p-2">
        <button
          className={`px-4 md:px-6 py-1 text-base md:text-lg rounded-full shadow-lg ${isMonthly ? 'bg-white text-gray-900' : 'bg-transparent text-white'} font-semibold`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly Fee
        </button>
        <button
          className={`px-4 md:px-6 py-1 text-base md:text-lg rounded-full shadow-lg ${!isMonthly ? 'bg-white text-gray-900' : 'bg-transparent text-white'} font-semibold`}
          onClick={() => setIsMonthly(false)}
        >
          Annually Fee
        </button>
      </div>
      <div className="bg-[#384241] w-full max-w-6xl rounded-[20px] md:rounded-[80px] p-4 md:p-8 mb-9">
        <Slider {...settings}>
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col items-center bg-[#384241] rounded-lg p-4 py-8 md:py-20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{plan.title}</h3>
              <p className="text-sm md:text-base mt-2 mb-2">{plan.traffic}</p>
              <p className="text-2xl md:text-4xl font-bold mb-4">{isMonthly ? plan.monthly : plan.annually}</p>
              <p className="text-sm md:text-base mb-6">{isMonthly ? 'per month' : 'per year'}</p>
              <ul className="list-none mb-6 space-y-2 text-left">
                {plan.points.map((point, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-400 text-xl mr-2">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-[#5c6868] text-white font-bold py-2 px-4 rounded-full hover:bg-green-900 transition duration-300">
                {plan.title === 'Enterprise' ? (
                  <a href="https://calendly.com/sudhir09014902020-msijanakpuri/meeting-regarding-price-plans" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                ) : (
                  'Sign Up Now'
                )}
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PlansPricing;
