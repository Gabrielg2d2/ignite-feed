import { getPosts } from '.'

describe('getPosts', (): void => {
  const mockPosts = [
    {
      id: '1',
      title: 'title',
      body: 'body',
      userId: '1'
    }
  ]

  it('should return an array of posts', async (): Promise<void> => {
    const setPost = jest.fn()
    const apiGet = jest.fn().mockResolvedValue({ status: 200, data: mockPosts })

    await getPosts({ setPost, apiGet })

    expect(apiGet).toBeCalledWith('/posts')
    expect(setPost).toBeCalledWith(mockPosts)
  })

  it('should return undefined', async (): Promise<void> => {
    const setPost = jest.fn()
    const apiGet = jest.fn().mockRejectedValue({ status: 400, data: [] })

    const posts = await getPosts({ setPost, apiGet })

    expect(apiGet).toBeCalledWith('/posts')
    expect(setPost).toBeCalledWith([])
    expect(posts).toBeUndefined()
  })

  it('should return an empty array, when the post data does not exist, ', async (): Promise<void> => {
    const setPost = jest.fn()
    const apiGet = jest.fn().mockRejectedValue({ status: 200, data: undefined })

    const posts = await getPosts({ setPost, apiGet })

    expect(apiGet).toBeCalledWith('/posts')
    expect(setPost).toBeCalledWith([])
    expect(posts).toBeUndefined()
  })
})
