import { FormEvent } from 'react'
import { handleCreateNewComment } from '.'

const postNewCommentSpy = jest.fn().mockReturnValue(201)

const objSpy = {
  event: {
    preventDefault: jest.fn(),
    target: {
      comment: {
        value: 'comment'
      }
    }
  } as unknown as FormEvent<HTMLFormElement>,
  id: 'idJest',
  avatar: {
    src: 'srcJest',
    alt: 'altJest'
  },
  username: 'usernameJest',
  publicationDate: '2021-08-01T00:00:00.000Z',
  setComments: jest.fn(),
  postNewComment: postNewCommentSpy,
  searchCommentsByPostId: jest.fn(),
  newComment: 'newCommentJest',
  setNewComment: jest.fn()
}

describe('handleCreateNewComment', (): void => {
  it('should return a function', (): void => {
    const result = handleCreateNewComment({ ...objSpy })

    expect(result).toBeInstanceOf(Promise)
    expect(objSpy.event.preventDefault).toHaveBeenCalledTimes(1)
  })

  it('should return 201 success status then clear comment field and call searchCommentsByPostId function', async () => {
    await handleCreateNewComment({ ...objSpy })

    expect(objSpy.postNewComment).toHaveBeenCalledTimes(1)
    expect(objSpy.searchCommentsByPostId).toHaveBeenCalledTimes(1)

    expect(postNewCommentSpy).toHaveReturnedWith(201)
  })
})
