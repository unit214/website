import { notFound } from 'next/navigation'

import ClientRedirect from '@/components/ClientRedirect'
import NextLink from '@/components/NextLink'

import { teamMembers } from '@/constant/teamMembers'

type MeetTeamMemberProps = {
  params: {
    calendarRedirect: string
  }
}
export function generateStaticParams(): { calendarRedirect: string }[] {
  return teamMembers.reduce(
    (acc, teamMember) => {
      if (teamMember.calendarRedirectSegment) {
        return [
          ...acc,
          ...teamMember.calendarRedirectSegment.map((calendarRedirect) => ({
            calendarRedirect,
          })),
        ]
      }
      return acc
    },
    [] as { calendarRedirect: string }[],
  )
}

export default function MeetTeamMember({
  params: { calendarRedirect },
}: MeetTeamMemberProps) {
  const teamMember = teamMembers.find(
    // casting to ReadonlyArray<string> because TypeScript rejects searching in a known content with a generic string
    // see https://stackoverflow.com/questions/56565528/typescript-const-assertions-how-to-use-array-prototype-includes
    (member) =>
      (member.calendarRedirectSegment as ReadonlyArray<string>)?.includes(
        calendarRedirect,
      ),
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
