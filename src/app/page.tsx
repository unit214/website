'use client';

import Head from 'next/head';
import * as React from 'react';

import CyanBox from '@/components/CyanBox';

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
      <Head>
        <title>Hi there</title>
      </Head>
      <div className='h-[4000px] items-center justify-center'>
        <div className='bg-primary-amber custom-angled-rectangle-yellow absolute h-[824px] w-full justify-center' />
        <CyanBox />
      </div>
    </main>
  );
}
