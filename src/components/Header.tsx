import * as React from 'react';
import { FiMail } from 'react-icons/fi';

import NextImage from '@/components/NextImage';
export default function Header({ opacity }: { opacity?: number }) {
  return (
    <div
      style={{ opacity: opacity || 1 }}
      className='ml-16 mr-24 flex max-h-[100px] grow items-start justify-between'
    >
      <NextImage
        src='/svg/unit214_bw.svg'
        useSkeleton
        alt='Icon'
        width='120'
        height='100'
      />
      <button className='flex h-9 w-44 items-center justify-center gap-1.5 rounded-2xl bg-white '>
        <span className='text-sm font-semibold'>Let's get in touch!</span>
        <FiMail />
      </button>
    </div>
  );
}
