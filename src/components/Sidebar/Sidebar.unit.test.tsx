import { render, screen } from '@testing-library/react'
import { Sidebar } from '.'

describe('Sidebar', () => {
  it('should be able to render component Sidebar', () => {
    render(<Sidebar />)

    expect(screen.getByText('John Constantine')).toBeInTheDocument()
    expect(screen.getByText('Web Developer')).toBeInTheDocument()
    expect(screen.getByText('Editar Perfil')).toBeInTheDocument()
  })

  it('should be able to render component Sidebar with image cover sidebar', () => {
    render(<Sidebar />)

    expect(
      screen.getByAltText('background image cover sidebar')
    ).toBeInTheDocument()
  })

  it('should be able to render component Sidebar with user avatar', () => {
    render(<Sidebar />)

    expect(screen.getByAltText('user avatar')).toBeInTheDocument()
  })
})
