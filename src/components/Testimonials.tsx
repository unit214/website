import { useEffect, useState } from 'react';

import { getRandomElements } from '@/lib/utils';

import NextImage from '@/components/NextImage';

import { Testimonial } from '@/constant/models';
import { TESTIMONIAL_LOGOS, TESTIMONIALS } from '@/constant/testimonials';

function TestimonialSectionAmberBox() {
  return (
    <div className='bg-primary-amber custom-angled-rectangle-amber-testimonials absolute left-0 h-[700px] w-[80%] lg:w-[500px]' />
  );
}

function TestimonialText({ testimonial }: { testimonial: Testimonial }) {
  return (
    <span className='font-primary w-60 text-left text-xs font-light'>
      <span className='font-medium'>— {testimonial.source}</span>
      <br />
      <br />
      <p>"{testimonial.text}"</p>
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
  const [randomTestimonials, setRandomTestimonials] = useState<Testimonial[]>(
    []
  );

  useEffect(() => {
    const random: Testimonial[] = getRandomElements(TESTIMONIALS, 3);
    setRandomTestimonials(random);
  }, []);

  return (
    <div className='relative flex h-[700px] w-full items-center justify-center lg:max-w-[1300px]'>
      <TestimonialSectionAmberBox />
      <div className='bg-primary-red custom-angled-rectangle-red-testimonials-mobile lg:custom-angled-rectangle-red-testimonials h-[600px] w-full px-40 lg:h-[600px] lg:max-w-[1200px]'>
        <div className='flex h-full flex-col justify-center gap-12 text-white'>
          <h1>
            Why people love
            <br />
            to work with us.
          </h1>
          <div className='flex justify-between gap-5'>
            {randomTestimonials.map((testimonial, index) => (
              <TestimonialText key={index} testimonial={testimonial} />
            ))}
          </div>
          <div
            className='gradient-mask-r-90 scrollbar-none flex max-w-full gap-5 overflow-y-hidden'
            style={{ overflow: '-moz-scrollbars-none' }}
          >
            {TESTIMONIAL_LOGOS.map((logo, index) => (
              <TestimonialLogo key={index} imageSrc={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
