'use client';

import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import customize from '../../../public/assets/images/dome/customize.png';

const DomeCustomize= () => {
  const domes = [
    { title: 'Customize Area', description: 'Dream it, build it! Create your own unique Teleios simulator in our customization area. Choose from a wide selection of colors, materials, and designs to make a one-of-a-kind masterpiece that is truly yours.' },
  ];

  return (
    <div className="w-full max-w-full lg:overflow-hidden lg:h-[700px] bg-cover bg-center px-4 md:px-0" >
 <div className="inset-0 bg-transparent flex md:flex-col md:pr-6">
    
   <div className='flex flex-col justify-between py-[30px] px-4'>
    
        <div className='lg:flex items-center justify-between'>
        <div>
        <Image src={customize} width={520} height={566}  alt="customize" className=" h-[350px] lg:h-[566px] xl:h-[566px] w-[516px] " />
        </div>
        {domes.map((dome, index) => (
        <div key={index} className='px-4'>
            <div  className=' flex flex-col justify-center flex-grow-2 '>
                {/* <h4 className='text-[34px] xl:text-[35px] text-[#D008A6] font-bold font-jura'>{dome.subtitle}</h4> */}
                <h1 className='text-[34px] md:text-[68px] text-white font-black font-orbitron'>{dome.title}</h1>
                <p className='md:w-[400px] lg:w-[550px] xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-bold font-jura mt-6'>{dome.description}</p>
            </div>
            <div className='py-10'>
            <Link href="https://feverup.com/m/187813"  className="button-slanted w-[233px] h-[44px] px-8 py-6 button font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center">
            <span className='button-slanted-content'>BOOK NOW</span>
            </Link>
            </div>
        </div>
         ))}
        </div>
   
      
   </div>
   
 </div>
</div>
  )
}

export default DomeCustomize;