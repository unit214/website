import Link from 'next/link'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export default function NextLink({
  href,
  children,
  isExternalLink,
  className,
}: {
  href: string
  children: ReactNode
  isExternalLink?: boolean
  className?: string
}) {
  const linkProps = isExternalLink
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <Link href={href} className={cn('underline', className)} {...linkProps}>
      {children}
    </Link>
  )
}
