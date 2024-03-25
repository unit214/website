import { notFound } from 'next/navigation'

import ClientRedirect from '@/components/ClientRedirect'
import NextLink from '@/components/NextLink'

import { teamMembers } from '@/constant/teamMembers'

type MeetTeamMemberProps = {
  params: {
    calendarRedirect: string
  }
}
export function generateStaticParams() {
  return teamMembers
    .map((teamMember) => ({
      calendarRedirect: teamMember.calendarRedirectSegment,
    }))
    .filter((url) => !!url)
}

export default function MeetTeamMember({
  params: { calendarRedirect },
}: MeetTeamMemberProps) {
  const teamMember = teamMembers.find(
    (member) => member.calendarRedirectSegment === calendarRedirect,
  )
  if (!teamMember || !teamMember.calendarLink) {
    notFound()
  } else {
    return (
      <>
        <div className='mt-20 flex justify-center text-lg'>
          <div>
            The page you were on is trying to send you to{' '}
            <NextLink className='text-blue-500' href={teamMember.calendarLink!}>
              {teamMember.calendarLink!}
            </NextLink>
            .
          </div>
        </div>
        <ClientRedirect url={teamMember.calendarLink!} />
      </>
    )
  }
}
