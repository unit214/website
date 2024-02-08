import { ReactElement } from 'react'

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
