import { ReactElement, JSXElementConstructor } from 'react'
import userEvent from '@testing-library/user-event'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import { render, screen, waitFor } from '@testing-library/react'
import { mockPosts } from '../../mocks/Posts'
import { Post } from '.'

interface ISetupReturnProps {
  user: UserEvent
}

jest.mock('../../useCases/postNewComment', () => ({
  postNewComment: jest.fn().mockImplementation((newComment) => {
    return newComment
  })
}))

jest.mock('./functions/searchCommentsByPostId', () => ({
  searchCommentsByPostId: jest.fn().mockImplementation((id) => {
    return []
  })
}))

const handleCreateNewCommentSpy = jest.fn().mockImplementation((objSpy) => {
  objSpy.postNewComment(objSpy.id, objSpy.newComment)
  objSpy.setNewComment('')
})

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
    const { user } = setup(
      <Post
        handleCreateNewComment={handleCreateNewCommentSpy}
        {...mockPosts[0]}
      />
    )

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
