'use client';
import { Metadata } from 'next';

import NextImage from '@/components/NextImage';
import NextLink from '@/components/NextLink';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <NextImage
            src='/svg/unit214.svg'
            alt='unit214-logo'
            width={120}
            height={0}
            useSkeleton
          />
          <h1 className='mb-8 mt-8 text-4xl lg:text-6xl'>Page Not Found</h1>
          <NextLink href='/'>Back to home</NextLink>
        </div>
      </section>
    </main>
  );
}
