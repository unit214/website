import { CSSProperties, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { cn } from '@/lib/utils'

import NextImage from '@/components/NextImage'
import NextLink from '@/components/NextLink'

import { Testimonial } from '@/constant/models'
import { TESTIMONIALS } from '@/constant/testimonials'

function TestimonialSectionAmberBox() {
  return (
    <div className='bg-primary-amber custom-angled-rectangle-amber-testimonials-animated-mobile lg:custom-angled-rectangle-amber-animated-testimonials absolute left-0 h-[700px] w-[80%] lg:w-[500px]' />
  )
}

function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className='my-5 flex h-full min-h-[350px] w-full flex-col justify-around lg:flex-row lg:items-start lg:pt-14'>
      <div className='font-primary flex w-full flex-col items-start gap-4 text-left text-sm font-light lg:w-1/2'>
        <span>"{testimonial.text}"</span>
        <span className='font-medium'>
          — {testimonial.source}
          {testimonial.website && (
            <>
              {' '}
              <NextLink href={testimonial.website.url} isExternalLink>
                {testimonial.website.text}
              </NextLink>
            </>
          )}
        </span>
      </div>
      <div className='mb-5 flex lg:w-1/2 lg:justify-center'>
        {testimonial.logo && (
          <div
            className={cn(
              'flex h-24 w-60 shrink-0 items-center justify-center bg-white p-10 text-black',
              testimonial.website?.text === 'Unit A' && 'bg-black',
            )}
          >
            <NextImage
              src={testimonial.logo}
              alt='logo'
              width={240}
              height={0}
              useSkeleton
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <div className='relative flex h-[700px] w-full items-center justify-center lg:max-w-[1300px]'>
      <TestimonialSectionAmberBox />
      <div className='bg-primary-red custom-angled-rectangle-red-testimonials-mobile lg:custom-angled-rectangle-red-testimonials h-[600px] w-full lg:h-[600px] lg:max-w-[1200px] '>
        <div className='relative mx-10 flex h-full flex-col py-20 text-white lg:mx-40'>
          <h1>
            Why people love
            <br />
            to work with us.
          </h1>
          <div className='w-full'>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              effect='slide'
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              navigation={{
                enabled: true,
                prevEl: prevEl,
                nextEl: nextEl,
              }}
              loop={true}
              style={
                {
                  '--swiper-pagination-color': '#FFFFFF',
                  '--swiper-pagination-bullet-inactive-color': '#FFFFFF',
                  '--swiper-pagination-bullet-horizontal-gap': '6px',
                } as CSSProperties
              }
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialSlide testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className='absolute bottom-16 left-0 z-10 hidden lg:inline-flex'
              ref={(node) => setPrevEl(node)}
            >
              <IoIosArrowBack size={30} />
            </button>
            <button
              className='absolute bottom-16 right-0 z-10 hidden lg:inline-flex'
              ref={(node) => setNextEl(node)}
            >
              <IoIosArrowForward size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
