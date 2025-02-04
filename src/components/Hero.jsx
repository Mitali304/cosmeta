import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero left */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div
          className='text-[#414141] animate-slideIn'
          style={{
            animation: 'slideIn 1s ease-in-out',
          }}
        >
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
    </h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero right */}
      <div className='w-full sm:w-1/2 flex items-center justify-center'>
        <img
          src='/images/h1.jpeg'
          className='w-full h-[60vh] object-cover'
          alt='Hero Image'
        />
      </div>

      {/* Keyframes for animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;
