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
      behavior: 'smooth',
    });
  }

  function scrollDown() {
    window.scroll({
      top: document.body.scrollHeight,
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
            width={120}
            height={0}
            useSkeleton
          />
        </button>
        <div className='grow'></div>
        <button
          className='flex h-9 w-fit items-center justify-center gap-1.5 rounded-full bg-white px-4'
          onClick={scrollDown}
        >
          <span className='font-primary hidden text-sm font-semibold lg:flex'>
            Let's get in touch!
          </span>
          <FiMail />
        </button>
      </div>
    </div>
  );
}
