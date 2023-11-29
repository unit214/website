import { Metadata } from 'next'

import NextLink from '@/components/NextLink'

import Unit214Logo from '~/svg/unit214.svg'
export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <Unit214Logo className='w-[120px]' />
          <h1 className='mb-8 mt-8 text-4xl lg:text-6xl'>Page Not Found</h1>
          <NextLink href='/'>Back to Home</NextLink>
        </div>
      </section>
    </main>
  )
}
