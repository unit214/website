import Link from 'next/link';
import * as React from 'react';
import { FiMail } from 'react-icons/fi';

import { cn } from '@/lib/utils';

import NextImage from '@/components/NextImage';

export default function Header({
  opacity,
  className,
}: {
  opacity?: number;
  className?: string;
}) {
  function scrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div>
      <div
        style={{ opacity: opacity }}
        className={cn(
          `mt-5 flex max-h-[100px] w-full items-start justify-between px-5 lg:mt-12 lg:max-w-[1300px] lg:px-16`,
          className
        )}
      >
        <button onClick={scrollUp}>
          <NextImage
            src='/svg/unit214_bw.svg'
            alt='unit214-logo'
            width='120'
            height='100'
            useSkeleton
          />
        </button>
        <div className='grow'></div>
        <Link
          className='flex h-9 items-center justify-center gap-1.5 rounded-2xl bg-white px-4'
          href='mailto:contact@unit214.de'
        >
          <span className='font-primary hidden text-sm font-semibold lg:flex'>
            Let's get in touch!
          </span>
          <FiMail />
        </Link>
      </div>
    </div>
  );
}
