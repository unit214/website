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
    <div
      style={{ opacity: opacity }}
      className={cn(
        `mt-12 flex max-h-[100px] w-full max-w-[1300px] items-start justify-between px-16`,
        className
      )}
    >
      <button onClick={scrollUp}>
        <NextImage
          src='/svg/unit214_bw.svg'
          useSkeleton
          alt='Icon'
          width='120'
          height='100'
        />
      </button>
      <div className='grow'></div>
      <Link
        className='flex h-9 w-44 items-center justify-center gap-1.5 rounded-2xl bg-white'
        href='mailto:contact@unit214.de'
      >
        <span className='text-sm font-semibold'>Let's get in touch!</span>
        <FiMail />
      </Link>
    </div>
  );
}
