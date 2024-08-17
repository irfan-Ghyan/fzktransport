'use client';

import React from 'react';
import Link from 'next/link';


const DomePit = () => {
  const domes = [
    { title: 'Customize Area', description: 'Dream it, build it! Create your own unique Teleios simulator in our customization area. Choose from a wide selection of colors, materials, and designs to make a one-of-a-kind masterpiece that is truly yours.' },
  ];

  return (
    <div className="relative w-full max-w-full overflow-hidden h-[600px] xl:h-[700px] bg-cover bg-center px-4 md:px-0" style={{ backgroundImage: "url('/assets/images/dome/venue.png')" }}>
 <div className="absolute inset-0 bg-transparent px-4 md:flex md:flex-col  md:pr-6 py-[50px] lg:py-[100px] max-w-7xl mx-auto">
   <div className=' px-4 flex flex-col justify-between md:mt-[36px] md:mb-[41px]'>
     {domes.map((dome, index) => (
       <div key={index} className='py-[15px] lg:py-[30px] lx:pt-[70px] mt-[90px] lg:mt-[0px]'>
           {/* <h4 className='text-[34px] xl:text-[35px] text-[#D008A6] font-bold font-jura drop-shadow-4xl'>{dome.subtitle}</h4> */}
         <h1 className='text-[34px] md:text-[68px] text-white font-black font-orbitron drop-shadow-4xl'>{dome.title}</h1>
         <p className='md:w-[400px] lg:w-[550px] xl:w-[600px] md:text-[14px] lg:text-[18px] text-white font-bold font-jura mt-6 text-balance drop-shadow-4xl'>{dome.description}</p>
       </div>
     ))}
     <div className="flex items-start m-bottom">
     <div className='py-10'>
       <Link href="/explore"  className="button-slanted w-[233px] lg:w-[233px] h-[44px] px-8 py-6 button font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center">
       <span className='button-slanted-content'>VIEW MENU</span>
       </Link>
     </div>
   </div>
   </div>
   
 </div>

</div>
  )
}

export default DomePit;