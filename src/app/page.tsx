'use client';

import AmberBox from '@/components/AmberBox';
import CyanBoxAndHeader from '@/components/CyanBoxAndHeader';
import Footer from '@/components/Footer';
import OurMission from '@/components/OurMission';
import Testimonials from '@/components/Testimonials';
import WhatWeDo from '@/components/WhatWeDo';
import WhoWeAre from '@/components/WhoWeAre';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <main>
      <div className='relative'>
        <AmberBox />
        <CyanBoxAndHeader />
        <div className='flex w-full flex-col items-center justify-center'>
          <WhatWeDo />
          <OurMission />
          <WhoWeAre />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </main>
  );
}
