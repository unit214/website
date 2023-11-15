export function WhatWeDo() {
  return (
    <div className='flex h-[500px] w-full items-center justify-center px-10'>
      <div className='flex flex-wrap items-start gap-6 lg:flex-nowrap lg:gap-10'>
        <h1 className='whitespace-nowrap'>What We Do</h1>
        <div className='font-primary max-w-[430px] text-xl font-light'>
          With our experience as well as our transparent and flexible work, we
          always meet our clients' needs by providing{' '}
          <span className='font-semibold'>Full-Stack Development</span>,{' '}
          <span className='font-semibold'>Software Architecture</span> and{' '}
          <span className='font-semibold'>IT Consulting</span>. <br /> <br /> In
          addition, we consult in the specialized areas of{' '}
          <span className='font-semibold'>Blockchain</span>,{' '}
          <span className='font-semibold'>Machine Learning</span> and{' '}
          <span className='font-semibold'>Cloud-Native Computing</span>.
        </div>
      </div>
    </div>
  );
}
