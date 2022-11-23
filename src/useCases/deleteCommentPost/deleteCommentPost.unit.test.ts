import { deleteCommentPost } from '.'

const comment = {
  idpost: '1',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/101529710?v=4',
    alt: 'Avatar do usuário'
  },
  username: 'Lucas Santos',
  time: '2021-08-01T00:00:00.000Z',
  message: 'test comment 123',
  likes: 0,
  id: 1
}

const apiDelete = jest.fn()
const id = JSON.stringify(comment.id)

describe('DeleteCommentPost', () => {
  it('should delete a comment post with a given id', async () => {
    const idDelete = await deleteCommentPost({ id, apiDelete })

    expect(apiDelete).toBeCalledTimes(1)
    expect(idDelete).toEqual(id)
  })

  it('should throw an error if the apiDelete fails', async () => {
    const apiDeleteError = jest.fn().mockRejectedValueOnce(new Error('Error'))

    const responseError = await deleteCommentPost({
      id: 'idNoExist',
      apiDelete: apiDeleteError
    })

    expect(responseError).toEqual('Error, unable to delete post comment')
  })
})
