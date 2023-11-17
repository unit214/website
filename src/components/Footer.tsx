import Link from 'next/link';
import { FiMail } from 'react-icons/fi';

import NextImage from '@/components/NextImage';

export default function Footer() {
  return (
    <div className='relative flex w-full justify-center px-10 pb-4 pt-14 lg:max-w-[1300px] lg:pt-16'>
      <div className='flex w-[430px] flex-col items-center gap-28 lg:w-full lg:gap-48'>
        <Link
          className='flex w-fit items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-white lg:px-8'
          href='mailto:contact@unit214.de'
        >
          <span className='font-primary text-2xl font-semibold lg:text-3xl'>
            Let's get in touch!
          </span>
          <FiMail size={32} />
        </Link>
        {/* Todo add Link */}
        <span className='font-primary text-xs text-neutral-700'>Imprint</span>
        <NextImage
          alt='dots'
          src='/svg/grey-dots.svg'
          width={130}
          height={0}
          className='absolute bottom-4 right-20 hidden lg:inline-flex'
        />
        <NextImage
          alt='dots'
          src='/svg/grey-dots.svg'
          width={70}
          height={0}
          className='absolute bottom-4 right-4 lg:hidden'
        />
      </div>
    </div>
  );
}
