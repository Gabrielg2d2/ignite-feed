import { render, screen } from '@testing-library/react'
import { PageHome } from '.'

describe('Page - PageHome', () => {
  it('should render the page', () => {
    render(<PageHome />)
    expect(screen.getByTestId('page-home')).toBeInTheDocument()
  })

  it('should render snapshot component Home', () => {
    render(<PageHome />)

    expect(screen.getByText(/ignite feed/i)).toBeInTheDocument()
  })
})
