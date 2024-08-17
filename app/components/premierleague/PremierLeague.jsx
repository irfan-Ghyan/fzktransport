// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import useUpcomingeventsPremierLeagueData from '../useUpcomingeventsPremierleagueData'
// import Image from 'next/image';
// import premier from '../../../public/assets/images/premier.png';
// import whatsapp from '../../../public/assets/images/whatsapp.png';


// const PremierLeague = () => {
//   const { domes, loading } = useUpcomingeventsPremierLeagueData();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="w-full max-w-full lg:overflow-hidden lg:h-[700px] bg-cover bg-center px-4 md:px-0 flex items-center justify-center">
//       <div className="inset-0 bg-transparent flex flex-col lg:flex-row items-center justify-center py-[30px]">
//         <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
//           <div className="flex justify-center lg:justify-start">
//             <Image src={premier} width={516} height={566} alt="premier" className="h-[460px] w-[430px] xl:h-[566px] xl:w-[516px]" />
//           </div>
//           <div className="flex flex-col items-center lg:items-start lg:ml-10 mt-6 lg:mt-0">
//             {domes.map((dome, index) => (
//               <div key={index} className="text-center md:text-left">
//                 <div className="flex flex-col items-center lg:items-start">
//                   <h1 className="text-[34px] lg:text-[54px] text-white font-black font-orbitron">{dome.title}</h1>
//                   <p className="w-[300px] md:w-[550px] xl:w-[600px] sm:text-[14px] md:text-[18px] text-white font-bold font-jura mt-6">{dome.description}</p>
//                 </div>
//                 <div className=" py-8">
//                   <Link href="/explore" className="button-slanted w-[233px] h-[44px] px-4 py-6 button text-white font-jura font-bold bg-[#1DB054] flex items-center justify-center rounded-tl-lg rounded-br-lg">
//                     <span className="button-slanted-content md:text-[14px] lg:text-[18px] text-white font-bold font-jura">BOOK THROUGH</span>
//                     <Image src={whatsapp} alt={whatsapp} width={24} height={24} className="w-[24px] h-[24px] ml-2" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremierLeague;
