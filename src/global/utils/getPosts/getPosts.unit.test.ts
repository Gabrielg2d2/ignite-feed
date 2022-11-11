import { getPosts } from '.'

describe('getPosts', () => {
  it('should be able to get posts', async () => {
    const setPost = jest.fn()
    const apiGet = jest.fn()

    await getPosts({
      setPost,
      apiGet
    })

    expect(setPost).toHaveBeenCalled()
    expect(apiGet).toHaveBeenCalled()
  })

  it('should be able to get posts with default api', async () => {
    const setPost = jest.fn()

    await getPosts({
      setPost
    })

    expect(setPost).toHaveBeenCalled()
  })

  it('should be able to get posts with default api and setPost', async () => {
    const response = await getPosts({
      setPost: jest.fn(),
      apiGet: async () =>
        await Promise.resolve({
          status: 201,
          data: []
        })
    })

    expect(response).toEqual([])
  })

  it('should return an empty array, when the data is equal to undefined', async () => {
    const response = await getPosts({
      setPost: jest.fn(),
      apiGet: async () =>
        await Promise.resolve({
          status: 200,
          data: undefined
        })
    })

    expect(response).toEqual([])
  })
})
