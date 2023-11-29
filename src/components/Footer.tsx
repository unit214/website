import NextLink from '@/components/NextLink'

import GreyDots from '~/svg/grey-dots.svg'

export default function Footer({ text, link }: { text: string; link: string }) {
  return (
    <div className='relative mt-20 flex w-full justify-center pb-4 lg:max-w-[1300px]'>
      <NextLink href={link} className='font-primary text-xs text-neutral-700'>
        {text}
      </NextLink>
      <GreyDots className='absolute bottom-4 right-20 hidden w-[130px] lg:inline-flex' />
      <GreyDots className='absolute bottom-4 right-4 w-[70px] lg:hidden' />
    </div>
  )
}
