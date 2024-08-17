import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import useWhyteleiosData from '../useWhyteleiosData';

const WhyteleiosData = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const domes = [
    {  imageUrl: '/assets/images/education/edu1.png' },
    {  imageUrl: '/assets/images/education/edu2.png' },
    {  imageUrl: '/assets/images/education/edu3.png' },
   
  ];


  useEffect(() => {
    if (domes.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % domes.length);
      }, 3000); 

      return () => clearInterval(interval);
    }
  }, [domes]);



  return (
    <div className="max-w-7xl px-4 md:px-8 mx-auto">
      <div className="inset-0 px-4 md:pr-6 py-[34px] md:py-[100px]">
        <h1 className="text-[24px] md:text-[54px] text-white font-black text-center font-orbitron">
          DISCOVER TELEIOS UNFORGETTABLE EDUCATIONAL EXPERIENCES
        </h1>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start ">
          <div className="order-2 lg:order-1 flex flex-col lg:items-start lg:text-left w-full lg:w-1/2 lg:pr-8 lg:py-0 ">
            <div className="py-[40px]">
              <h2 className="text-[23px] text-white font-bold font-orbitron pt-[20px]">
                Why Teleios?
              </h2>
              <p className="w-full xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-bold font-jura py-6 pr-6">
                Students are eager to learn about technology, and Teleios Factory is the perfect place to explore the fascinating world of racing simulators. They will see how these complex machines are built, from raw materials and electronics to the finished product, ready to race.<br/><br/>
                The excitement continues at Teleios Dome where students can test drive the simulators and experience firsthand what makes them so special. For some it might be their first driving experience— a safe and thrilling introduction to the racing world. For others it is a fun way to explore the world of high-speed racing.
                The experience we have created for students is both educational and entertaining guaranteed to spark discussions and leave a lasting impression.
              </p>
              <Link
                href="/"
                className="button-slanted w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center"
              >
                <span className="button-slanted-content">ENQUIRY NOW</span>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center lg:justify-end lg:py-0 overflow-hidden relative">
            {domes.length > 0 && (
              <Image
                src={domes[currentIndex].imageUrl}
                width={520}
                height={566}
                alt={domes[currentIndex].title}
                className="w-full lg:w-auto lg:max-w-sm xl:max-w-md h-auto transition-opacity duration-1000 ease-in-out  mt-[40px]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyteleiosData;

