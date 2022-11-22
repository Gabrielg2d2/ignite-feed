import { ReactElement, JSXElementConstructor } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
      id: '1',
      username: 'user-name-test',
      userProfession: 'user-profession-test',
      userSite: 'user-site-test',
      userHashtag: ['user-hashtag-test', 'user-hashtag-test-2'],
      publicationDate: '2021-08-01T00:00:00.000Z',
      messagePost: 'user-message-post-test',
      comments: []
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
      id: '1',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/663432?v=4',
        alt: 'test user alt image'
      },
      username: 'user-name-test',
      userProfession: 'user-profession-test',
      userSite: 'user-site-test',
      userHashtag: ['user-hashtag-test', 'user-hashtag-test-2'],
      publicationDate: '2021-08-01T00:00:00.000Z',
      messagePost: 'user-message-post-test',
      comments: []
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

describe('Post - userEven', () => {
  // setup function
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function setup(jsx: ReactElement<any, string | JSXElementConstructor<any>>) {
    return {
      user: userEvent.setup(),
      ...render(jsx)
    }
  }

  it('should submit in form comment', async () => {
    const { user } = setup(<Post {...mockPosts[0]} />)

    const elementForm = screen.getByRole('form', { name: /form comment/i })
    const elementTextArea = screen.getByRole('textbox')

    expect(elementForm).toBeInTheDocument()
    expect(elementTextArea).toBeInTheDocument()

    await user.type(elementTextArea, 'test comment 123')
    expect(elementTextArea).toHaveValue('test comment 123')

    const elementButtonSubmit = screen.getByTestId('button_submit_form_comment')
    expect(elementButtonSubmit).toBeInTheDocument()

    await user.click(elementButtonSubmit)

    screen.debug()

    // expect(elementTextArea).toHaveValue('')
    // expect(elementButtonSubmit).not.toBeInTheDocument()
  })
})
