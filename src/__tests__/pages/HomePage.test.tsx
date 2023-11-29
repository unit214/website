import { render, screen } from '@testing-library/react'

import HomePage from '@/app/page'

jest.mock('swiper/react', () => ({
  Swiper: () => null,
  SwiperSlide: () => null,
}))
jest.mock('swiper/modules', () => ({}))
jest.mock('swiper/css', () => ({}))

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<HomePage />)

    const heading = screen.getByText(/FULL STACK DEVELOPMENT/i)

    expect(heading).toBeInTheDocument()
  })
})
