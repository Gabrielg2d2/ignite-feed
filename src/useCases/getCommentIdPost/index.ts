import { ICommentProps } from '../../global/types/IPostProps'
import { api } from '../../service/api'

interface INewCommentProps {
  id: string
  apiGet?: typeof api.get
}

export async function getCommentIdPost({
  id,
  apiGet = api.get
}: INewCommentProps): Promise<ICommentProps[]> {
  try {
    const response = await apiGet(`/comments?idPost=${id}`)

    return response.data
  } catch (error) {
    return []
  }
}
