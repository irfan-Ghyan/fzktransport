'use client';

import React from 'react';
import Link from 'next/link';

const Training = () => {




  return (
    <div className=" w-full max-w-fulloverflow-hidden lg:h-[600px] xl:h-[700px] bg-cover bg-center px-4 md:px-0 " style={{ backgroundImage: "url('/assets/images/training/bg-2.png')" }}>
      <div className="inset-0  px-4 md:flex md:flex-col  md:pr-6 py-[20px] lg:py-[100px] md:px-8 max-w-7xl mx-auto ">
        <div className='flex flex-col justify-between md:mt-[36px] md:mb-[41px] '>

            <div className='py-[30px] lg:pt-[70px]'>
            <h1 className='text-[14px] md:text-[24px] text-white font-black font-jura'>
            ABOUT US <br />
            <span className='text-[32px] md:text-[54px] text-white font-black font-orbitro'>WHO WE ARE?</span>
          </h1>
              <p className='md:w-[400px] lg:w-[550px] xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-bold font-jura mt-6'>
              Discover immersive learning experiences at Teleios Dome. From educational trips exploring our factory to safety driving lessons and group racing instruction, we offer dynamic programs to engage learners of all ages. Prepare to embark on an educational journey at Teleios Dome.
              </p>
            </div>
          <div className="flex justify-center lg:justify-start m-bottom">
          <div className='pt-4 pb-10'>
          <Link href="/explore" className="w-[200px] cursor-pointer px-2 py-[7px] lg:py-[13px] md:py-[13px] font-jura font-normal md:font-bold bg-gradient-to-r from-[#F56545] to-[#ff0a01] text-white ml-2 transition duration-300 flex items-center justify-center relative overflow-hidden rounded-full">
            <span className=''>SEE MORE</span>
          </Link>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Training;
