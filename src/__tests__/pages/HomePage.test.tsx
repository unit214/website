import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import HeaderAndMainClaim from '@/components/home/HeaderAndMainClaim'

jest.mock('swiper/react', () => ({
  Swiper: () => null,
  SwiperSlide: () => null,
}))
jest.mock('swiper/modules', () => ({}))
jest.mock('swiper/css', () => ({}))

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<HeaderAndMainClaim />)

    const heading = screen.getByText(/FULL STACK DEVELOPMENT/i)

    expect(heading).toBeInTheDocument()
  })
})
