import { ReactNode } from 'react'

import Footer from '@/components/Footer'
import Header, { HeaderPolygonsCyanAmber } from '@/components/Header'

export default function HeaderFooterLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className='relative'>
      <HeaderPolygonsCyanAmber className='fixed w-full lg:left-1/2 lg:-translate-x-1/2'>
        <Header
          className='absolute bottom-10'
          clickOnLogoBehaviour='goHome'
          clickOnContactBehaviour='sendMail'
        />
      </HeaderPolygonsCyanAmber>
      <div className='flex min-h-screen w-full flex-col items-center justify-center pt-[160px]'>
        <div className='w-full max-w-[1300px] grow px-10 pt-5 lg:px-20'>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
