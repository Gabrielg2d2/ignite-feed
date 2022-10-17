import { render } from '@testing-library/react'
import { Header } from '.'

describe('Header', () => {
  it('should render snapshot component Header', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
