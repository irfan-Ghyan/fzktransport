'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import useDomeData from '../../components/useDomeData';

const Dome = () => {
  // const { domes, loading } = useDomeData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const domes = [
    { title: 'DOME', description: 'The ultimate immersive entertainment experience for racing enthusiasts happens at Teleios Dome. State-of-the-art racing simulators, stylish lounge, VIP area, conference space, and gaming area await. Whether you are here for exhilarating races or social gatherings, Teleios Dome delivers an unforgettable experience.', imageUrl: '/assets/images/dome/S1.png' },
    { title: 'DOME', description: 'The ultimate immersive entertainment experience for racing enthusiasts happens at Teleios Dome. State-of-the-art racing simulators, stylish lounge, VIP area, conference space, and gaming area await. Whether you are here for exhilarating races or social gatherings, Teleios Dome delivers an unforgettable experience.', imageUrl: '/assets/images/dome/S2.png' },
    { title: 'DOME', description: 'The ultimate immersive entertainment experience for racing enthusiasts happens at Teleios Dome. State-of-the-art racing simulators, stylish lounge, VIP area, conference space, and gaming area await. Whether you are here for exhilarating races or social gatherings, Teleios Dome delivers an unforgettable experience.', imageUrl: '/assets/images/dome/S3.png' },
    { title: 'DOME', description: 'The ultimate immersive entertainment experience for racing enthusiasts happens at Teleios Dome. State-of-the-art racing simulators, stylish lounge, VIP area, conference space, and gaming area await. Whether you are here for exhilarating races or social gatherings, Teleios Dome delivers an unforgettable experience.', imageUrl: '/assets/images/dome/S4.png' },
    { title: 'DOME', description: 'The ultimate immersive entertainment experience for racing enthusiasts happens at Teleios Dome. State-of-the-art racing simulators, stylish lounge, VIP area, conference space, and gaming area await. Whether you are here for exhilarating races or social gatherings, Teleios Dome delivers an unforgettable experience.', imageUrl: '/assets/images/dome/S5.png' },
    { title: 'DOME', description: 'The ultimate immersive entertainment experience for racing enthusiasts happens at Teleios Dome. State-of-the-art racing simulators, stylish lounge, VIP area, conference space, and gaming area await. Whether you are here for exhilarating races or social gatherings, Teleios Dome delivers an unforgettable experience.', imageUrl: '/assets/images/dome/S6.png' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === (domes?.length ?? 0) - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [domes]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === (domes?.length ?? 0) - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? (domes?.length ?? 0) - 1 : prev - 1));
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!domes || domes.length === 0) {
  //   return <div>No data available</div>;
  // }



  return (
    <div className="relative w-full h-[700px] overflow-hidden flex justify-center items-center">
      {domes.map((dome, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${dome.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col items-start justify-center h-full bg-opacity-50 p-9 max-w-7xl mx-auto ">
            <h2 className="text-[32px] md:text-[54px] mb-4 text-white font-black font-orbitron ">{dome.title}</h2>
            <p className="text-[18px] mb-4 text-white font-jura ">{dome.description}</p>
            <Link
              href="/slide1"
              className="w-[220px] lg:w-[233px] h-[44px] px-8 py-6 button-slanted font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white rounded-tl-lg rounded-br-lg flex items-center justify-center transition duration-300"
            >
              <span className='button-slanted-content'>Discover the Dome</span>
            </Link>
          </div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {domes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`p-[1px] w-[45px] md:w-[100px] lg:w-[145px] xl:w-[190px] ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-100'
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dome;
