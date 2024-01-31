import Footer from '@/components/Footer'
import HeaderAndMainClaim from '@/components/HeaderAndMainClaim'
import LetsGetInTouch from '@/components/LetsGetInTouch'
import OurMission from '@/components/OurMission'
import Testimonials from '@/components/Testimonials'
import WhatWeDo from '@/components/WhatWeDo'
import WhoWeAre from '@/components/WhoWeAre'

export default function HomePage() {
  return (
    <main>
      <div className='relative'>
        <HeaderAndMainClaim />
        <div className='flex w-full flex-col items-center justify-center'>
          <WhatWeDo />
          <OurMission />
          <WhoWeAre />
          <Testimonials />
          <LetsGetInTouch />
          <Footer />
        </div>
      </div>
    </main>
  )
}
