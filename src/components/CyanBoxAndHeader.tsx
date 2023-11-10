import * as React from 'react';
import { useEffect, useState } from 'react';
import { CgMouse } from 'react-icons/cg';

import Header from '@/components/Header';
import MainClaim from '@/components/MainClaim';

export const cyanBoxWidth = 1300;
const cyanBoxHeight = 850;
const offsetTop = cyanBoxHeight - 160;
export default function CyanBoxAndHeader() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Start increasing opacity once offsetTop is reached
      if (scrollTop >= offsetTop) {
        // The denominator (500 in this case) controls how quickly the opacity changes
        const newOpacity = Math.min(1, (scrollTop - offsetTop) / 500);
        setOpacity(newOpacity);
      } else {
        setOpacity(0);
      }
    };

    handleScroll();
    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky -top-[${offsetTop}px]`}>
      <div className='flex w-full justify-center'>
        <div
          className={`bg-primary-cyan custom-angled-rectangle-animated flex h-[${cyanBoxHeight}px] w-[${cyanBoxWidth}px] flex-col justify-center`}
        >
          <Header className='absolute top-0' />
          {opacity > 0 && (
            <Header opacity={opacity} className='fixed top-0 mt-5' />
          )}
          <div className='flex h-full w-full flex-col justify-center px-28'>
            <MainClaim />
            <div
              className={`absolute bottom-40 flex max-w-[${cyanBoxWidth}px] flex-col items-center gap-4 text-white`}
            >
              <div className='text-xs font-light [writing-mode:vertical-lr]'>
                WHAT WE DO
              </div>
              <CgMouse size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
