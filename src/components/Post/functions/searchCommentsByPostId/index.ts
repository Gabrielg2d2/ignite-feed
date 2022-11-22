import { ICommentProps } from '../../../../global/types/IPostProps'
import { getCommentIdPost } from '../../../../useCases/getCommentIdPost'

export interface INewCommentProps {
  id: string
  setComments: (comments: ICommentProps[]) => void
  getComments?: typeof getCommentIdPost
}

export async function searchCommentsByPostId({
  id,
  setComments,
  getComments = getCommentIdPost
}: INewCommentProps): Promise<void> {
  const data = await getComments({ id })

  setComments(data)
}
