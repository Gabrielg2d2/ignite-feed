import { render, screen } from '@testing-library/react'
import { Post } from '.'
import { mockPosts } from '../../mocks/Posts'

describe('Post', () => {
  it('should render correctly component Post', () => {
    render(<Post {...mockPosts[0]} />)

    expect(screen.getByText(/Fala galera 👋/i)).toBeInTheDocument()
    expect(screen.getByText(/👉/i)).toBeInTheDocument()
    expect(screen.getByText(/#react/i)).toBeInTheDocument()
  })

  it('should render correctly component Post no attributes avatar', () => {
    const user = {
      id: 1,
      username: 'user-name-test',
      userProfession: 'user-profession-test',
      userSite: 'user-site-test',
      userHashtag: ['user-hashtag-test', 'user-hashtag-test-2'],
      publicationDate: '2021-08-01T00:00:00.000Z',
      messagePost: 'user-message-post-test'
    }

    render(<Post {...user} />)

    expect(screen.getByTestId('image-avatar')).toHaveAttribute('src', '#')
    expect(screen.getByTestId('image-avatar')).toHaveAttribute(
      'alt',
      'no avatar'
    )
  })

  it('should render correctly component Post with attributes', () => {
    const user = {
      id: 1,
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/663432?v=4',
        alt: 'test user alt image'
      },
      username: 'user-name-test',
      userProfession: 'user-profession-test',
      userSite: 'user-site-test',
      userHashtag: ['user-hashtag-test', 'user-hashtag-test-2'],
      publicationDate: '2021-08-01T00:00:00.000Z',
      messagePost: 'user-message-post-test'
    }

    render(<Post {...user} />)

    expect(
      screen.getByRole('img', { name: /test user alt image/i })
    ).toHaveAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/663432?v=4'
    )

    const [hashtagOne, hashtagTwo] = screen.getAllByText(/user-hashtag-test/i)

    expect(screen.getByText(/user-name-test/i)).toBeInTheDocument()
    expect(screen.getByText(/user-profession-test/i)).toBeInTheDocument()
    expect(screen.getByText(/user-site-test/i)).toBeInTheDocument()
    expect(hashtagOne).toHaveAttribute('href', '#')
    expect(hashtagTwo).toHaveAttribute('href', '#')
    expect(screen.getByText(/user-message-post-test/i)).toBeInTheDocument()

    expect(screen.getByText(/Publicado em/i)).toBeInTheDocument()
    expect(screen.getByText(/Publicado em/i)).toHaveAttribute(
      'datetime',
      '2021-08-01T00:00:00.000Z'
    )
  })
})
