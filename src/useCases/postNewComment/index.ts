import { ICommentProps } from '../../global/types/IPostProps'
import { api } from '../../service/api'

export interface IPostNewComment {
  newComment: ICommentProps
  apiPost?: (url: string, data: ICommentProps) => Promise<any>
}

export async function postNewComment({
  newComment,
  apiPost = api.post
}: IPostNewComment): Promise<number> {
  try {
    const response = await apiPost('/comments', newComment)

    return response.status
  } catch (error) {
    return 404
  }
}
