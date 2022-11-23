import { ICommentProps } from '../../global/types/IPostProps'
import { api } from '../../service/api'

interface IDeleteCommentPost {
  id: string
  apiDelete: typeof api.delete
}

export async function deleteCommentPost({
  id,
  apiDelete
}: IDeleteCommentPost): Promise<string> {
  try {
    await apiDelete<ICommentProps>(`/comments/${id}`)

    return id
  } catch (error) {
    return 'Error, unable to delete post comment'
  }
}
