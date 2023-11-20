import { ReactElement } from 'react';

import { cn } from '@/lib/utils';

import NextImage from '@/components/NextImage';
import NextLink from '@/components/NextLink';

function ExternalReferences({
  linkedInLink,
  gitHubLink,
  size,
  className,
}: {
  linkedInLink: string;
  gitHubLink: string;
  size: number;
  className?: string;
}) {
  return (
    <div className={cn('gap-1', className)}>
      <NextLink href={linkedInLink} isExternalLink>
        <NextImage
          src='/svg/linkedin.svg'
          alt='linkedin-logo'
          width={size}
          height={size}
          useSkeleton
        />
      </NextLink>
      <NextLink href={gitHubLink} isExternalLink>
        <NextImage
          src='/svg/github.svg'
          alt='github-logo'
          width={size}
          height={size}
          useSkeleton
        />
      </NextLink>
    </div>
  );
}

function EmployeeField({
  imgSource,
  name,
  description,
  linkedInLink,
  gitHubLink,
}: {
  imgSource: string;
  name: string;
  description: ReactElement;
  linkedInLink: string;
  gitHubLink: string;
}) {
  return (
    <div className='flex items-start justify-between gap-5 lg:items-center lg:justify-start lg:gap-16'>
      <NextImage
        src={imgSource}
        alt='logo'
        width={85}
        height={0}
        className='hidden lg:inline-flex'
        useSkeleton
      />
      <div className='flex flex-col gap-2.5'>
        <div className='flex items-center gap-2'>
          <div className='font-primary text-xl font-semibold'>{name}</div>
          <ExternalReferences
            linkedInLink={linkedInLink}
            gitHubLink={gitHubLink}
            size={16}
            className='hidden lg:flex'
          />
        </div>
        <span className='font-primary text-xs font-light'>{description}</span>
      </div>
      <ExternalReferences
        linkedInLink={linkedInLink}
        gitHubLink={gitHubLink}
        size={25}
        className='flex lg:hidden'
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
          <EmployeeField
            imgSource='/svg/who-we-are-tom.svg'
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
          <EmployeeField
            imgSource='/svg/who-we-are-keno.svg'
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
          <EmployeeField
            imgSource='/svg/who-we-are-philipp.svg'
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
          <EmployeeField
            imgSource='/svg/who-we-are-timo.svg'
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
