'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export function GoatCounter() {
  const pathname = usePathname()
  const [goatcounter, setGoatcounter] = useState<GoatCounter | null>(null)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    if (!goatcounter) {
      return
    }

    if (!isInitialLoad) {
      goatcounter.count({
        path: pathname,
      })
    }
    setIsInitialLoad(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, goatcounter])

  return (
    <Script
      strategy='afterInteractive'
      data-goatcounter='https://unit214.goatcounter.com/count'
      src='https://gc.zgo.at/count.js'
      // data-goatcounter-settings='{"allow_local": true}'
      onLoad={() => {
        if (!window.goatcounter) {
          throw new Error('goatcounter object is not defined')
        }
        setGoatcounter(window.goatcounter)
      }}
    />
  )
}

interface GoatCounter {
  count: (options: { path: string }) => void
}

declare global {
  interface Window {
    goatcounter: GoatCounter
  }
}
