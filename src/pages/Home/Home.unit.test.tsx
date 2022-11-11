import { render, screen } from '@testing-library/react'
import { PageHome } from '.'

describe('Page - PageHome', () => {
  it('should render the page', () => {
    render(<PageHome />)
    expect(screen.getByTestId('page-home')).toBeInTheDocument()
  })
})
