'use client';

import React from 'react';
import Link from 'next/link';


const Coaching = () => {
  const trainings = [
    { title: '1-1 Coaching', description: 'There is always room for improvement and our coaches are determined to grow your racing skills. From the basics to the most advanced techniques, our 1-1 coaching, provided by one of our professional instructors, will bring you to the next level, from essential racing strategies to improving lap times and mastering advanced maneuvers for an upcoming racing competition. Let’s assess together your skills and find out who could be your coach.' },
  ];


  return (
    <div className=" w-full max-w-fulloverflow-hidden lg:h-[600px] xl:h-[700px] bg-cover bg-center px-4 md:px-0 " style={{ backgroundImage: "url('/assets/images/training/Education2.png')" }}>
      <div className="inset-0  px-4 md:flex md:flex-col  md:pr-6 py-[20px] lg:py-[100px] md:px-8 max-w-7xl mx-auto ">
        <div className='border-solid border-b-[1px] border-white border-opacity-20 text-end mt-10 md:mt-0'>
          <h1 className='text-[14px] text-white font-normal font-orbitron pb-4 mt-10 md:mt-0'>Coaching</h1>
        </div>
        <div className='flex flex-col justify-between md:mt-[36px] md:mb-[41px] '>
          {trainings.map((training, index) => (
            <div key={index} className='py-[30px]'>
              <h1 className='text-[34px] md:text-[54px] text-white font-black font-orbitron'>{training.title}</h1>
              <p className='md:w-[400px] lg:w-[550px] xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-bold font-jura mt-6'>{training.description}</p>
            </div>
          ))}
          <div className="flex justify-center lg:justify-start m-bottom">
          <div className='pt-4 pb-10'>
            <Link href="/explore"  className="button-slanted w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button font-jura font-bold border-[1px] border-white hover:bg-gradient-to-r hover:from-[#7E51F8] hover:to-[#D007A6] hover:border-0 text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center">
            <span className='button-slanted-content'>ENQUIRE NOW</span>
            </Link>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Coaching;
