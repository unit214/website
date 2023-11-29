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
