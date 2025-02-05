'use client'

import { useEffect, useState } from 'react'
import { BsArrowDownShort } from 'react-icons/bs'
import { CgMouse } from 'react-icons/cg'

import { isMobile } from '@/lib/utils'

import Header, { HeaderPolygonsCyanAmber } from '@/components/Header'

export default function HeaderAndMainClaim() {
  const [headerOpacity, setHeaderOpacity] = useState(0)
  const [scrollDownButtonOpacity, setScrollDownButtonOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const offsetTop = isMobile() ? 390 : 540
      // Start increasing opacity of header once offsetTop is reached
      if (scrollTop >= offsetTop) {
        setHeaderOpacity(Math.min(1, (scrollTop - offsetTop) / 150))
      } else {
        setHeaderOpacity(0)
      }
      // Start decreasing opacity of scroll down button to 0 before offsetTop is reached
      if (scrollTop < offsetTop) {
        setScrollDownButtonOpacity(Math.min(1, (offsetTop - scrollTop) / 150))
      } else {
        setScrollDownButtonOpacity(0)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollDown() {
    const offsetTop = isMobile() ? 390 : 540
    window.scroll({
      top: offsetTop + 150,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <HeaderPolygonsCyanAmber className='sticky'>
      <div className='flex h-full w-full flex-col justify-center'>
        <Header
          className='absolute top-16'
          clickOnLogoBehaviour='scrollUp'
          clickOnContactBehaviour='scrollDown'
        />
        {headerOpacity > 0 && (
          <Header
            opacity={headerOpacity}
            className='absolute bottom-10'
            clickOnLogoBehaviour='scrollUp'
            clickOnContactBehaviour='scrollDown'
          />
        )}
        <MainClaim />
        {scrollDownButtonOpacity > 0 && (
          <button
            style={{ opacity: scrollDownButtonOpacity }}
            className='absolute bottom-12 flex max-w-[1300px] flex-col items-center gap-1 pl-6 text-white lg:gap-4 lg:pl-24'
            onClick={scrollDown}
          >
            <div className='text-xs font-light [writing-mode:vertical-lr]'>
              WHAT WE DO
            </div>
            <CgMouse className='hidden lg:flex' size={40} />
            <BsArrowDownShort className='flex lg:hidden' size={40} />
          </button>
        )}
      </div>
    </HeaderPolygonsCyanAmber>
  )
}

function MainClaim() {
  return (
    <div className='px-10 font-mono text-main-mobile font-extrabold text-white lg:px-28 lg:text-main'>
      <span className='text-white/50'> UNLOCK YOUR </span> POTENTIAL
      <br />
      <span className='text-white/50'> WITH OUR </span> FULL STACK DEVELOPMENT
      <br className='hidden sm:inline-flex' />
      <span className='text-white/50'> AND </span>{' '}
      <br className='inline-flex sm:hidden' />
      AI CONSULTING
    </div>
  )
}
