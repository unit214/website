import KenoLogo from '~/svg/who-we-are-keno.svg'
import PhilippLogo from '~/svg/who-we-are-philipp.svg'
import TimoLogo from '~/svg/who-we-are-timo.svg'
import TomLogo from '~/svg/who-we-are-tom.svg'
export const teamMembers = [
  {
    name: 'Keno Dreßel',
    logo: KenoLogo,
    description: (
      <>
        Co-Founder, Full-Stack Engineer
        <br />
        and AI Specialist
      </>
    ),
    linkedInLink: 'https://www.linkedin.com/in/kenodressel/',
    gitHubLink: 'https://github.com/kenodressel',
    calendarLink: 'https://calendar.app.google/vL9yUjz599Xcdx9q8',
    calendarRedirectSegment: ['meet-keno'],
  },
  {
    name: 'Tom Graupner',
    logo: TomLogo,
    description: (
      <>
        Co-Founder, Backend Developer
        <br />
        and Cloud-Native Specialist
      </>
    ),
    linkedInLink: 'https://www.linkedin.com/in/tom-graupner/',
    gitHubLink: 'https://github.com/tgraupne',
    calendarLink: 'https://calendar.app.google/KicY9pSkoYKqWzZP8',
    calendarRedirectSegment: ['meet-tom', 'meet-us'],
  },
  {
    name: 'Philipp Piwowarsky',
    logo: PhilippLogo,
    description: (
      <>
        Co-Founder, Full-Stack Engineer
        <br />
        and Blockchain Specialist
      </>
    ),
    linkedInLink: 'https://www.linkedin.com/in/philipp-piwowarsky/',
    gitHubLink: 'https://github.com/thepiwo',
    calendarLink: 'https://calendar.app.google/eJDr4qYncBod3xsi7',
    calendarRedirectSegment: ['meet-philipp'],
  },
  {
    name: 'Timo Erdelt',
    logo: TimoLogo,
    description: (
      <>
        Full-Stack Engineer, Green IT, Functional
        <br />
        Programming, User-Centered Design
      </>
    ),
    linkedInLink: 'https://www.linkedin.com/in/timoerdelt/',
    gitHubLink: 'https://github.com/tmrdlt',
    calendarLink: undefined,
    calendarRedirectSegment: [],
  },
] as const
