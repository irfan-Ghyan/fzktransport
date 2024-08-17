'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../../../../public/assets/images/logo.png';
// import Dropdown from '../dropdwon/Dropdown';
import closenavbar from '../../../../public/assets/icons/navbarclose.png';

const Navbar = ({ isTopBannerVisible }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-opacity-0');
  const menuRef = useRef(null);

  const hiddenRoutes = ['/experience', '/dome', '/corporateevents', '/education'];
  const isHiddenRoute = hiddenRoutes.includes(pathname);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100 && isHiddenRoute) {
      setNavbarBg('bg-[#11072C] lg:bg-[#11072C]');
    } else if (window.scrollY > window.innerHeight) {
      setNavbarBg('bg-[#11072C] lg:bg-[#11072C]');
    } else {
      setNavbarBg('bg-opacity-0');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, isHiddenRoute]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed ${isTopBannerVisible ? 'top-0' : 'top-0'} w-full z-40 transition-all duration-300 px-[10px] md:px-[20px] lg:px-[20px] xl:px-[40px] py-[5px] ${navbarBg} navbar`}>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <Link href="/" onClick={closeMenu}>
            <Image src={logo} alt="Logo" width={155} height={42.15} className="w-[135px] h-[32px] lg:w-[185px] xl:w-[185px] lg:h-[52px] xl:h-[52px]" />
          </Link>
        </div>
        <div className="flex-grow hidden xl:flex justify-center space-x-6 md:space-x-5 lg:space-x-5">
          <Link href="/" className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#ff0a01]" onClick={closeMenu}>
            HOME
          </Link>
          <Link href="/" className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#ff0a01]" onClick={closeMenu}>
            ABOUT US
          </Link>
          <Link href="/" className="text-white text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold font-jura hover:text-[#ff0a01]" onClick={closeMenu}>
            SERVICES
          </Link>
          <Link href="/" className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#ff0a01]" onClick={closeMenu}>
            TESTIMONIAL
          </Link>
          <Link href="/" className="text-white font-jura text-[12px] md:text-[14px] lg:text-[14px] font-normal lg:font-bold hover:text-[#ff0a01]" onClick={closeMenu}>
           CONTACT US
          </Link>

        </div>
        <div className="hidden xl:flex items-center w-[145px] md:w-[192px] lg:w-[192px] h-[44px]">
            <Link href="/explore" className="cursor-pointer px-2 py-[7px] lg:py-[13px] md:py-[13px] font-jura font-normal md:font-bold bg-gradient-to-r from-[#F56545] to-[#ff0a01] text-white ml-2 transition duration-300 flex items-center justify-center relative overflow-hidden rounded-full ">
                <span className=''>GET A QUOTE</span>
              </Link>
        </div>
        <div className="xl:hidden flex-grow flex justify-center w-[145px] md:w-[192px] lg:w-[192px] h-[44px] px-4">
              <Link href="/explore" className="cursor-pointer px-2 py-[7px] lg:py-[13px] md:py-[13px] font-jura font-normal md:font-bold bg-gradient-to-r from-[#F56545] to-[#ff0a01] text-white ml-2 transition duration-300 flex items-center justify-center relative overflow-hidden rounded-full ">
                <span className=''>GET A QUOTE</span>
              </Link>
        </div>
        <div className="xl:hidden">
          <button onClick={toggleMenu} className="text-white text-xl">
            {menuOpen ? <Image src={closenavbar} className="h-[20px] w-[20px]" alt="close" /> : '☰'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div ref={menuRef} className="xl:hidden bg-[#ff0a01] w-[50%] absolute right-0 top-full mx-4">
          <div className="flex flex-col items-start px-4 py-4">
            <Link href="/experience" className="block w-full text-left px-4 py-4 text-white font-jura text-[14px] font-bold hover:text-[#ff0a01]" onClick={closeMenu}>
              HOME
            </Link>
            <Link href="/" className="block w-full text-left px-4 py-4 text-white font-jura text-[14px] hover:text-[#ff0a01]" onClick={closeMenu}>
              ABOUT US
            </Link>
            <Link href="/" className="block w-full text-left px-4 py-4 text-white font-jura font-bold text-[14px] hover:text-[#ff0a01]" onClick={closeMenu}>
              SERVICES
            </Link>
            <Link href="/" className="block w-full text-left px-4 py-4 text-white text-[14px] font-bold font-jura hover:text-[#ff0a01]" onClick={closeMenu}>
             TESTIMONIAL
            </Link>
            <Link href="/" className="block w-full text-left px-4 py-4 text-white font-jura text-[14px] font-bold hover:text-[#ff0a01]" onClick={closeMenu}>
              CONTACT US
            </Link>
            {/* <Link href="/other" className="block w-full text-left px-4 py-8 text-white font-jura font-bold text-[14px] hover:text-[#A72CCF]" onClick={closeMenu}>
              OTHER
            </Link>
            <Dropdown /> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
