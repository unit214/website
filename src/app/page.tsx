'use client';

import Head from 'next/head';
import * as React from 'react';

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
      <div className='bg-primary-cyan h-20 w-full font-mono'>Unit 214</div>
      <div className='bg-primary-red h-20 w-full'>Coming</div>
      <div className='bg-primary-amber h-20 w-full'>soon...</div>
    </main>
  );
}
