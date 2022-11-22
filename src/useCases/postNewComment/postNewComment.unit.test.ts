import { postNewComment } from '.'

const newComment = {
  idPost: '2',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/101529710?v=4',
    alt: 'Avatar do usuário'
  },
  username: 'Laura Santos',
  time: '2022-10-24T00:00:00.000Z',
  message: 'Muito bom, parabéns!',
  likes: 0
}

describe('postNewComment', () => {
  it('should return 201 when post a new comment', async () => {
    const apiPost = jest.fn().mockResolvedValue({ status: 201 })
    const response = await postNewComment({ newComment, apiPost })
    expect(response).toBe(201)
  })

  it('should return 404 when post a new comment', async () => {
    const apiPost = jest.fn().mockResolvedValue({ status: 404 })
    const response = await postNewComment({ newComment, apiPost })
    expect(response).toBe(404)
  })

  it('should call apiPost function once', async () => {
    const apiPost = jest.fn()
    await postNewComment({ newComment, apiPost })

    expect(apiPost).toBeCalled()
    expect(apiPost).toBeCalledTimes(1)
  })

  it('should call apiPost function with correct params', async () => {
    const apiPost = jest.fn()
    await postNewComment({ newComment, apiPost })

    expect(apiPost).toBeCalledWith('/comments', newComment)
  })

  it('should call apiPost function with correct params', async () => {
    const apiPost = jest.fn().mockRejectedValue(new Error('Error'))
    const response = await postNewComment({ newComment, apiPost })

    expect(response).toBe(404)
  })
})
