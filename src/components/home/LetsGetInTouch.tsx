import { FiMail } from 'react-icons/fi'
import { SiGooglecalendar } from 'react-icons/si'

import NextLink from '@/components/NextLink'

import { contactEmail } from '@/constant/contact'
import { teamMembers } from '@/constant/teamMembers'

export default function LetsGetInTouch() {
  return (
    <div className='mb-8 mt-14 flex flex-col items-center gap-5 lg:mb-28 lg:mt-24'>
      <NextLink
        className='flex w-fit items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-white no-underline transition-opacity duration-200 ease-in hover:opacity-70 lg:px-8'
        href={`mailto:${contactEmail}`}
      >
        <span className='text-2xl font-semibold lg:text-3xl'>
          Let's get in touch!
        </span>
        <FiMail size={32} />
      </NextLink>
      <NextLink
        className='flex items-center gap-1 lg:hidden'
        href={
          teamMembers.find((m) => m.name === 'Tom Graupner')!
            .calendarRedirectSegment!
        }
        isExternalLink
      >
        Book a meeting with us! <SiGooglecalendar />
      </NextLink>
    </div>
  )
}
