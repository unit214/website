import * as React from 'react';

import NextImage from '@/components/NextImage';

export function OurMission() {
  return (
    <div className='-z-10 flex h-[800px] w-full items-center justify-center bg-neutral-100 px-10 lg:h-[700px] lg:w-[1300px]'>
      <div className='flex flex-col items-stretch gap-20 lg:flex-row lg:items-center'>
        <h1>
          <span className='relative'>
            Tailored{' '}
            <NextImage
              src='/svg/text-ellipsis.svg'
              useSkeleton
              alt='Icon'
              width='130'
              height='34'
              className='absolute -left-3 -top-3'
            />
          </span>
          tech solutions
          <br />
          fostering{' '}
          <span className='relative hidden lg:inline-flex'>
            growth and collaboration.
            <NextImage
              src='/svg/text-underline.svg'
              useSkeleton
              alt='Icon'
              width='350'
              height='34'
              className='absolute -bottom-2 left-0'
            />
          </span>
          <span className='relative inline-flex lg:hidden'>
            growth and
            <NextImage
              src='/svg/text-underline-short.svg'
              useSkeleton
              alt='Icon'
              width='155'
              height='34'
              className='absolute -bottom-2 left-0'
            />
          </span>
          <span className='relative flex lg:hidden'>
            collaboration.
            <NextImage
              src='/svg/text-underline-short.svg'
              useSkeleton
              alt='Icon'
              width='180'
              height='34'
              className='absolute -bottom-2 left-0'
            />
          </span>
        </h1>
        <div className='flex flex-col gap-5'>
          <h1>Our Mission</h1>
          <div className='font-primary max-w-[430px] text-xl font-light'>
            We provide creative, innovative consulting and high-quality software
            engineering tailored to our clients. <br /> <br /> Together, we
            achieve this by cultivating an open and sustainable environment that
            enables everyone to{' '}
            <span className='font-semibold'>collaborate</span>,{' '}
            <span className='font-semibold'>grow</span> and{' '}
            <span className='font-semibold'>excel</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
