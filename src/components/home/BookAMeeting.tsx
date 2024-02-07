'use client'

import { useState } from 'react'
import { LuCalendar } from 'react-icons/lu'

import LoadingSpinner from '@/components/LoadingSpinner'
import NextImage from '@/components/NextImage'

import TextUnderlineAmber from '~/svg/text-underline-amber.svg'

export default function BookAMeeting() {
  const [showIframe, setShowIframe] = useState(false)
  const [isLoadingIframe, setIsLoadingIframe] = useState(false)

  return (
    <div className='relative mt-32 hidden w-full lg:flex'>
      {/* Amber polygon */}
      <div className='book-a-meeting-polygon-amber absolute bottom-[-23px] right-[-14px]' />
      {/* Cyan polygon */}
      <div className='book-a-meeting-polygon-cyan'>
        <div className='flex flex-col items-start px-20 pb-10 pt-14'>
          <h1 className='relative text-white'>
            Book a meeting with us!
            <TextUnderlineAmber className='absolute -bottom-2 -left-2 w-[210px]' />
          </h1>
          {/* White polygon */}
          <div className='book-a-meeting-polygon-white relative mt-10'>
            {showIframe ? (
              <>
                {isLoadingIframe && <LoadingSpinner />}
                <iframe
                  src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ3g9vmEccJUpJnQJQxBslamcqyagVLNSAvIDhEl0aso388fWajgdfftoZBViyKYAlbokrh15se_?gv=true'
                  className='aspect-video h-full w-full'
                  onLoad={() => setIsLoadingIframe(false)}
                />
              </>
            ) : (
              <>
                <NextImage
                  alt=''
                  src='/images/book-a-meeting-preview.png'
                  className='opacity-10'
                  fill
                  style={{ objectFit: 'contain' }}
                />
                <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center'>
                  <button
                    className='flex h-9 w-fit items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-black px-4 text-white transition-opacity duration-200 ease-in hover:opacity-80'
                    onClick={() => {
                      setShowIframe(true)
                      setIsLoadingIframe(true)
                    }}
                  >
                    <span className='text-sm font-semibold'>
                      Show available dates
                    </span>
                    <LuCalendar size={14} />
                  </button>
                  <span className='mt-3 text-xs text-neutral-500'>
                    I hereby agree to the use of Google cookies.
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
