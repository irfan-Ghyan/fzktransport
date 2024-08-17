'use client';

import React from 'react'
import EducationData from '../components/educationdata/EducationData';
import DrivingData from '../components/drivingdata/DrivingData'
import WhyteleiosData from '../components/whyteleios/WhyteleiosData';
import FullwidthSlider from '../components/slider/FullwidthSilder';
import Form from '../components/form/Form'

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <div className="flex items-center justify-center xl:px-40 lg:px-20 sm:px-4">
        <div className="text-center p-6 text-white lg:py-[80px] lg:pb-[100px] lg:pt-[50px]">
          <h1 className="font-orbitron text-[34px] lg:text-[54px] text-white font-black mb-4">EDUCATION</h1>
          <p className="text-white font-jura text-[14px] lg:text-[18px] font-bold lg:px-[40px] xl:px-[80px] items-center ">
          Discover how the best racing simulator is assembled in the Teleios Factory: from raw materials and electronics to the<br/> finished state-of-the-art device. Students learn how the simulator is made and then experience firsthand its <br/>performance racing on a circuit.
          </p>
        </div>
      </div>
    <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
     <EducationData />
     </div>
     <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
     <DrivingData />
     </div>
     <div className="w-full bg-[#1E123D]">
     <WhyteleiosData />
     </div>
     <div className="w-full  ">
     <FullwidthSlider />
     </div>
     <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
     <Form />
     </div>
    </div>
  )
}

export default Page;