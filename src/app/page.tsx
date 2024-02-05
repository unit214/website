import Footer from '@/components/Footer'
import HeaderAndMainClaim from '@/components/home/HeaderAndMainClaim'
import LetsGetInTouch from '@/components/home/LetsGetInTouch'
import OurMission from '@/components/home/OurMission'
import Testimonials from '@/components/home/Testimonials'
import WhatWeDo from '@/components/home/WhatWeDo'
import WhoWeAre from '@/components/home/WhoWeAre'

export default function HomePage() {
  return (
    <main>
      <div className='relative'>
        <HeaderAndMainClaim />
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='w-full lg:max-w-[1300px]'>
            <WhatWeDo />
            <OurMission />
            <WhoWeAre />
            <Testimonials />
            <LetsGetInTouch />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  )
}
