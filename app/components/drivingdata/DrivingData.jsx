// 'use client';

// import React from 'react';
// import useDrivingData from '../useDrivingData';
// import Link from 'next/link';

// const DrivingData = () => {
//     const { domes, loading } = useDrivingData();

//     if (loading) {
//         return <div>Loading...</div>;
//       }
//   return (
//     <div className="relative w-full lg:h-[399px] h-[600px] max-w-full overflow-hidden flex lg:mb-[100px]">
//       {domes.map((dome, index) => (
//         <div
//           key={index}
//           className={`absolute w-full h-full bg-black bg-opacity-30 lg:p-10 xl:p-20 sm:p-4 duration-1000 ease-in-out $`}
//           style={{
//             backgroundImage: `url(${dome.imageUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="flex flex-col px-4 lg:px-40 padding-px items-start justify-center h-full bg-opacity-50 pb-10 ">
//             <h2 className="text-[32px] md:text-[54px] mb-4 text-white font-black font-orbitron text-shadow:_0_1px_0_rgb(0_0_0_/_40%)">{dome.title}</h2>
//             <p className="text-[18px] mb-4 text-white font-[18px] font-jura text-shadow:_0_1px_0_rgb(0_0_0_/_40%)">{dome.description}</p>
//             <Link
//               href="/slide1"
//               className="w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button-slanted  font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center"
//             >
//               <span className="button-slanted-content">ENQUIRY NOW</span> 
//             </Link>
//           </div>
         
//       </div>
//       ))}
    
//     </div>
//   )
// }

// export default DrivingData;


'use client';

import React from 'react';

import Link from 'next/link';

const DrivingData = () => {
  const domes = [
    { title: 'Safety Driving', description: 'Safety Driving: Talk with Dubai police officials on road safety and experience real-world driving conditions in a safe environment. Our specialized program, tailored for ages 15+, integrates traffic simulation into our simulators. Students practice driving skills in realistic scenarios to prepare for the road with confidence. ', imageUrl: '/assets/images/dome/driving.png' },
   
  ];

  return (
    <div className="relative w-full lg:h-[399px] h-[600px] max-w-full overflow-hidden flex lg:mb-[100px]">
      {domes.map((dome, index) => (
        <div
          key={index}
          className="absolute w-full h-full bg-black bg-opacity-30 lg:p-10 xl:p-20 sm:p-4 "
          style={{
            backgroundImage: `url(${dome.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col px-4 lg:px-40 padding-px items-start justify-center h-full bg-opacity-50 pb-10">
            <h2 className="text-[32px] md:text-[54px] mb-4 text-white font-black font-orbitron text-shadow:_0_1px_0_rgb(0_0_0_/_40%)">{dome.title}</h2>
            <p className="text-[18px] mb-4 text-white font-[18px] font-jura text-shadow:_0_1px_0_rgb(0_0_0_/_40%)">{dome.description}</p>
            <div className="w-full flex lg:justify-end justify-center">
              <Link
                href="/slide1"
                className="w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button-slanted font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center"
              >
                <span className="button-slanted-content">ENQUIRY NOW</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrivingData;
