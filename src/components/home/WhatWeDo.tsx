export default function WhatWeDo() {
  return (
    <div className='flex w-full justify-center px-10 py-14 lg:py-32'>
      <div className='flex flex-col items-start gap-6 lg:flex-row lg:gap-10'>
        <h1 className='whitespace-nowrap'>What We Do</h1>
        <div className='max-w-[430px] text-xl font-normal'>
          With extensive experience and a commitment to transparent and flexible
          collaboration, we deliver tailored solutions to meet our clients'
          unique needs. Our expertise focuses on{' '}
          <span className='font-semibold'>AI Consulting</span>,{' '}
          <span className='font-semibold'>Full-Stack Development</span> and{' '}
          <span className='font-semibold'>Software Architecture</span>. <br />{' '}
          <br /> In addition, we consult in the specialized areas of{' '}
          <span className='font-semibold'>Blockchain</span>, and{' '}
          <span className='font-semibold'>Cloud-Native Computing</span>.
        </div>
      </div>
    </div>
  )
}
