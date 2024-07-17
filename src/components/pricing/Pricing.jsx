import React, { useState } from 'react';

const PlansPricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    { 
      title: 'Starter', 
      monthly: '$99', 
      annually: '$999', 
      traffic: 'Less than 20,000',
      points: [
        ' Installation support',
        ' Content management',
        ' Analytics'
      ]
    },
    { 
      title: 'Growth', 
      monthly: '$199', 
      annually: '$1999', 
      traffic: '20k - 100k',
      points: [
        ' Installation support',
        ' Content management',
        ' Analytics',
        ' 24/7 support',
        ' Advanced analytics'
      ]
    },
    { 
      title: 'Business', 
      monthly: '$499', 
      annually: '$4999', 
      traffic: '100k - 250k',
      points: [
        ' Installation support',
        ' Content management',
        ' Analytics',
        ' 24/7 support',
        ' Advanced analytics',
        ' UX consultation',
        ' Multi Domain support'
      ]
    },
    { 
      title: 'Enterprise', 
      monthly: 'Let’s talk', 
      annually: 'Let’s talk', 
      traffic: 'More than 250,000',
      points: [
        ' Installation support',
        ' Content management',
        ' Analytics',
        ' 24/7 support',
        ' Advanced analytics',
        ' UX consultation',
        ' Multi Domain support',
        ' Personal manager',
        ' UI customization',
        ' Live onboarding'
      ]
    }
  ];

  return (
    <div className="bg-[url('background-images/d5.png')] bg-cover bg-center min-h-screen flex flex-col items-center text-white font-Poppins" id='pricing'>
      <h2 className="text-4xl font-bold mt-10 mb-4">PLANS & PRICING</h2>
      <p className="text-2xl text-center mb-8 p-5 justify-center">
        Cost of a license to use a 3D viewer and virtual Try-on widget. Choose the<br /> appropriate tariff plan, depending on the traffic to your site:
      </p>
      <div className="flex space-x-4 mb-8 bg-[#5c6868] rounded-full p-2">
        <button
          className={`px-6 py-1 text-lg rounded-full shadow-lg ${isMonthly ? 'bg-white text-gray-900' : 'bg-transparent text-white'} font-semibold`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly Fee
        </button>
        <button
          className={`px-6 py-1 text-lg rounded-full shadow-lg ${!isMonthly ? 'bg-white text-gray-900' : 'bg-transparent text-white'} font-semibold`}
          onClick={() => setIsMonthly(false)}
        >
          Annually Fee
        </button>
      </div>
      <div className="bg-[#384241] w-full max-w-6xl rounded-[80px]  p-8 mb-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="flex flex-col items-center bg-[#384241] rounded-lg p-4 py-0  relative">
            <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
            <p className="text-sm mt-2 mb-2">{plan.traffic}</p>
            <p className="text-4xl font-bold mb-4">{isMonthly ? plan.monthly : plan.annually}</p>
            <p className="text-sm mb-6">{isMonthly ? 'per month' : 'per year'}</p>
            <ul className="list-none mb-6 space-y-2 text-left">
              {plan.points.map((point, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-green-400 text-xl mr-2">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#5c6868] text-white font-bold py-2 px-4 rounded-full hover:bg-green-900 transition duration-300">
              {plan.title === 'Enterprise' ? 
                <a href="https://calendly.com/sudhir09014902020-msijanakpuri/meeting-regarding-price-plans" target='_blank'>Contact Us</a> 
                : 'Sign Up Now'}
            </button>
            {index < plans.length - 1 && (
              <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white to-transparent transform translate-x-1/2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPricing;
