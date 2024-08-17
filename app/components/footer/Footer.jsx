import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/assets/images/logobottom.png'


const Footer = () => {
  return (
    <footer className="bg-[#4B1870] text-white pt-10 lg:pt-20 px-8 lg:px-20 padding-px xl:px-40 max-w-full overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start ">
        <Image  
            src={logo}
            alt="Flag Icon"
            width={53.68}
            height={54.62}
            className="w-[53.68px] h-[54.62px]"
          />
          <p className='text-white font-jura text-[13px] font-bold'>Experience the thrill of speed at Teleios Dome, offering dynamic group races and exclusive VIP experiences.</p>
          <div className="flex space-x-4 mt-[15px] ">
            <Link href="https://www.facebook.com/teleiostechofficial" target="_blank" rel="noopener noreferrer" className="border border-white px-[4px] py-[4px] w-[40px] h-[40px]">
              <Image src="/assets/icons/facebook.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
            </Link>
            <Link href="https://www.youtube.com/@teleiosofficial8491" target="_blank" rel="noopener noreferrer" className="border border-white px-[4px] py-[4px] w-[40px] h-[40px]">
              <Image src="/assets/icons/youtube.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
            </Link>
            <Link href="https://www.instagram.com/teleios_official/" target="_blank" rel="noopener noreferrer" className="border border-white px-[4px] py-[4px] w-[40px] h-[40px]">
              <Image src="/assets/icons/instagram.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
            </Link>
            <Link href="https://www.linkedin.com/company/teleios-fz/" target="_blank" rel="noopener noreferrer" className="border border-white px-[4px] py-[4px] w-[40px] h-[40px]">
              <Image src="/assets/icons/linkedin.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
            </Link>
          
          </div>
        </div>

        <div className="flex flex-col ">
          <h3 className="text-white font-orbitron text-[20px] font-normal mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline text-white font-jura text-[13px] font-bold">
              Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-white font-jura text-[13px] font-bold">
              Experience
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-white font-jura text-[13px] font-bold">
              Dome
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-white font-jura text-[13px] font-bold">
              Upcoming Events
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-white font-jura text-[13px] font-bold">
              Corporate & Celebration Events
              </Link>
            </li>
          </ul>
        </div>


        <div className="flex flex-col">
          <h3 className="text-white font-orbitron text-[20px] font-normal mb-4">Location & Time</h3>
          <div className=''>
            <div className='mb-[10px]'>
            <h3 className='text-white font-jura text-[13px] font-bold '>Address:</h3>
            <p className='text-white font-jura text-[13px] font-bold '>D-65 - Dubai Production City - Dubai, UAE</p>
            </div>
            <div className='mt-[10px]'>
            <h3 className='text-white font-jura text-[13px] font-bold '>Timing:</h3>
            <p className='text-white font-jura text-[13px] font-bold '>Tuesday - Sunday 12PM to 11PM</p>
            </div>
          </div>

        </div>

 
        <div className='className="flex flex-col'>
            <div className='mb-[10px]'>
            <div className='flex'>
                <Image src="/assets/images/phone.png" alt="alt" height={12} width={12} className='w-[9px] h-[9px] mt-[5px]'/>
                <p className='text-white font-jura text-[13px] font-bold ml-1'>Phone</p>
            </div>
            <div>
            <p className='text-white font-jura text-[13px] font-bold '>+971 55 489 4679</p>
            </div>
            </div>
            <div className='mt-[10px]'>
            <div className='flex'>
                <Image src="/assets/images/email.png" alt="alt" height={12} width={12} className='w-[9px] h-[9px] mt-[5px]'/>
                <p className='text-white font-jura text-[13px] font-bold ml-1'>Email</p>
            </div>
            <p className='text-white font-jura text-[13px] font-bold '>Tuesday - Sunday 12PM to 11PM</p>
            </div>
          </div>
          
      </div>
      <div className=' mt-[60px] container mx-auto'>
        <div className=' md:flex justify-between'>
        <div>
            <p className='text-white font-jura text-[11px] md:text-[13px] font-bold opacity-60'>All rights reserved 2024 © Teleios Dome</p>
            </div>
          <div className='md:text-end'><p className='text-white font-jura text-[11px] md:text-[13px] font-bold opacity-60'>Privacy Policy | Terms Conditions</p></div>
        </div>
        
      </div>

    </footer>
  );
};

export default Footer;
