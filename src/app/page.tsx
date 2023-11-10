'use client';

import * as React from 'react';

import AmberBox from '@/components/AmberBox';
import CyanBoxAndHeader from '@/components/CyanBoxAndHeader';

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
      <div className='h-[4000px] items-center justify-center'>
        <AmberBox />
        <CyanBoxAndHeader />
      </div>
    </main>
  );
}
