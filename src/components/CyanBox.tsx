import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { useDetectSticky } from '@/lib/utils';

import Header from '@/components/Header';
import MainClaim from '@/components/MainClaim';

export default function CyanBox() {
  const ref = useRef(null);
  const [isSticky] = useDetectSticky(ref);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 690) {
        // Adjust the denominator (500 in this case) to control how quickly the opacity changes
        const newOpacity = Math.min(1, (scrollTop - 690) / 500);
        setOpacity(newOpacity);
      } else {
        setOpacity(0);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Minus offset top = height of cyan box - height of bottom header + 1
    <div className='sticky -top-[691px]'>
      <div className='flex w-full justify-center'>
        <div className='bg-primary-cyan custom-angled-rectangle-animated flex h-[850px] w-[1300px] items-center'>
          <div className='flex h-full w-full flex-col justify-between pt-12'>
            <Header />
            <MainClaim />
            <div ref={ref} className='flex h-[160px] pt-5'>
              {isSticky && <Header opacity={opacity} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
