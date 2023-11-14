'use client';

import * as React from 'react';

import AmberBox from '@/components/AmberBox';
import CyanBoxAndHeader from '@/components/CyanBoxAndHeader';
import { OurMission } from '@/components/OurMission';
import { WhatWeDo } from '@/components/WhatWeDo';

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
      <div className='h-[4000px]'>
        <AmberBox />
        <CyanBoxAndHeader />
        <div className='flex w-full flex-col items-center justify-center'>
          <WhatWeDo />
          <OurMission />
        </div>
      </div>
    </main>
  );
}
