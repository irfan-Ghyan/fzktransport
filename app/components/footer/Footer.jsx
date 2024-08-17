import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/assets/images/logobottom.png'


const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-white pt-10 lg:pt-20 px-8 lg:px-20 padding-px xl:px-40 max-w-full overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start ">
        <Image  
            src={logo}
            alt="Flag Icon"
            width={53.68}
            height={54.62}
            className="w-[53.68px] h-[54.62px]"
          />
          <p className='text-white font-jura text-[13px] font-bold'>FOLLOW US</p>
          <div className="flex space-x-4 mt-[15px] ">
            <Link href="https://www.facebook.com/ferozkhan" target="_blank" rel="noopener noreferrer" className="border border-white px-[4px] py-[4px] w-[40px] h-[40px]">
              <Image src="/assets/icons/facebook.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
            </Link>
            <Link href="https://www.youtube.com/@ferozkhan" target="_blank" rel="noopener noreferrer" className="border border-white px-[4px] py-[4px] w-[40px] h-[40px]">
              <Image src="/assets/icons/youtube.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
            </Link>
            <Link href="https://www.instagram.com/ferozkhan_official/" target="_blank" rel="noopener noreferrer" className="border border-white px-[4px] py-[4px] w-[40px] h-[40px]">
              <Image src="/assets/icons/instagram.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
            </Link>
            <Link href="https://www.linkedin.com/company/ferozkhan" target="_blank" rel="noopener noreferrer" className="border border-white px-[4px] py-[4px] w-[40px] h-[40px]">
              <Image src="/assets/icons/linkedin.png" width={30} height={30} alt="Facebook" className="h-[30px] w-[30px]" />
            </Link>
          
          </div>
        </div>

        <div className="flex flex-col ">
          <h3 className="text-white font-orbitron text-[20px] font-normal mb-4">LINKS</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline text-white font-jura text-[13px] font-bold">
              Home
              </Link>
            </li>
            <li>
              <Link href="/experince" className="hover:underline text-white font-jura text-[13px] font-bold">
              About us
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-white font-jura text-[13px] font-bold">
              Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-white font-jura text-[13px] font-bold">
              Testimonial
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-white font-jura text-[13px] font-bold">
              Contact us
              </Link>
            </li>
          </ul>
        </div>


        <div className="flex flex-col">
          <h3 className="text-white font-orbitron text-[20px] font-normal mb-4">LOCATION</h3>
          <div className=''>
            <div className='mb-[10px]'>
            <h3 className='text-white font-jura text-[13px] font-bold '>Address:</h3>
            <p className='text-white font-jura text-[13px] font-bold '>Dubai Production City - Dubai, UAE</p>
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
            <p className='text-white font-jura text-[13px] font-bold '>+971 50 xxxxxxxx</p>
            </div>
            </div>
            <div className='mt-[10px]'>
            <div className='flex'>
                <Image src="/assets/images/email.png" alt="alt" height={12} width={12} className='w-[9px] h-[9px] mt-[5px]'/>
                <p className='text-white font-jura text-[13px] font-bold ml-1'>Email</p>
            </div>
            <p className='text-white font-jura text-[13px] font-bold '>ferozkhan2720@ferozkhan.ae</p>
            </div>
          </div>
          
      </div>
      <div className=' mt-[60px] container mx-auto'>
        <div className=' md:flex justify-between'>
        <div>
            <p className='text-white font-jura text-[11px] md:text-[13px] font-bold opacity-60'>All rights reserved 2024 © FEROZ KHAN TRANSPORT</p>
            </div>
        </div>
        
      </div>

    </footer>
  );
};

export default Footer;
