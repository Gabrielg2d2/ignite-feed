import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('should render App', () => {
    render(<App />)
    expect(screen.getByTestId('page-home')).toBeInTheDocument()
  })

  it('should render component App with text Ignite feed of page home', () => {
    render(<App />)

    expect(screen.getByText(/ignite feed/i)).toBeInTheDocument()
  })

  it('should render component App with data-testid', () => {
    render(<App />)

    expect(screen.getByTestId('app-test')).toBeInTheDocument()
  })
})
