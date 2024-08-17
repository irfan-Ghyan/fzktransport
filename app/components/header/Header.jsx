
'use client';

import { usePathname } from 'next/navigation';

import Navbar from './navbar/Navbar';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);

  const hiddenRoutes = [
    '/ABOUT US',
    '/experience',
    '/dome',
    '/education',
    '/corporateevents',
  ];

  const shouldHideBannersAndBackground = hiddenRoutes.includes(pathname);

  useEffect(() => {
    if (shouldHideBannersAndBackground) {
      setIsTopBannerVisible(false);
    }
  }, [pathname, shouldHideBannersAndBackground]);



  return (
    <div className={`max-w-full overflow-hidden ${shouldHideBannersAndBackground ? 'h-[100px]' : 'bg-header-bg bg-cover bg-center min-h-screen'} text-white flex flex-col justify-between`}>
      <div className={`xl:py-[32px]}`}>
        {!shouldHideBannersAndBackground  }
        <Navbar isTopBannerVisible={isTopBannerVisible} />
      </div>
      <div>
        {!shouldHideBannersAndBackground }
        {!shouldHideBannersAndBackground && (
          <div className=' 2xl:pl-[22rem] 2xl:pr-[23rem] pb-20'>
            <div>
              <p className="text-[14px] md:text-[18px] lg:text-[18px] mb-4 font-jura font-medium lg:font-medium">
              Select your favored Bus, timetable, and objective effortlessly. <br/>Secure your booking on the web now for a consistent encounter.
              </p>
            </div>
            <div className='w-[145px] md:w-[192px] lg:w-[192px] h-[44px]'>
              <Link href="/explore" className="cursor-pointer px-2 py-[7px] lg:py-[13px] md:py-[13px] font-jura font-normal md:font-bold bg-gradient-to-r from-[#F56545] to-[#ff0a01] text-white ml-2 transition duration-300 flex items-center justify-center relative overflow-hidden rounded-full ">
                <span className=''>EXPLORE MORE</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

