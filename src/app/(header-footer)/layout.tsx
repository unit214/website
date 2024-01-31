'use client'

import { ReactNode } from 'react'

import CyanAmberHeaderBox from '@/components/CyanAmberHeaderBox'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function HeaderFooterLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className='relative'>
      <CyanAmberHeaderBox className='fixed w-full lg:left-1/2 lg:-translate-x-1/2'>
        <Header
          className='absolute bottom-10'
          clickOnLogoBehaviour='goHome'
          clickOnContactBehaviour='sendMail'
        />
      </CyanAmberHeaderBox>
      <div className='flex w-full flex-col items-center justify-center pt-[160px]  min-h-screen'>
        <div className='w-full max-w-[1300px] px-10 lg:px-20 pt-5 grow'>
          {children}
        </div>
        <Footer text='Home' link='/' />
      </div>
    </div>
  )
}
