import NextImage from '@/components/NextImage';

function AmberBoxTestimonials() {
  return (
    <div className='bg-primary-amber custom-angled-rectangle-amber-testimonials absolute left-0 h-[700px] w-[80%] lg:w-[500px]' />
  );
}

function TestimonialText({ author, text }: { author: string; text: string }) {
  return (
    <span className='font-primary w-60 text-left text-xs font-light'>
      <span className='font-medium'>— {author}</span>
      <br />
      <br />
      <p>"{text}"</p>
    </span>
  );
}

function TestimonialLogo({ imageSrc }: { imageSrc: string }) {
  return (
    <div className='flex h-24 w-60 shrink-0 items-center justify-center bg-white p-10 text-black'>
      <NextImage
        src={imageSrc}
        alt='logo'
        width='240'
        height='90'
        useSkeleton
      />
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className='relative flex h-[700px] w-full items-center justify-center lg:max-w-[1300px]'>
      <AmberBoxTestimonials />
      <div className='bg-primary-red custom-angled-rectangle-red-testimonials-mobile lg:custom-angled-rectangle-red-testimonials h-[600px] w-full px-40 lg:h-[600px] lg:max-w-[1200px]'>
        <div className='flex h-full flex-col justify-center gap-12 text-white'>
          <h1>
            Why people love
            <br />
            to work with us.
          </h1>
          <div className='flex justify-between gap-5'>
            <TestimonialText
              author='Spendit'
              text='Spendit and Unit 214 are collaborating with great success in different projects. Unit 214 delivered a scalable scala-microservice, provided an initial setup for our kubernetes setup, as well as supported our internal development team with their expertise. Overall their efforts exceeded our expectations.'
            />
            <TestimonialText
              author='Yanislav Malahov'
              text='The team at Unit 214 has a long and successful history of working with us, they have been a reliable partner in many different engineering challenges. Unit 214 has been a key resource for technical analysis, system architecture, project planning and full-stack blockchain development.'
            />
            <TestimonialText
              author='Mattes Groeger - CTO & Co-Founder of Atem.Earth'
              text='We enjoy working with Unit 214 a lot as they are able to build software end-to-end in a very independent and professional way, always managing expectations pro-actively. At the same time integrating them into our existing team was super smooth as well.'
            />
          </div>
          <div
            className='gradient-mask-r-90 scrollbar-none flex max-w-full gap-5 overflow-y-hidden'
            style={{ overflow: '-moz-scrollbars-none' }}
          >
            <TestimonialLogo imageSrc='/svg/logo-spendit.svg' />
            <TestimonialLogo imageSrc='/svg/logo-atem.svg' />
            <TestimonialLogo imageSrc='/png/logo-apeunit.png' />
          </div>
        </div>
      </div>
    </div>
  );
}
