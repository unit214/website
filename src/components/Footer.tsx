import NextLink from '@/components/NextLink'

import GreyDots from '~/svg/grey-dots.svg'

export default function Footer() {
  return (
    <div className='relative mt-20 flex w-full justify-center pb-4 lg:max-w-[1300px]'>
      <div className='flex gap-4'>
        <NextLink href='/' className='text-xs text-neutral-700'>
          Home
        </NextLink>
        <NextLink href='/blog' className='text-xs text-neutral-700'>
          Blog
        </NextLink>
        <NextLink href='/imprint' className='text-xs text-neutral-700'>
          Imprint / Impressum
        </NextLink>
      </div>
      <GreyDots className='absolute bottom-4 right-20 hidden w-[130px] lg:inline-flex' />
      <GreyDots className='absolute bottom-4 right-4 w-[70px] lg:hidden' />
    </div>
  )
}
