import { getCommentIdPost } from '.'

describe('getCommentIdPost', () => {
  it('should call apiGet function, just once', async () => {
    const apiGet = jest.fn()

    await getCommentIdPost({
      id: 'jest',
      apiGet
    })

    expect(apiGet).toHaveBeenCalled()
    expect(apiGet).toHaveBeenCalledTimes(1)
  })

  it('should fetch all comments according to post id', async () => {
    const apiGet = jest.fn().mockReturnValue(
      Promise.resolve({
        status: 200,
        data: [
          {
            idPost: 'Jest',
            id: 'JestId',
            avatar: {
              src: 'https://avatars.jest.com',
              alt: 'Avatar jest user'
            },
            username: 'Jest User',
            time: '2022-10-24T00:00:00.000Z',
            message: 'Test Jest Comment!',
            likes: 55
          }
        ]
      })
    )

    const dataComment = await getCommentIdPost({
      id: 'jest',
      apiGet
    })

    expect(dataComment).toEqual([
      {
        idPost: 'Jest',
        id: 'JestId',
        avatar: {
          src: 'https://avatars.jest.com',
          alt: 'Avatar jest user'
        },
        username: 'Jest User',
        time: '2022-10-24T00:00:00.000Z',
        message: 'Test Jest Comment!',
        likes: 55
      }
    ])
  })
})
