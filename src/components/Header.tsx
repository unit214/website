import * as React from 'react';
import { FiMail } from 'react-icons/fi';

import { cn } from '@/lib/utils';

import { cyanBoxWidth } from '@/components/CyanBoxAndHeader';
import NextImage from '@/components/NextImage';
export default function Header({
  opacity,
  className,
}: {
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      style={{ opacity: opacity }}
      className={cn(
        `mt-12 flex max-h-[100px] w-full max-w-[${cyanBoxWidth}px] items-start justify-between px-16`,
        className
      )}
    >
      <NextImage
        src='/svg/unit214_bw.svg'
        useSkeleton
        alt='Icon'
        width='120'
        height='100'
      />
      <div className='grow'></div>
      <button className='flex h-9 w-44 items-center justify-center gap-1.5 rounded-2xl bg-white'>
        <span className='text-sm font-semibold'>Let's get in touch!</span>
        <FiMail />
      </button>
    </div>
  );
}
