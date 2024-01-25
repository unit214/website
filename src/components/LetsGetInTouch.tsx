import { FiMail } from 'react-icons/fi'
import { SiGooglecalendar } from 'react-icons/si'

import NextLink from '@/components/NextLink'

import { contactEmail } from '@/constant/contact'

export default function LetsGetInTouch() {
  return (
    <div className='flex flex-col mb-8 mt-14 lg:mb-28 lg:mt-24 gap-5 items-center'>
      <NextLink
        className='flex w-fit items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-white no-underline transition-opacity duration-200 ease-in hover:opacity-70 lg:px-8'
        href={`mailto:${contactEmail}`}
      >
        <span className='font-primary text-2xl font-semibold lg:text-3xl'>
          Let's get in touch!
        </span>
        <FiMail size={32} />
      </NextLink>
      <NextLink
        className='font-primary flex gap-1 items-center'
        href='https://calendar.app.google/KicY9pSkoYKqWzZP8'
        isExternalLink
      >
        Schedule a meeting with us! <SiGooglecalendar />
      </NextLink>
    </div>
  )
}
