import { render, screen } from '@testing-library/react'
import { Avatar } from '.'

describe('Avatar', () => {
  it('should render correctly component Avatar', () => {
    render(
      <Avatar
        src="https://avatars.githubusercontent.com/u/663432?v=4"
        alt="test user alt image"
      />
    )

    expect(
      screen.getByRole('img', { name: /test user alt image/i })
    ).toHaveAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/663432?v=4'
    )
  })

  it('should render correctly component Avatar with variant secondary', () => {
    render(
      <Avatar
        src="https://avatars.githubusercontent.com/u/663432?v=4"
        alt="test user alt image"
        variant="secondary"
      />
    )

    expect(
      screen.getByRole('img', { name: /test user alt image/i })
    ).toHaveAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/663432?v=4'
    )
  })

  it('should render correctly component Avatar with variant secondary with class avatarSecondary', () => {
    render(
      <Avatar
        src="https://avatars.githubusercontent.com/u/663432?v=4"
        alt="test user alt image"
        variant="secondary"
      />
    )

    expect(
      screen.getByRole('img', { name: /test user alt image/i })
    ).toHaveStyle({
      width: '3.5rem',
      height: '3.5rem'
    })
  })
})
