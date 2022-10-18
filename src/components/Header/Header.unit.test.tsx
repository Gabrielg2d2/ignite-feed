import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header', () => {
  it('should render snapshot component Header', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })

  it('should render component Header with by text Ignite Feed', () => {
    render(<Header />)

    const currentText = screen.getByText(/ignite feed/i)

    expect(currentText).toBeInTheDocument()
  })
})
