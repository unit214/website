import { ReactNode } from 'react'
import { FiMail } from 'react-icons/fi'

import { cn } from '@/lib/utils'

import NextLink from '@/components/NextLink'

import { contactEmail } from '@/constant/contact'

import Unit214LogoBW from '~/svg/unit214_bw.svg'

export default function Header({
  opacity,
  className,
  clickOnLogoBehaviour,
  clickOnContactBehaviour,
}: {
  opacity?: number
  className?: string
  clickOnLogoBehaviour: 'scrollUp' | 'goHome'
  clickOnContactBehaviour: 'scrollDown' | 'sendMail'
}) {
  function scrollUp() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  function scrollDown() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <div
        style={{ opacity: opacity }}
        className={cn(
          'mt-5 flex max-h-[100px] w-full items-start justify-between px-5 lg:mt-12 lg:max-w-[1300px] lg:px-16',
          className,
        )}
      >
        {clickOnLogoBehaviour === 'scrollUp' && (
          <button onClick={scrollUp}>
            <Unit214LogoBW className='w-[120px]' />
          </button>
        )}
        {clickOnLogoBehaviour === 'goHome' && (
          <NextLink href='/'>
            <Unit214LogoBW className='w-[120px]' />
          </NextLink>
        )}
        {clickOnContactBehaviour === 'scrollDown' && (
          <button onClick={scrollDown}>
            <ContactButtonContent />
          </button>
        )}
        {clickOnContactBehaviour === 'sendMail' && (
          <NextLink href={`mailto:${contactEmail}`} className='no-underline'>
            <ContactButtonContent />
          </NextLink>
        )}
      </div>
    </div>
  )
}

function ContactButtonContent() {
  return (
    <div className='flex h-9 w-fit items-center justify-center gap-1.5 rounded-full bg-white px-4 transition-opacity duration-200 ease-in hover:opacity-80'>
      <span className='hidden text-sm font-semibold lg:flex'>
        Let's get in touch!
      </span>
      <FiMail />
    </div>
  )
}

export function HeaderPolygonsCyanAmber({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) {
  return (
    <div className={cn('-top-[540px] z-10 lg:-top-[690px]', className)}>
      <div className='flex w-full justify-center'>
        {/* Amber polygon */}
        <div className='header-polygon-amber absolute h-[700px] w-full justify-center bg-primary-amber lg:h-[824px]' />
        {/* Cyan polygon */}
        <div className='header-polygon-cyan h-[700px] w-full bg-primary-cyan lg:h-[850px] lg:w-[1300px]'>
          {children}
        </div>
      </div>
    </div>
  )
}
