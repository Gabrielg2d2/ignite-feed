import { ReactElement, JSXElementConstructor } from 'react'
import userEvent from '@testing-library/user-event'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import { render, screen, waitFor } from '@testing-library/react'
import { mockPosts } from '../../mocks/Posts'
import { Post } from '.'

interface ISetupReturnProps {
  user: UserEvent
}

describe('Post - integration', () => {
  function setup(
    jsx: ReactElement<any, string | JSXElementConstructor<any>>
  ): ISetupReturnProps {
    return {
      user: userEvent.setup(),
      ...render(jsx)
    }
  }

  it('should enter a value in the comment field and submit the form', async () => {
    const { user } = setup(<Post {...mockPosts[0]} />)

    const elementForm = screen.getByRole('form', { name: /form comment/i })
    const elementTextArea = screen.getByRole('textbox')

    expect(elementForm).toBeInTheDocument()
    expect(elementTextArea).toBeInTheDocument()

    await user.type(elementTextArea, 'test comment 123')
    expect(elementTextArea).toHaveValue('test comment 123')

    const elementButtonSubmit = screen.getByTestId('button_submit_form_comment')
    expect(elementButtonSubmit).toBeInTheDocument()

    await userEvent.click(elementButtonSubmit)

    await waitFor(() => {
      expect(elementTextArea).toHaveValue('')
      expect(elementButtonSubmit).not.toBeInTheDocument()
    })
  })
})
