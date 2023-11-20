import { FiMail } from 'react-icons/fi';

import { cn } from '@/lib/utils';

import NextImage from '@/components/NextImage';
import NextLink from '@/components/NextLink';

function Logo() {
  return (
    <NextImage
      src='/svg/unit214_bw.svg'
      alt='unit214-logo'
      width={120}
      height={0}
      useSkeleton
    />
  );
}

function ContactButtonContent() {
  return (
    <div className='flex h-9 w-fit items-center justify-center gap-1.5 rounded-full bg-white px-4'>
      <span className='font-primary hidden text-sm font-semibold lg:flex'>
        Let's get in touch!
      </span>
      <FiMail />
    </div>
  );
}

export default function Header({
  opacity,
  className,
  clickOnLogoBehaviour,
  clickOnContactBehaviour,
}: {
  opacity?: number;
  className?: string;
  clickOnLogoBehaviour: 'scrollUp' | 'goHome';
  clickOnContactBehaviour: 'scrollDown' | 'sendMail';
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
          'mt-5 flex max-h-[100px] w-full items-start justify-between px-5 lg:mt-12 lg:max-w-[1300px] lg:px-16',
          className
        )}
      >
        {clickOnLogoBehaviour === 'scrollUp' && (
          <button onClick={scrollUp}>
            <Logo />
          </button>
        )}
        {clickOnLogoBehaviour === 'goHome' && (
          <NextLink href='/'>
            <Logo />
          </NextLink>
        )}
        {clickOnContactBehaviour === 'scrollDown' && (
          <button onClick={scrollDown}>
            <ContactButtonContent />
          </button>
        )}
        {clickOnContactBehaviour === 'sendMail' && (
          <NextLink href='mailto:contact@unit214.de' className='no-underline'>
            <ContactButtonContent />
          </NextLink>
        )}
      </div>
    </div>
  );
}
