import { LuCalendar } from 'react-icons/lu'

import NextImage from '@/components/NextImage'

import TextUnderlineAmber from '~/svg/text-underline-amber.svg'

export default function BookAMeeting() {
  return (
    <div className='relative mb-96 mt-96 w-full'>
      {/* Amber polygon */}
      <div className='book-a-meeting-polygon-amber absolute bottom-[-23px] right-0 lg:right-[-14px]' />
      {/* Cyan polygon */}
      <div className='book-a-meeting-polygon-cyan'>
        <div className='flex flex-col items-center pb-10 pt-14 lg:items-start lg:px-20'>
          <h1 className='relative mx-5 text-white lg:mx-0'>
            Book a meeting with us!
            <TextUnderlineAmber className='absolute -bottom-2 -left-2 w-[210px]' />
          </h1>
          {/* White polygon */}
          <div className='book-a-meeting-polygon-white relative mt-5 lg:mt-10'>
            <NextImage
              alt=''
              src='/images/book-a-meeting-preview.png'
              fill
              style={{ objectFit: 'contain' }}
            />
            <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center'>
              <button className='flex h-9 w-fit items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-black px-4 text-white transition-opacity duration-200 ease-in hover:opacity-80'>
                <span className='text-sm font-semibold'>
                  Show available dates
                </span>
                <LuCalendar size={14} />
              </button>
              <span className='mt-3 text-xs text-neutral-500'>
                I hereby agree to the use of Google cookies.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
