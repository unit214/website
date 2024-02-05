import TextEllipsis from '~/svg/text-ellipsis.svg'
import TextUnderline from '~/svg/text-underline.svg'
import TextUnderlineShort from '~/svg/text-underline-short.svg'

function TailoredTechSolutions() {
  return (
    <h1 className='mt-10 lg:mt-0'>
      <span className='relative'>
        Tailored{' '}
        <TextEllipsis className='absolute -left-3.5 -top-2.5 w-[135px]' />
      </span>
      tech solutions
      <br />
      fostering{' '}
      <span className='relative hidden lg:inline-flex'>
        growth and collaboration.
        <TextUnderline className='absolute -bottom-1.5 left-0 w-[350px]' />
      </span>
      <span className='relative lg:hidden'>
        growth and
        <TextUnderlineShort className='absolute -bottom-1.5 left-0 w-[155px]' />
      </span>
      <br className='lg:hidden' />
      <span className='relative lg:hidden'>
        collaboration.
        <TextUnderlineShort className='absolute -bottom-1.5 left-0 w-[185px]' />
      </span>
    </h1>
  )
}

function Mission() {
  return (
    <div className='flex flex-col gap-5'>
      <h1>Our Mission</h1>
      <div className='max-w-[430px] text-xl font-normal'>
        We provide creative, innovative consulting and high-quality software
        engineering tailored to our clients. <br /> <br /> Together, we achieve
        this by cultivating an open and sustainable environment that enables
        everyone to <span className='font-semibold'>collaborate</span>,{' '}
        <span className='font-semibold'>grow</span> and{' '}
        <span className='font-semibold'>excel</span>.
      </div>
    </div>
  )
}
export default function OurMission() {
  return (
    <div className='flex w-full justify-center bg-neutral-100 px-10 py-14 lg:py-32'>
      <div className='flex flex-col gap-28 lg:flex-row lg:items-center lg:gap-20'>
        <TailoredTechSolutions />
        <Mission />
      </div>
    </div>
  )
}
