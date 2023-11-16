import { useEffect, useState } from 'react';

import { getRandomElements, isMobile } from '@/lib/utils';

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
    <span className='font-primary text-left text-xs font-light lg:w-60'>
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
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    const random: Testimonial[] = getRandomElements(TESTIMONIALS, 3);
    setRandomTestimonials(random);

    if (isMobile()) {
      const changeText = () => {
        setOpacity(0);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
          setOpacity(100);
        }, 700); // fade duration
      };

      const timer = setInterval(changeText, 5000 + 700); // Time to show text + fade-out duration

      return () => clearInterval(timer);
    }
  }, []);

  return (
    <div className='relative flex h-[700px] w-full items-center justify-center lg:max-w-[1300px]'>
      <TestimonialSectionAmberBox />
      <div className='bg-primary-red custom-angled-rectangle-red-testimonials-mobile lg:custom-angled-rectangle-red-testimonials h-[600px] w-full lg:h-[600px] lg:max-w-[1200px] '>
        <div className='flex h-full flex-col justify-between gap-5 py-20 text-white'>
          <h1 className='mx-10 lg:mx-40'>
            Why people love
            <br />
            to work with us.
          </h1>
          <div className='hidden justify-between gap-5 lg:mx-40 lg:flex'>
            {randomTestimonials.map((testimonial, index) => (
              <TestimonialText key={index} testimonial={testimonial} />
            ))}
          </div>
          <div
            className='mx-10 flex transition-opacity duration-700 ease-in-out lg:hidden'
            style={{ opacity: opacity }}
          >
            <TestimonialText testimonial={TESTIMONIALS[index]} />
          </div>
          <div
            className='gradient-mask-r-90 scrollbar-none flex max-w-full gap-5 overflow-y-hidden lg:mx-40 '
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
