import { ReactElement } from 'react';

import { cn } from '@/lib/utils';

import NextLink from '@/components/NextLink';

import GitHubLogo from '~/svg/github.svg';
import LinkedInLogo from '~/svg/linkedin.svg';
import KenoLogo from '~/svg/who-we-are-keno.svg';
import PhilippLogo from '~/svg/who-we-are-philipp.svg';
import TimoLogo from '~/svg/who-we-are-timo.svg';
import TomLogo from '~/svg/who-we-are-tom.svg';

function ExternalReferences({
  linkedInLink,
  gitHubLink,
  className,
  classNameLogo,
}: {
  linkedInLink: string;
  gitHubLink: string;
  className: string;
  classNameLogo: string;
}) {
  return (
    <div className={cn('gap-1', className)}>
      <NextLink href={linkedInLink} isExternalLink>
        <LinkedInLogo className={cn(classNameLogo)} />
      </NextLink>
      <NextLink href={gitHubLink} isExternalLink>
        <GitHubLogo className={cn(classNameLogo)} />
      </NextLink>
    </div>
  );
}

function TeamMemberField({
  logo,
  name,
  description,
  linkedInLink,
  gitHubLink,
}: {
  logo: ReactElement;
  name: string;
  description: ReactElement;
  linkedInLink: string;
  gitHubLink: string;
}) {
  return (
    <div className='flex items-start justify-between gap-5 lg:items-center lg:justify-start lg:gap-16'>
      {logo}
      <div className='flex flex-col gap-2.5'>
        <div className='flex items-center gap-2'>
          <div className='font-primary text-xl font-semibold'>{name}</div>
          <ExternalReferences
            linkedInLink={linkedInLink}
            gitHubLink={gitHubLink}
            className='hidden lg:flex'
            classNameLogo='w-4 h-4'
          />
        </div>
        <span className='font-primary text-sm font-light'>{description}</span>
      </div>
      <ExternalReferences
        linkedInLink={linkedInLink}
        gitHubLink={gitHubLink}
        className='flex lg:hidden'
        classNameLogo='w-6 h-4'
      />
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <div className='flex w-full justify-center px-10 py-14 lg:py-32'>
      <div className='flex w-[430px] flex-col gap-10 lg:w-fit lg:flex-row lg:items-start lg:gap-20'>
        <h1 className='whitespace-nowrap'>Who We Are</h1>
        <div className='flex flex-col gap-10'>
          <TeamMemberField
            logo={<TomLogo className='hidden w-[85px] lg:inline-flex' />}
            name='Tom Graupner'
            description={
              <>
                Co-Founder, Backend Developer
                <br />
                and Cloud-Native Specialist
              </>
            }
            linkedInLink='https://www.linkedin.com/in/tom-graupner/'
            gitHubLink='https://github.com/tgraupne'
          />
          <TeamMemberField
            logo={<KenoLogo className='hidden w-[85px] lg:inline-flex' />}
            name='Keno Dreßel'
            description={
              <>
                Co-Founder, Full-Stack Engineer
                <br />
                and Machine Learning Specialist
              </>
            }
            linkedInLink='https://www.linkedin.com/in/kenodressel/'
            gitHubLink='https://github.com/kenodressel'
          />
          <TeamMemberField
            logo={<PhilippLogo className='hidden w-[85px] lg:inline-flex' />}
            name='Philipp Piwowarsky'
            description={
              <>
                Co-Founder, Full-Stack Engineer
                <br />
                and Blockchain Specialist
              </>
            }
            linkedInLink='https://www.linkedin.com/in/philipp-piwowarsky/'
            gitHubLink='https://github.com/thepiwo'
          />
          <TeamMemberField
            logo={<TimoLogo className='hidden w-[85px] lg:inline-flex' />}
            name='Timo Erdelt'
            description={
              <>
                Full-Stack Engineer, Green IT, Functional
                <br />
                Programming, User-Centered Design
              </>
            }
            linkedInLink='https://www.linkedin.com/in/timoerdelt/'
            gitHubLink='https://github.com/tmrdlt'
          />
        </div>
      </div>
    </div>
  );
}
