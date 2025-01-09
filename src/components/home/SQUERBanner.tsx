import { FaArrowRight } from 'react-icons/fa6'

import NextLink from '@/components/NextLink'

import SQUERLogo from '~/svg/squer.svg'
export default function SQUERBanner() {
  return (
    <div className='flex h-16 w-full flex-row justify-center bg-squer-dark-blue'>
      <div className='flex w-[1300px] flex-row items-center justify-between gap-4 px-5 lg:px-16'>
        <SQUERLogo className='w-48' />
        <div className='text-sm text-white lg:text-xl'>
          Very excited to announce that we are joining SQUER.
        </div>
        <NextLink href='https://www.squer.io/' isExternalLink>
          <div className='flex h-9 w-fit items-center justify-center gap-1.5 rounded-full bg-black px-4 transition-opacity duration-200 ease-in hover:opacity-80'>
            <FaArrowRight className='text-white' />
            <span className='hidden text-sm font-semibold text-white underline lg:flex'>
              FIND US ON SQUER.IO
            </span>
          </div>
        </NextLink>
      </div>
    </div>
  )
}
