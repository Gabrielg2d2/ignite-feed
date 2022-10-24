import { render, screen } from '@testing-library/react'
import { Comment } from '.'

const mockComment = {
  id: '1',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/101529710?v=4',
    alt: 'Avatar do usuário'
  },
  username: 'Laura Santos',
  time: '2021-08-01T00:00:00.000Z',
  message: 'Muito bom, parabéns!',
  likes: 3
}

describe('Comment', () => {
  it('should render correctly component Comment', () => {
    render(<Comment {...mockComment} />)

    expect(screen.getByText(/Muito bom, parabéns!/i)).toBeInTheDocument()
  })

  it('should render correctly component Comment with id', () => {
    render(<Comment data-testid="comment-id" {...mockComment} />)

    const id = screen.getByTestId('comment-id')

    expect(id).toBeInTheDocument()
    expect(id).toHaveAttribute('id', '1')
  })

  it('should render correctly component Comment with avatar', () => {
    render(<Comment {...mockComment} />)

    const avatar = screen.getByAltText('Avatar do usuário')

    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/101529710?v=4'
    )
  })

  it('should render correctly component Comment with username', () => {
    render(<Comment {...mockComment} />)

    expect(screen.getByText(/Laura Santos/i)).toBeInTheDocument()
  })

  it('should render correctly component Comment with likes', () => {
    render(<Comment {...mockComment} />)

    expect(screen.getByText(/aplaudir - 3/i)).toBeInTheDocument()
  })
})
