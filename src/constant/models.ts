import { FC, ReactElement, SVGProps } from 'react'

export type Testimonial = {
  source: string
  text: string
  logo?: string
  website?: TestimonialWebsite
}

export type TestimonialWebsite = {
  text: string
  url: string
}

export type Meta = {
  id: string
  title: string
  date: Date
  author: string
  tags: string[]
  previewImage?: string
  previewText: string
}

export type Post = {
  meta: Meta
  content: ReactElement
}

export type TeamMember = {
  name: string
  logo: FC<SVGProps<SVGSVGElement>>
  description: ReactElement
  linkedInLink: string
  gitHubLink: string
  calendarLink?: string
  calendarRedirectSegment?: string[] // local url segment used to redirect to calendar link ({baseUrl}/{calendarRedirectUrl})
}
