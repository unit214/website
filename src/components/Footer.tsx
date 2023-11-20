import NextImage from '@/components/NextImage';
import NextLink from '@/components/NextLink';

export default function Footer({ text, link }: { text: string; link: string }) {
  return (
    <div className='relative mt-20 flex w-full justify-center pb-4 lg:max-w-[1300px]'>
      <NextLink href={link} className='font-primary text-xs text-neutral-700'>
        {text}
      </NextLink>
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
  );
}
