import { FC, ReactElement, SVGProps } from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiGooglecalendar } from 'react-icons/si'

import { cn } from '@/lib/utils'

import NextLink from '@/components/NextLink'

import { teamMembers } from '@/constant/teamMembers'

function ExternalReferences({
  linkedInLink,
  gitHubLink,
  className,
  classNameLogo,
}: {
  linkedInLink: string
  gitHubLink: string
  className: string
  classNameLogo: string
}) {
  return (
    <div className={cn('gap-1', className)}>
      <NextLink href={linkedInLink} isExternalLink>
        <IoLogoLinkedin className={classNameLogo} />
      </NextLink>
      <NextLink href={gitHubLink} isExternalLink>
        <IoLogoGithub className={classNameLogo} />
      </NextLink>
    </div>
  )
}

function TeamMemberField({
  Logo,
  name,
  description,
  linkedInLink,
  gitHubLink,
  calendarLink,
}: {
  Logo: FC<SVGProps<SVGSVGElement>>
  name: string
  description: ReactElement
  linkedInLink: string
  gitHubLink: string
  calendarLink?: string
}) {
  return (
    <div className='flex items-start justify-between gap-5 lg:items-center lg:justify-start lg:gap-16'>
      <Logo className='hidden w-[85px] lg:inline-flex' />
      <div className='flex flex-col gap-2.5'>
        <div className='flex items-center gap-2'>
          <div className='text-xl font-semibold'>{name}</div>
          <ExternalReferences
            linkedInLink={linkedInLink}
            gitHubLink={gitHubLink}
            className='hidden lg:flex'
            classNameLogo='w-4 h-4'
          />
        </div>
        <span className='text-sm font-light'>{description}</span>
        {calendarLink && (
          <NextLink
            className='flex items-center gap-1 text-sm font-light'
            href={calendarLink}
            isExternalLink
          >
            Book a meeting with me! <SiGooglecalendar />
          </NextLink>
        )}
      </div>
      <ExternalReferences
        linkedInLink={linkedInLink}
        gitHubLink={gitHubLink}
        className='flex lg:hidden'
        classNameLogo='w-6 h-6'
      />
    </div>
  )
}

export default function WhoWeAre() {
  return (
    <div className='flex w-full justify-center px-10 py-14 lg:py-32'>
      <div className='flex w-[430px] flex-col gap-10 lg:w-fit lg:flex-row lg:items-start lg:gap-20'>
        <h1 className='whitespace-nowrap'>Who We Are</h1>
        <div className='flex flex-col gap-10'>
          {teamMembers.map((teamMember, key) => (
            <TeamMemberField
              Logo={teamMember.logo}
              name={teamMember.name}
              description={teamMember.description}
              linkedInLink={teamMember.linkedInLink}
              gitHubLink={teamMember.gitHubLink}
              calendarLink={teamMember.calendarRedirectSegment}
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
