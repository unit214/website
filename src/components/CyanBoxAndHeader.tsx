import * as React from 'react';
import { useEffect, useState } from 'react';
import { CgMouse } from 'react-icons/cg';

import Header from '@/components/Header';
import MainClaim from '@/components/MainClaim';

const offsetTop = 690;
export default function CyanBoxAndHeader() {
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const [scrollDownButtonOpacity, setScrollDownButtonOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Start increasing opacity of header once offsetTop is reached
      if (scrollTop >= offsetTop) {
        setHeaderOpacity(Math.min(1, (scrollTop - offsetTop) / 150));
      } else {
        setHeaderOpacity(0);
      }
      // Start decreasing opacity of header before offsetTop is reached
      if (scrollTop < offsetTop) {
        setScrollDownButtonOpacity(Math.min(1, (offsetTop - scrollTop) / 150));
      } else {
        setScrollDownButtonOpacity(0);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollDown() {
    window.scroll({
      top: offsetTop + 150,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='sticky -top-[690px]'>
      <div className='flex w-full justify-center'>
        <div className='bg-primary-cyan custom-angled-rectangle-animated flex h-[850px] w-[1300px] flex-col justify-center'>
          <Header className='absolute top-0' />
          {headerOpacity > 0 && (
            <Header opacity={headerOpacity} className='fixed top-0 mt-5' />
          )}
          <div className='flex h-full w-full flex-col justify-center'>
            <MainClaim />
            {scrollDownButtonOpacity > 0 && (
              <button
                style={{ opacity: scrollDownButtonOpacity }}
                className='absolute bottom-12 flex max-w-[1300px] flex-col items-center gap-4 pl-24 text-white'
                onClick={scrollDown}
              >
                <div className='text-xs font-light [writing-mode:vertical-lr]'>
                  WHAT WE DO
                </div>
                <CgMouse size={40} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
