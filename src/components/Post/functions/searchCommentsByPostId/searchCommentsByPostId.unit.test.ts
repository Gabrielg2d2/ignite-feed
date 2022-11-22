import { searchCommentsByPostId } from '.'
import { ICommentProps } from '../../../../global/types/IPostProps'

describe('searchCommentsByPostId', (): void => {
  it('should return a function', (): void => {
    expect(searchCommentsByPostId).toBeInstanceOf(Function)
  })

  it('should call setComments and getComments functions only once', async (): Promise<void> => {
    const getCommentsSpy = jest.fn()
    const setCommentsSpy = jest.fn()

    await searchCommentsByPostId({
      id: 'jest',
      setComments: setCommentsSpy,
      getComments: getCommentsSpy
    })

    expect(getCommentsSpy).toHaveBeenCalled()
    expect(getCommentsSpy).toHaveBeenCalledTimes(1)

    expect(setCommentsSpy).toHaveBeenCalled()
    expect(setCommentsSpy).toHaveBeenCalledTimes(1)
  })

  it('must set a specific value in the setComments function', async (): Promise<void> => {
    let comments: ICommentProps[] = []
    function setCommentsSpy(arrComments: ICommentProps[]): void {
      comments = arrComments
    }

    const getCommentsSpy = jest.fn().mockReturnValue(Promise.resolve([]))

    await searchCommentsByPostId({
      id: 'jest',
      setComments: setCommentsSpy,
      getComments: getCommentsSpy
    })

    expect(comments).toEqual([])
  })
})
