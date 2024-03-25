'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function ClientRedirect({ url }: { url: string }) {
  useEffect(() => {
    redirect(url)
  }, [url])
  return <></>
}
